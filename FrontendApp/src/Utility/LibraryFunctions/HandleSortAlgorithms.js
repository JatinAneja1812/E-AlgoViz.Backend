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

export default async function handleSortingAlgorithm(algorithmType, array) {
  switch (algorithmType) {
    case "Quick Sort":
      return await quickSort(array);
    case "Merge Sort":
      return await mergeSort(array);
    case "Heap Sort":
      return await heapSort(array);
    case "Bubble Sort":
      return  await bubbleSort(array);
    case "Selection Sort":
      return await selectionSort(array);
    case "Insertion Sort":
      return await insertionSort(array);
    case "Gnome Sort":
      return await gnomeSort(array);
    case "Shaker Sort":
      return await cocktailShakerSort(array);
    case "Odd Even Sort":
      return await oddEvenSort(array);
    case "Pancake Sort":
      return await pancakeSort(array);
    case "Shell Sort":
      return await shellSort(array);
    case "Tim Sort":
        return await timSort(array);
    case "Cube Sort":
        return await cubeSort(array);
    case "Radix Sort":
      return await radixSort(array);
    case "Bitonic Sort":
        return await bitonicSort(array);
    case "Bogo Sort":
        return await bogoSort(array);
    case "Cycle Sort":
        return await cycleSort(array);
    default:
      return "";
  }
}
