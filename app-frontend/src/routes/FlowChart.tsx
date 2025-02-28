import React from "react";
import { ReactFlow, MiniMap, Controls } from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import ClassNode from "@/components/ClassNode";
import { PrereqEdge, ConcurrentEdge } from "@/components/FlowEdges.tsx";

export const FlowChart: React.FC = () => {
  const initialNodes = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "Test\nNew Line", count: 3 }, type: "custom" },
    { id: "node-2", position: { x: 100, y: 100 }, data: { label: "2test" } },
    { id: "3", position: { x: 200, y: 200 }, data: { label: "3" } },
    { id: "4", position: { x: 300, y: 300 }, data: { label: "4" } },
    { id: "5", position: { x: 400, y: 400 }, data: { label: "5" } },
  ];
  const initialEdges = [
    ConcurrentEdge("e1-2", "1", "node-2", "0"),
    PrereqEdge("e1-3", "1", "3", "1"),
    ConcurrentEdge("e1-4", "1", "4", "2"),
  ];

  const nodeTypes = {
    custom: ClassNode,
  };

  return (
    <div style={{ width: "100vw", height: "calc(100vh - 37px)" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap nodeStrokeWidth={30} />
        <Controls />
      </ReactFlow>
    </div>
  );
};
