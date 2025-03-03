import { Handle, Position } from "@xyflow/react";
import "@/routes/FlowChart/FlowNode.css";
import React, { JSX, useCallback } from "react";

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

function getOutHandle(nodeID: string, edges) {
  for (let i = 0; i < edges.length; i++) {
    if (edges[i].source === nodeID) {
      return true;
    }
  }
  return false;
}

export function ClassNode({ data }) {
  let handlers = <></>;

  if (Object.prototype.hasOwnProperty.call(data, "prereq")) {
    handlers = getHandles(data.prereq.length);
  }

  let outHandle = <></>;
  if (data.outHandle) {
    outHandle = (
      <Handle
        type="source"
        id={"-1"}
        position={Position.Bottom}
        isConnectable={true}
      />
    );
  }

  return (
    <>
      <div className={"flow-node " + data.taken}>
        <p className={"node-text"}>{data.name}</p>
        <p className={"node-text"}>{data.id}</p>
        <p className={"node-text"}>{data.professor}</p>
        <p className={"node-text"}>{data.time}</p>
        {handlers}
        {outHandle}
      </div>
    </>
  );
}

export function getClasses(nodes, initialEdges) {
  let returnNodes = [];
  let addedNodes: string[] = [];
  let rows: any[][] = [[]];

  let loop = true;
  let index = 0;
  while (loop) {
    const oldNodes = addedNodes.slice(0);

    for (let i = 0; i < nodes.length; i++) {
      let valid = true;
      const node = nodes[i];
      if (!Object.prototype.hasOwnProperty.call(node, "prereq")) {
        valid = true;
      } else if (oldNodes.indexOf(node.id) === -1) {
        for (let j = 0; j < node.prereq.length; j++) {
          const prereqs = node.prereq[j];
          for (let k = 0; k < prereqs.length; k++) {
            const prereq = prereqs[k];
            if (oldNodes.indexOf(prereq.id) === -1) {
              valid = false;
            }
          }
        }
      } else {
        valid = false;
      }
      if (valid) {
        rows[index].push(node);
        addedNodes.push(node.id);
      }
    }

    if (addedNodes.length >= nodes.length) {
      loop = false;
    } else {
      index++;
      rows.push([]);
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      let node = rows[i][j];
      node.outHandle = getOutHandle(node.id, initialEdges);
      returnNodes.push({
        id: node.id,
        position: { x: j * 250, y: i * 150 },
        data: node,
        type: "custom",
        isFocusable: true,
      });
    }
  }

  return returnNodes;
}
