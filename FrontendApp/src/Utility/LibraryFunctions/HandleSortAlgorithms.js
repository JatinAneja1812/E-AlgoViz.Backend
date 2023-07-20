import bubbleSort from "../../Components/Algorithms/SortingAlgorithms/BubbleSort";
import quickSort from "../../Components/Algorithms/SortingAlgorithms/QuickSort";
import mergeSort from "../../Components/Algorithms/SortingAlgorithms/MergeSort";
import heapSort from "../../Components/Algorithms/SortingAlgorithms/HeapSort";
import selectionSort from "../../Components/Algorithms/SortingAlgorithms/SeletctionSort";

export default function handleSortingAlgorithm(algorithmType, array) {
  switch (algorithmType) {
    case "Quick Sort":
      return quickSort(array);
    case "Merge Sort":
      return mergeSort(array);
    case "Heap Sort":
      return heapSort(array);
    case "Bubble Sort":
      return bubbleSort(array);
    case "Selection Sort":
        return selectionSort(array);
    default:
      return "";
  }
}
