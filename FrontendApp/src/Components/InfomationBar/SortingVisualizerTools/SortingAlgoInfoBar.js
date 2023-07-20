import React, { useState, useEffect } from "react";
import SortingAlgoInfoWrapper from "./SortingAlgoInfoBar.styles";
import { SortingAlgoDescriptionEnum } from "../../../Enums/SortingAlgoDescriptionEnum";

export default function SortAlgoInfoBar(props) {
  const [algoDescription, setAlgoDescription] = useState("");

  useEffect(() => {
    switch (props.algoTitle) {
      case "Quick Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.QUICK_SORT.toString());
        break;
      case "Merge Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.MERGE_SORT.toString());
        break;
      case "Heap Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.HEAP_SORT.toString());
        break;
      case "Bubble Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.BUBBLE_SORT.toString());
        break;
      case "Selection Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.SELECTION_SORT.toString());
        break;
      case "Insertion Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.INSERTION_SORT.toString());
        break;
      case "Gnome Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.GNOME_SORT.toString());
        break;
      case "Shaker Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.SHAKER_SORT.toString()); 
        break;
      case "Odd Even Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.ODD_EVEN_SORT.toString());
        break;
      case "Pancake Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.PANCAKE_SORT.toString());
        break;
      case "Bitonic Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.BITONIC_SORT.toString());
        break;
      case "Radix Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.RADIX_SORT.toString());
        break;
      case "Shell Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.SHELL_SORT.toString());
        break;
      case "Comb Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.COMB_SORT.toString());
        break;
      case "Bogo Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.BOGO_SORT.toString());
        break;
      case "Stooge Sort":
        setAlgoDescription(SortingAlgoDescriptionEnum.STOOGE_SORT.toString());
        break;
      default:
        setAlgoDescription("Welcome to Sorting Algorithm Visualizer");
        break;
    }
    return () => {};
  }, [props.algoTitle]);

  return (
    <SortingAlgoInfoWrapper> 
      <div className="algoText2">{algoDescription}</div>
    </SortingAlgoInfoWrapper>
  );
}
