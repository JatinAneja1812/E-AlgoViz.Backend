import { PathfindingAlgoDescriptionExtraEnum } from "../../Enums/PathfindingAlgoDescriptionEnum";
import { SortingAlgoDescriptionEnum } from "../../Enums/SortingAlgoDescriptionEnum";

export default function GetAlgorithmsDescription(title) {
  let BSTDescription =
    "A Binary Search Tree (BST) is a data structure in computer science used for efficient data storage and retrieval. It organizes elements in a tree-like structure, where each node has at most two child nodes, and values in the left subtree are smaller than the values in the right subtree, making it ideal for fast searching and sorting operations";
  let PrimeNumberDescription =
    "Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and themselves. They play a fundamental role in number theory and cryptography, with applications in encryption algorithms and ensuring secure communications. Prime numbers are the building blocks of all positive integers, as any integer can be uniquely expressed as a product of prime factors.";
  let description = "";

  switch (title) {
    case "A* Search":
      description =
        PathfindingAlgoDescriptionExtraEnum.ASTART_SEARCH.toString();
      break;
    case "Dijkstra":
      description = PathfindingAlgoDescriptionExtraEnum.DIJKSTRA.toString();
      break;
    case "Greedy Best First Search":
      description =
        PathfindingAlgoDescriptionExtraEnum.GREEDY_BEST_FIRST_SEARCH.toString();
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
    case "Binary Search Tree Preorder Traversal":
      description = BSTDescription;
      break;
    case "Binary Search Tree Inorder Traversal":
      description = BSTDescription;
      break;
    case "Binary Search Tree Postorder Traversal":
      description = BSTDescription;
      break;
    case "Sieve of Eratosthenes":
      description = PrimeNumberDescription;
      break;
    default:
      description = "  \n\n ";
  }

  return description;
}
