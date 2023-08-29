import { PathfindingAlgoDescriptionExtraEnum } from "../../Enums/PathfindingAlgoDescriptionEnum";
import { SortingAlgoDescriptionEnum } from "../../Enums/SortingAlgoDescriptionEnum";

export default function GetAlgorithmsDescription(title) {
  let description = "";

  switch (title) {
    case "A* Search":
      description =
        PathfindingAlgoDescriptionExtraEnum.ASTART_SEARCH.toString();
      break;
    case "Dijkstra":
      description = PathfindingAlgoDescriptionExtraEnum.DIJKSTRA.toString();
      break;
    case "Greedy Breath First Search":
      description =
        PathfindingAlgoDescriptionExtraEnum.GREEDY_BREADTH_FIRST_SEARCH.toString();
      break;
    case "Breath First Search":
      description =
        PathfindingAlgoDescriptionExtraEnum.BREADTH_FIRST_SEARCH.toString();
      break;
    case "Bidirectional Breath First Search":
      description =
        PathfindingAlgoDescriptionExtraEnum.BREADTH_FIRST_SEARCH_BIDIRECTIONAL.toString();
      break;
    case "Depth First Search":
      description =
        PathfindingAlgoDescriptionExtraEnum.DEPTH_FIRST_SEARCH.toString();
      break;
    case "Swarm":
      description =
        PathfindingAlgoDescriptionExtraEnum.SWARM_ALGORITHM.toString();
      break;
    case "Convergent Swarm":
      description =
        PathfindingAlgoDescriptionExtraEnum.CONVERGENT_SWARM_ALGORITHM.toString();
      break;
    case "Quick Sort":
      description = SortingAlgoDescriptionEnum.QUICK_SORT.toString();
      break;
    case "Merge Sort":
      description = SortingAlgoDescriptionEnum.MERGE_SORT.toString();
      break;
    case "Heap Sort":
      description = SortingAlgoDescriptionEnum.HEAP_SORT.toString();
      break;
    case "Shell Sort":
      description = SortingAlgoDescriptionEnum.SHELL_SORT.toString();
      break;
    case "Bubble Sort":
      description = SortingAlgoDescriptionEnum.BUBBLE_SORT.toString();
      break;
    case "Selection Sort":
      description = SortingAlgoDescriptionEnum.SELECTION_SORT.toString();
      break;
    case "Insertion Sort":
      description = SortingAlgoDescriptionEnum.INSERTION_SORT.toString();
      break;
    case "Gnome Sort":
      description = SortingAlgoDescriptionEnum.GNOME_SORT.toString();
      break;
    case "Shaker Sort":
      description = SortingAlgoDescriptionEnum.SHAKER_SORT.toString();
      break;
    case "Odd-Even Sort":
      description = SortingAlgoDescriptionEnum.ODD_EVEN_SORT.toString();
      break;
    case "Pancake Sort":
      description = SortingAlgoDescriptionEnum.PANCAKE_SORT.toString();
      break;
    case "Radix Sort":
      description = SortingAlgoDescriptionEnum.RADIX_SORT.toString();
      break;
    case "Cycle Sort":
      description = SortingAlgoDescriptionEnum.CYCLE_SORT.toString();
      break;
    case "Bitonic Sort":
      description = SortingAlgoDescriptionEnum.BITONIC_SORT.toString();
      break;
    case "Tim Sort":
      description = SortingAlgoDescriptionEnum.TIM_SORT.toString();
      break;
    case "Cube Sort":
      description = SortingAlgoDescriptionEnum.CUBE_SORT.toString();
      break;
    case "Bogo Sort":
      description = SortingAlgoDescriptionEnum.BOGO_SORT.toString();
      break;
    default:
      description = "Algorithm not supported";
  }

  return description;
}
