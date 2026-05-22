import React, { useCallback, useMemo } from 'react';
import ReactFlow, { Background, Controls, Handle, Position } from 'reactflow';

function UserGraphNode({ data }) {
  if (data.showName) {
    return (
      <div className="node-card">
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
        <strong>{data.user.name}</strong>
      </div>
    );
  }

  return (
    <div className="node-dot" aria-label={data.user.name}>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

const nodeTypes = {
  userNode: UserGraphNode,
};

function GraphView({ users, follows, selectedUser, onSelectUser }) {
  const selectedNodeId = selectedUser ? String(selectedUser.id) : null;

  const connectedNodeIds = useMemo(() => {
    if (!selectedNodeId) {
      return new Set();
    }

    const ids = new Set([selectedNodeId]);
    follows.forEach((follow) => {
      const source = String(follow.followerId);
      const target = String(follow.followingId);

      if (source === selectedNodeId) {
        ids.add(target);
      }

      if (target === selectedNodeId) {
        ids.add(source);
      }
    });

    return ids;
  }, [follows, selectedNodeId]);

  const nodes = useMemo(() => {
    const centerX = 420;
    const centerY = 260;
    const radius = 220;

    return users.map((user, index) => {
      const angle = (2 * Math.PI * index) / users.length;
      const isFaded = selectedNodeId && !connectedNodeIds.has(String(user.id));
      const isHighlighted = selectedNodeId && connectedNodeIds.has(String(user.id));
      const isSelected = selectedUser?.id === user.id;

      return {
        id: String(user.id),
        type: 'userNode',
        data: {
          user,
          showName: Boolean(isHighlighted),
        },
        position: {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
        },
        className: [
          'graph-node',
          isHighlighted ? 'name-node' : 'dot-node',
          isSelected ? 'selected' : '',
          isHighlighted ? 'highlighted' : '',
          isFaded ? 'faded' : '',
        ].join(' '),
      };
    });
  }, [connectedNodeIds, selectedNodeId, selectedUser, users]);

  const edges = useMemo(() => {
    return follows.map((follow) => {
      const source = String(follow.followerId);
      const target = String(follow.followingId);
      const isConnected = selectedNodeId && (source === selectedNodeId || target === selectedNodeId);

      return {
        id: `e-${follow.id}`,
        source,
        target,
        animated: Boolean(isConnected),
        className: [
          'graph-edge',
          isConnected ? 'highlighted' : '',
          !selectedNodeId ? 'subtle' : '',
          selectedNodeId && !isConnected ? 'hidden' : '',
        ].join(' '),
      };
    });
  }, [follows, selectedNodeId]);

  const handleNodeClick = useCallback(
    (event, node) => {
      event.stopPropagation();
      const user = users.find((item) => String(item.id) === node.id);
      onSelectUser(user);
    },
    [onSelectUser, users]
  );

  const handlePaneClick = useCallback(() => {
    onSelectUser(null);
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
        <Background color="#d7dde8" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default GraphView;
