import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, { Background, Controls, Handle, Position } from 'reactflow';

/**
 * ReactFlow에서 사용하는 개별 사용자 노드 컴포넌트입니다.
 * 
 * - showName이 참이면 카드 형태로 사용자 이름을 표시합니다.
 * - showDetails가 참이면 추가 세부 정보(소개, 연락처, 이메일)를 함께 표시합니다.
 * - 기본 상태(비활성 상태)에서는 작은 원(dot) 형태로 노드를 간략히 표시합니다.
 */
function UserGraphNode({ data }) {
  if (data.showName) {
    return (
      <div className={data.showDetails ? 'node-card expanded' : 'node-card'}>
        {/* ReactFlow의 연결 선이 입력/출력되는 핸들 지정 */}
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
        <strong>{data.user.name}</strong>
        {data.showDetails && (
          <dl>
            <div>
              <dt>소개</dt>
              <dd>{data.user.bio}</dd>
            </div>
            <div>
              <dt>연락처</dt>
              <dd>{data.user.contact}</dd>
            </div>
            <div>
              <dt>이메일</dt>
              <dd>{data.user.email}</dd>
            </div>
          </dl>
        )}
      </div>
    );
  }

  // 비활성화 노드 (점 형태)
  return (
    <div className="node-dot" aria-label={data.user.name}>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

// ReactFlow에 등록할 커스텀 노드 타입 매핑 정의
const nodeTypes = {
  userNode: UserGraphNode,
};

/**
 * ReactFlow를 사용하여 사용자 네트워크 관계망(팔로우/팔로잉)을 시각화하는 메인 그래프 컴포넌트입니다.
 * 원형 레이아웃 형태로 배치됩니다.
 * 
 * @param {Array} users 전체 사용자 목록
 * @param {Array} follows 전체 팔로우 관계 목록
 * @param {Object} selectedUser 현재 선택된 사용자 정보
 * @param {Function} onSelectUser 사용자 선택 처리 핸들러 함수
 */
function GraphView({ users, follows, selectedUser, onSelectUser }) {
  // 세부 정보 카드가 확장되어 열려있는 노드의 ID 상태 관리
  const [expandedNodeId, setExpandedNodeId] = useState(null);
  
  // 현재 선택된 사용자의 문자열 ID
  const selectedNodeId = selectedUser ? String(selectedUser.id) : null;

  /**
   * 선택된 사용자와 직접 팔로우 혹은 팔로잉 관계로 연결된 인접 노드 ID의 Set을 계산합니다.
   * 선택된 사용자가 없을 때는 빈 Set을 반환합니다.
   */
  const connectedNodeIds = useMemo(() => {
    if (!selectedNodeId) {
      return new Set();
    }

    const ids = new Set([selectedNodeId]);
    follows.forEach((follow) => {
      const source = String(follow.followerId);
      const target = String(follow.followingId);

      // 선택된 사용자가 팔로워인 경우 상대 노드 추가
      if (source === selectedNodeId) {
        ids.add(target);
      }
      // 선택된 사용자가 팔로잉 대상인 경우 상대 노드 추가
      if (target === selectedNodeId) {
        ids.add(source);
      }
    });

    return ids;
  }, [follows, selectedNodeId]);

  /**
   * 사용자 리스트를 원형으로 배치하기 위해 좌표와 상태(faded, highlighted 등)를 계산하여 ReactFlow의 nodes 배열로 변환합니다.
   */
  const nodes = useMemo(() => {
    const centerX = 420; // 원형의 중심 X좌표
    const centerY = 260; // 원형의 중심 Y좌표
    const radius = 220;  // 원형 레이아웃 반지름

    return users.map((user, index) => {
      // 인덱스를 기준으로 360도를 균등 배분하여 배치 각도 계산
      const angle = (2 * Math.PI * index) / users.length;
      
      // 선택 상태이고 나와 인접하지 않은 경우 반투명 흐리게 처리(faded)
      const isFaded = selectedNodeId && !connectedNodeIds.has(String(user.id));
      
      // 선택한 노드 본인이거나 직접 연결된 이웃 노드인 경우 강조 처리(highlighted)
      const isHighlighted = selectedNodeId && connectedNodeIds.has(String(user.id));
      const isSelected = selectedUser?.id === user.id;

      return {
        id: String(user.id),
        type: 'userNode',
        data: {
          user,
          showName: Boolean(isHighlighted), // 강조된 노드만 카드(이름) 형태로 표시
          showDetails: isSelected && expandedNodeId === String(user.id), // 클릭하여 디테일 오픈 상태인지 확인
        },
        // 원의 둘레를 따라 각 사용자 노드의 (x, y) 좌표 설정
        position: {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
        },
        // CSS 스타일 적용을 위한 동적 클래스명 빌드
        className: [
          'graph-node',
          isHighlighted ? 'name-node' : 'dot-node',
          isSelected ? 'selected' : '',
          isHighlighted ? 'highlighted' : '',
          isFaded ? 'faded' : '',
        ].join(' '),
      };
    });
  }, [connectedNodeIds, expandedNodeId, selectedNodeId, selectedUser, users]);

  /**
   * 사용자 간 팔로우 연결 관계를 ReactFlow의 edges 배열로 변환합니다.
   * 선택된 노드와 연관된 엣지는 움직이는 애니메이션 효과(animated: true)를 적용합니다.
   */
  const edges = useMemo(() => {
    return follows.map((follow) => {
      const source = String(follow.followerId);
      const target = String(follow.followingId);
      
      // 엣지의 출발지(follower) 혹은 목적지(following) 중 하나가 현재 선택된 노드인지 확인
      const isConnected = selectedNodeId && (source === selectedNodeId || target === selectedNodeId);

      return {
        id: `e-${follow.id}`,
        source,
        target,
        animated: Boolean(isConnected), // 직접 연결된 관계 선에 애니메이션 기어 효과 추가
        className: [
          'graph-edge',
          isConnected ? 'highlighted' : '',
          !selectedNodeId ? 'subtle' : '',
          selectedNodeId && !isConnected ? 'hidden' : '', // 선택된 상태인데 직간접 연결이 없으면 숨김
        ].join(' '),
      };
    });
  }, [follows, selectedNodeId]);

  /**
   * 노드 클릭 시 동작하는 이벤트 핸들러입니다.
   * 이미 선택되어 있던 노드를 한 번 더 클릭하면 상세 정보를 추가로 보여주고(확장),
   * 새로운 노드를 선택하면 해당 노드로 포커스를 맞춥니다.
   */
  const handleNodeClick = useCallback(
    (event, node) => {
      event.stopPropagation();
      const user = users.find((item) => String(item.id) === node.id);
      const isAlreadySelected = selectedNodeId === node.id;

      onSelectUser(user);
      // 이미 선택되어 있는 경우 해당 노드의 세부 내용(expanded) 토글 전환
      setExpandedNodeId(isAlreadySelected ? node.id : null);
    },
    [onSelectUser, selectedNodeId, users]
  );

  /**
   * 그래프 캔버스 배경(여백)을 클릭했을 때 선택 상태 및 확장 노드 상태를 해제하는 이벤트 핸들러입니다.
   */
  const handlePaneClick = useCallback(() => {
    onSelectUser(null);
    setExpandedNodeId(null);
  }, [onSelectUser]);

  return (
    <div className="graph-area">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        nodeTypes={nodeTypes}
        fitView
      >
        {/* 그래프 격자 배경 추가 */}
        <Background color="#d7dde8" gap={20} />
        {/* 줌인/줌아웃 컨트롤러 바 추가 */}
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default GraphView;

