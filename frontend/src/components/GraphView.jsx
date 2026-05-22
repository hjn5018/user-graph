import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';

function GraphView({ users, follows, onSelectUser }) {
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  const connectedNodeIds = useMemo(() => {
    if (!hoveredNodeId) {
      return new Set();
    }

    const ids = new Set([hoveredNodeId]);
    follows.forEach((follow) => {
      const source = String(follow.followerId);
      const target = String(follow.followingId);

      if (source === hoveredNodeId) {
        ids.add(target);
      }

      if (target === hoveredNodeId) {
        ids.add(source);
      }
    });

    return ids;
  }, [follows, hoveredNodeId]);

  const nodes = useMemo(() => {
    const centerX = 420;
    const centerY = 260;
    const radius = 220;

    return users.map((user, index) => {
      const angle = (2 * Math.PI * index) / users.length;
      const isFaded = hoveredNodeId && !connectedNodeIds.has(String(user.id));
      const isHighlighted = hoveredNodeId && connectedNodeIds.has(String(user.id));

      return {
        id: String(user.id),
        data: { label: '' },
        position: {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
        },
        className: [
          'graph-node',
          'dot-node',
          isHighlighted ? 'highlighted' : '',
          isFaded ? 'faded' : '',
        ].join(' '),
      };
    });
  }, [connectedNodeIds, hoveredNodeId, users]);

  const edges = useMemo(() => {
    return follows.map((follow) => {
      const source = String(follow.followerId);
      const target = String(follow.followingId);
      const isConnected = hoveredNodeId && (source === hoveredNodeId || target === hoveredNodeId);
      const isFaded = hoveredNodeId && !isConnected;

      return {
        id: `e-${follow.id}`,
        source,
        target,
        animated: Boolean(isConnected),
        className: [
          'graph-edge',
          isConnected ? 'highlighted' : '',
          !hoveredNodeId ? 'hidden' : '',
          isFaded ? 'hidden' : '',
        ].join(' '),
      };
    });
  }, [follows, hoveredNodeId]);

  const handleNodeClick = useCallback(
    (event, node) => {
      const user = users.find((item) => String(item.id) === node.id);
      onSelectUser(user);
    },
    [onSelectUser, users]
  );

  const handleNodeMouseEnter = useCallback((event, node) => {
    setHoveredNodeId(node.id);
  }, []);

  const handleNodeMouseLeave = useCallback(() => {
    setHoveredNodeId(null);
  }, []);

  return (
    <div className="graph-area">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        onNodeMouseEnter={handleNodeMouseEnter}
        onNodeMouseLeave={handleNodeMouseLeave}
        fitView
      >
        <Background color="#d7dde8" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default GraphView;
