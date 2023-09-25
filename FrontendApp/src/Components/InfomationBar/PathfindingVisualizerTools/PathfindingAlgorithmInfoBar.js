import React, { useState, useEffect } from "react";
import AlgoInfoWrapper from "./PathfindingAlgorithmInfoBar.styles";
import { PathfindingAlgoDescriptionEnum } from "../../../Enums/PathfindingAlgoDescriptionEnum";

export default function AlgorithmInfoBar(props) {
  const [algoDescription, setAlgoDescription] = useState("");

  useEffect(() => {
    switch (props.algoTitle) {
      case "Dijkstra":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.DIJKSTRA.toString());
        break;
      case "Breadth-First Search":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.BREADTH_FIRST_SEARCH.toString());
        break;
      case "Greedy B-F Serach":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.GREEDY_BEST_FIRST_SEARCH.toString());
        break;
      case "BFS-Bidirectional":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.BREADTH_FIRST_SEARCH_BIDIRECTIONAL.toString());
        break;
      case "A* Search":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.ASTART_SEARCH.toString());
        break;
      case "Depth-First Search":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.DEPTH_FIRST_SEARCH.toString());
        break;
      case "Swarm Algorithm":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.SWARM_ALGORITHM.toString());
        break;
      case "Convergent Swarm":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.CONVERGENT_SWARM_ALGORITHM.toString());
        break;
      case "Bidirectional Swarm":
        setAlgoDescription(PathfindingAlgoDescriptionEnum.BIDIRECTIONAL_SWARM_ALGORITHM.toString());
        break;
      default:
        setAlgoDescription("Welcome to Pathfinding Algorithm Visualizer");
        break;
    }
    return () => {};
  }, [props.algoTitle]);

  return (
    <AlgoInfoWrapper> 
      <div className="algoText">{algoDescription}</div>
    </AlgoInfoWrapper>
  );
}
