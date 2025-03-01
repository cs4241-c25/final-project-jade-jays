import {Handle, Position} from "@xyflow/react";
import "@/styles/FlowNode.css";
import React, {JSX, useCallback} from "react";

const width = 210;

function getHandles(count: number): any {
  const spacing: number = 40;
  let startIndex: number =
    width / 2 +
    (1 - (count % 2)) * (spacing / 2) -
    Math.floor(count / 2) * spacing;

  let handles: JSX.Element[] = [];
  for (let i: number = 0; i < count; i++) {
    handles.push(
      <Handle
        key={i}
        type="target"
        id={String(i)}
        position={Position.Top}
        isConnectable={true}
        style={{ left: startIndex + i * spacing }}
      />,
    );
  }

  return <> {handles} </>;
}

export function ClassNode({ data }) {
  const handlers = getHandles(data.prereq.length);

  return (
    <>
      <div className={"flow-node " + data.taken}>
        <p className={"node-text"}>{data.name}</p>
        <p className={"node-text"}>{data.id}</p>
        <p className={"node-text"}>{data.professor}</p>
        <p className={"node-text"}>{data.time}</p>
        {handlers}
        <Handle
          type="source"
          id={"-1"}
          position={Position.Bottom}
          isConnectable={true}
        />
      </div>
    </>
  );
}

export function getClasses(nodes, initialEdges) {
  let returnNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    returnNodes.push({ id: node.id, position: { x: i*150, y: i*150 }, data: node, type: "custom" },);
  }
  return returnNodes;
}