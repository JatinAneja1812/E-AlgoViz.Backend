import React, { useState, useEffect } from "react";
import AlgoInfoWrapper from "./AlgorithmInfoBar.styles";
import { AlgorithmDescriptionEnum } from "../../Enums/AlgoDescriptionEnum";

export default function AlgorithmInfoBar(props) {
  const [algoDescription, setAlgoDescription] = useState("");

  useEffect(() => {
    switch (props.algoTitle) {
      case "Dijkstra":
        setAlgoDescription(AlgorithmDescriptionEnum.DIJKSTRA.toString());
        break;
      case "Breadth-First Search":
        setAlgoDescription(AlgorithmDescriptionEnum.BREADTH_FIRST_SEARCH.toString());
        break;
      case "Greedy B-F Serach":
        setAlgoDescription(AlgorithmDescriptionEnum.GREEDY_BREADTH_FIRST_SEARCH.toString());
        break;
      case "BFS-Bidirectional":
        setAlgoDescription(AlgorithmDescriptionEnum.BREADTH_FIRST_SEARCH_BIDIRECTIONAL.toString());
        break;
      case "A* Search":
        setAlgoDescription(AlgorithmDescriptionEnum.ASTART_SEARCH.toString());
        break;
      case "Depth-First Search":
        setAlgoDescription(AlgorithmDescriptionEnum.DEPTH_FIRST_SEARCH.toString());
        break;
      case "Swarm Algorithm":
        setAlgoDescription(AlgorithmDescriptionEnum.SWARM_ALGORITHM.toString());
        break;
      case "Convergent Swarm":
        setAlgoDescription(AlgorithmDescriptionEnum.CONVERGENT_SWARM_ALGORITHM.toString());
        break;
      case "Bidirectional Swarm":
        setAlgoDescription(AlgorithmDescriptionEnum.BIDIRECTIONAL_SWARM_ALGORITHM.toString());
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
