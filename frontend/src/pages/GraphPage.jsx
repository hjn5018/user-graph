import React, { useEffect, useState } from 'react';
import { getFollows, getUsers } from '../api/client.js';
import GraphView from '../components/GraphView.jsx';

/**
 * 사용자 관계망(팔로우/팔로잉) 그래프를 보여주는 페이지 컴포넌트입니다.
 * 컴포넌트 마운트 시 API 호출을 통해 사용자와 팔로우 데이터를 가져와 시각화 컴포넌트(GraphView)로 넘겨줍니다.
 */
function GraphPage() {
  const [users, setUsers] = useState([]);          // 사용자 목록 상태
  const [follows, setFollows] = useState([]);      // 팔로우 관계 목록 상태
  const [selectedUser, setSelectedUser] = useState(null); // 현재 클릭하여 선택된 사용자 정보 상태
  const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 여부 상태
  const [error, setError] = useState('');           // 에러 메시지 상태

  // 페이지 최초 진입 시 데이터 패치 수행
  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        // API 요청 병렬 처리로 사용자 및 팔로우 정보 동시 수신
        const [userData, followData] = await Promise.all([getUsers(), getFollows()]);
        setUsers(userData);
        setFollows(followData);
      } catch (requestError) {
        setError('그래프 데이터를 불러오지 못했습니다. 백엔드 서버가 실행 중인지 확인해주세요.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGraphData();
  }, []);

  // 로딩 화면 표시
  if (isLoading) {
    return <div className="state-message">그래프 데이터를 불러오는 중입니다.</div>;
  }

  // 에러 발생 시 안내 메시지 표시
  if (error) {
    return <div className="state-message error-message">{error}</div>;
  }

  return (
    <section className="graph-page">
      {/* 사용자 간 네트워크 시각화 그래프 영역 렌더링 */}
      <GraphView
        users={users}
        follows={follows}
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
      />
    </section>
  );
}

export default GraphPage;

