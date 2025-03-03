import { MarkerType } from "reactflow";

import "@/routes/FlowChart/FlowNode.css";

const r = document.querySelector(":root");
const rs = getComputedStyle(r);

function basicEdge(
  id: string,
  source: string,
  target: string,
  targetHandle: string,
  req: string,
) {
  let color = "";
  if (req === "prereq") {
    color = rs.getPropertyValue("--prereq-color");
  } else if (req === "concurrent") {
    color = rs.getPropertyValue("--concurrent-color");
  } else if (req === "recomended") {
    color = rs.getPropertyValue("--recomend-color");
  }

  return {
    id: id,
    source: source,
    target: target,
    type: "default",
    color: color,
    targetHandle: targetHandle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: color,
    },
    style: { stroke: color, strokeWidth: 2.5 },
    focusable: false,
    animated: false,
  };
}

export function getEdges(nodes: any[]) {
  const edges: any[] = [];

  let edgeID = 0;

  for (let nodeI = 0; nodeI < nodes.length; nodeI++) {
    const node = nodes[nodeI];
    if (!Object.prototype.hasOwnProperty.call(node, 'prereq')) {
      console.log("NOT!");
    }
    else {
      const nodeID = node.id;
      for (let reqI = 0; reqI < node.prereq.length; reqI++) {
        const prereqs = node.prereq[reqI];
        for (let reqJ = 0; reqJ < prereqs.length; reqJ++) {
          const sourceClass = prereqs[reqJ];
          const sourceID = sourceClass.id;
          edges.push(
              basicEdge(
                  String(edgeID),
                  sourceID,
                  nodeID,
                  String(reqI),
                  sourceClass.req,
              ),
          );
          edgeID++;
        }
      }
    }
  }
  return edges;
}
