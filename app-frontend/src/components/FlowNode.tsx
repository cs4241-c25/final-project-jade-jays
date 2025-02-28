import { Handle, Position } from "@xyflow/react";
import "@/styles/FlowNode.css";
import React, { JSX } from "react";

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

export default function ClassNode({ data, isConnectable }) {
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