/* eslint-disable */
import React, { useRef, useEffect } from "react";
import marker from '../Assets/marker.webp';
import plan0 from '../Assets/rudmaps_floor_0_thickLines2.webp';


export default function Pathfind() {
  let startNode = "S4"
  let endNode = "B1"
  const ShortestDistanceNode = (distances, visited) => {
    let shortest = null;
    for (let node in distances) {
      let currentIsShortest =
        shortest === null || distances[node] < distances[shortest];
      if (currentIsShortest && !visited.includes(node)) {
        shortest = node;
      }
    }
    return shortest;
  };

  function FindShortestPath(graph, startNode, endNode) {
    // establish object for recording distances from the start node
    let distances = {};
    distances[endNode] = "Infinity";
    distances = Object.assign(distances, graph[startNode]);

    // track paths
    let parents = { endNode: null };
    for (let child in graph[startNode]) {
      parents[child] = startNode;
    }

    // track nodes that have already been visited
    let visited = [];

    // find the nearest node
    let node = ShortestDistanceNode(distances, visited);

    // for that node
    while (node) {
      // find its distance from the start node & its child nodes
      let distance = distances[node];
      let children = graph[node];
      // for each of those child nodes
      for (let child in children) {
        // make sure each child node is not the start node
        if (String(child) === String(startNode)) {
          continue;
        } else {
          // save the distance from the start node to the child node
          let newdistance = distance + children[child];
          // if there's no recorded distance from the start node to the child node in the distances object
          // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
          // save the distance to the object
          // record the path
          if (!distances[child] || distances[child] > newdistance) {
            distances[child] = newdistance;
            parents[child] = node;
          }
        }
      }
      // move the node to the visited set
      visited.push(node);
      // move to the nearest neighbor node
      node = ShortestDistanceNode(distances, visited);
    }

    // using the stored paths from start node to end node
    // record the shortest path
    let shortestPath = [endNode];
    let parent = parents[endNode];
    while (parent) {
      shortestPath.push(parent);
      parent = parents[parent];
    }
    shortestPath.reverse();

    // return the shortest path from start node to end node & its distance
    //let results = {
    //	distance: distances[endNode],
    //	path: shortestPath,
    //};
    console.log(shortestPath);
    const nodIndex = [];
    for (let i = 0; i < shortestPath.length; i++) {
      for (let j = 0; j < noder.length; j++) {
        if (shortestPath[i] === noder[j]) {
          nodIndex[i] = j;
          console.log(nodIndex[i]);
        }
      }
    }
    const xValues = [];
    const yValues = [];
    console.log(noderRef[1])
    console.log(noderRef[0].current)
    
    useEffect(() => {
      for (let j = 0; j < shortestPath.length; j++) {
        yValues[j] = noderRef[nodIndex[j]].current.getBoundingClientRect().top;
        xValues[j] = noderRef[nodIndex[j]].current.getBoundingClientRect().left;
        console.log(xValues[j] + yValues[j]);
      }

      let c = canvas.current;
      const ctx = c.getContext("2d");
      ctx.clearRect(0, 0, 10000, 10000);
      ctx.beginPath();
      ctx.moveTo(xValues[0], yValues[0]-50);
      for (let j = 1; j < shortestPath.length; j++) {
        ctx.lineTo(xValues[j], yValues[j]-50);
        ctx.stroke();
      }
    }, []);
  }
  let S4ref,
  S1ref,
  R1,
  M1,
  L1,
  L2,
  D1,
  M2,
  K1,
  K2,
  F1,
  M3,
  H1,
  H2,
  R2,
  R3,
  R4,
  S21,
  S22,
  S23,
  P1,
  P2,
  P3,
  P4,
  P5,
  B1;
let canvas = useRef(null);
const noderRef = [
  (S4ref = useRef(2)),
  (S1ref = useRef(3)),
  (R1 = useRef(null)),
  (M1 = useRef(null)),
  (L1 = useRef(null)),
  (L2 = useRef(null)),
  (D1 = useRef(null)),
  (M2 = useRef(null)),
  (K1 = useRef(null)),
  (K2 = useRef(null)),
  (F1 = useRef(null)),
  (M3 = useRef(null)),
  (H1 = useRef(null)),
  (H2 = useRef(null)),
  (R2 = useRef(null)),
  (R3 = useRef(null)),
  (R4 = useRef(null)),
  (S21 = useRef(null)),
  (S22 = useRef(null)),
  (S23 = useRef(null)),
  (P1 = useRef(null)),
  (P2 = useRef(null)),
  (P3 = useRef(null)),
  (P4 = useRef(null)),
  (P5 = useRef(null)),
  (B1 = useRef(null)),
];
  const graph = {
    S4: { S1: 1 },
    S1: { R1: 1, S4: 1 },
    R1: { M1: 1, R2: 1, S1: 1 },
    M1: { M2: 1, L1: 1, R1: 1 },
    L1: { L2: 1, M1: 1 },
    L2: { D1: 1, L1: 1 },
    D1: { L2: 1, P2: 1, F1: 1 },
    M2: { M3: 1, K1: 1, M1: 1 },
    K1: { K2: 1, M2: 1 },
    K2: { F1: 1, K1: 1 },
    F1: { B1: 1, D1: 1, K2: 1 },
    M3: { H1: 1, M2: 1 },
    H1: { H2: 1, M3: 1 },
    H2: { B1: 1, H1: 1 },
    R2: { R3: 1, R1: 1 },
    R3: { R4: 1, R2: 1 },
    R4: { P1: 1, S21: 1, R3: 1 },
    S21: { S22: 1, S23: 1, R4: 1 },
    S22: { S21: 1 },
    S23: { S21: 1 },
    P1: { P2: 1, R4: 1 },
    P2: { D1: 1, P3: 1, P1: 1 },
    P3: { P4: 1, P2: 1 },
    P4: { P5: 1, P3: 1 },
    P5: { B1: 1, P4: 1 },
    B1: { H2: 1, F1: 1, P5: 1 },
  };
  const noder = [
    "S4",
    "S1",
    "R1",
    "M1",
    "L1",
    "L2",
    "D1",
    "M2",
    "K1",
    "K2",
    "F1",
    "M3",
    "H1",
    "H2",
    "R2",
    "R3",
    "R4",
    "S21",
    "S22",
    "S23",
    "P1",
    "P2",
    "P3",
    "P4",
    "P5",
    "B1",
  ];
FindShortestPath(graph,"S4","B1")
  return (
    <div className="map0">
      {/* <img id="map0" scr={plan0} alt="plan0"></img> */}
      <img id="S4" src={marker} ref={S4ref} alt="marker"></img>
      <img id="S1" src={marker} ref={S1ref} alt="marker"></img>
      <img id="R1" src={marker} ref={R1} alt="marker"></img>
      <img  id="R2"  src={marker}  ref={R2}  alt="marker" ></img>
      <img  id="R3"  src={marker}  ref={R3}  alt="marker"></img>
      <img  id="R4"  src={marker}  ref={R4}  alt="marker"></img>
      <img  id="P1"  src={marker}  ref={P1}  alt="marker"></img>
      <img  id="P2"  src={marker}  ref={P2}  alt="marker"></img>
      <img  id="P3"  src={marker}  ref={P3}  alt="marker"></img>
      <img  id="P4"  src={marker}  ref={P4}  alt="marker"></img>
      <img  id="P5"  src={marker}  ref={P5}  alt="marker"></img>
      <img  id="M1"  src={marker}  ref={M1}  alt="marker"></img>
      <img  id="M2"  src={marker}  ref={M2}  alt="marker"></img>
      <img  id="M3"  src={marker}  ref={M3}  alt="marker"></img>
      <img  id="L1"  src={marker}  ref={L1}  alt="marker"></img>
      <img  id="L2"  src={marker}  ref={L2}  alt="marker"></img>
      <img  id="D1"  src={marker}  ref={D1}  alt="marker"></img>
      <img  id="K1"  src={marker}  ref={K1}  alt="marker"></img>
      <img  id="K2"  src={marker}  ref={K2}  alt="marker"></img>
      <img  id="F1"  src={marker}  ref={F1}  alt="marker"></img>
      <img  id="H1"  src={marker}  ref={H1}  alt="marker"></img>
      <img  id="H2"  src={marker}  ref={H2}  alt="marker"></img>
      <img  id="B1"  src={marker}  ref={B1}  alt="marker"></img>
      <img  id="S21"  src={marker}  ref={S21}  alt="marker"></img>
      <img  id="S22"  src={marker}  ref={S22}  alt="marker"></img>
      <img  id="S23"  src={marker}  ref={S23}  alt="marker"></img>
      <canvas id="väg" width="2000" height="1000" ref={canvas}></canvas>
    </div>
  );
}
