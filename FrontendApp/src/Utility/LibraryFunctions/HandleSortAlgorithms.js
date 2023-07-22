import bubbleSort from "../../Components/Algorithms/SortingAlgorithms/BubbleSort";
import quickSort from "../../Components/Algorithms/SortingAlgorithms/QuickSort";
import mergeSort from "../../Components/Algorithms/SortingAlgorithms/MergeSort";
import heapSort from "../../Components/Algorithms/SortingAlgorithms/HeapSort";
import selectionSort from "../../Components/Algorithms/SortingAlgorithms/SeletctionSort";
import insertionSort from "../../Components/Algorithms/SortingAlgorithms/InsertionSort";
import gnomeSort from "../../Components/Algorithms/SortingAlgorithms/GnomeSort";
import cocktailShakerSort from "../../Components/Algorithms/SortingAlgorithms/CocktailShakerSort";
import oddEvenSort from "../../Components/Algorithms/SortingAlgorithms/OddEvenSort";
import pancakeSort from "../../Components/Algorithms/SortingAlgorithms/PancakeSort";
import shellSort from "../../Components/Algorithms/SortingAlgorithms/ShellSort";
import radixSort from "../../Components/Algorithms/SortingAlgorithms/RadixSort";
import timSort from "../../Components/Algorithms/SortingAlgorithms/TimSort";
import cubeSort from "../../Components/Algorithms/SortingAlgorithms/CubeSort";
import bitonicSort from "../../Components/Algorithms/SortingAlgorithms/BitonicSort";
import bogoSort from "../../Components/Algorithms/SortingAlgorithms/BogoSort";
import cycleSort from "../../Components/Algorithms/SortingAlgorithms/CycleSort";

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
    case "Insertion Sort":
      return insertionSort(array);
    case "Gnome Sort":
      return gnomeSort(array);
    case "Shaker Sort":
      return cocktailShakerSort(array);
    case "Odd Even Sort":
      return oddEvenSort(array);
    case "Pancake Sort":
      return pancakeSort(array);
    case "Shell Sort":
      return shellSort(array);
    case "Tim Sort":
        return timSort(array);
    case "Cube Sort":
        return cubeSort(array);
    case "Radix Sort":
      return radixSort(array);
    case "Bitonic Sort":
        return bitonicSort(array);
    case "Bogo Sort":
        return bogoSort(array);
    case "Cycle Sort":
        return cycleSort(array);
    default:
      return "";
  }
}
