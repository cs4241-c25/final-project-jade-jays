import { Handle, Position } from "@xyflow/react";
import "@/routes/FlowChart/FlowNode.css";
import { JSX } from "react";
import { classes } from "@/components/FlowChart/FlowChart.types.ts";

const r = document.querySelector(":root");
const rs = getComputedStyle(r);

const width = Number(rs.getPropertyValue("--node-width").replace("px", ""));

function getHandles(count: number): any {
  let spacing: number = 40;
  const padding: number = 40;
  if ((count - 1) * spacing >= width - padding) {
    spacing *= (width - padding) / ((count - 1) * spacing);
  }
  const startIndex: number =
    width / 2 +
    (1 - (count % 2)) * (spacing / 2) -
    Math.floor(count / 2) * spacing;

  const handles: JSX.Element[] = [];
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

  let taken = "completed";
  if (Object.prototype.hasOwnProperty.call(data, "taken")) {
    if (data.taken !== undefined) {
      taken = data.taken;
    }
  }

  return (
    <>
      <div className={"flow-node " + taken}>
        <p className={"node-text"} aria-label={data.title}>{data.title}</p>
        <p className={"node-text"} aria-label={data.subject + " " + data.code}>{data.subject + " " + data.code}</p>
        {handlers}
        {outHandle}
      </div>
    </>
  );
}

export function getClasses(nodes: classes[], initialEdges) {
  const returnNodes = [];

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const nodeID = node.subject + " " + node.code;
    node.outHandle = getOutHandle(nodeID, initialEdges);
    returnNodes.push({
      id: nodeID,
      position: { x: 0, y: 0 },
      data: node,
      type: "custom",
      isFocusable: true,
    });
  }

  return returnNodes;
}
