import React, { useState, useEffect } from "react";
import SortingVisualizerAppNavBar from "../../../Components/Menu/SortingVisualizerNavMenu";
import SortingVisToolbar from "../../../Components/InfomationBar/SortingVisualizerTools/SortingVisualizerToolBar";
import SortAlgoInfoBar from "../../../Components/InfomationBar/SortingVisualizerTools/SortingAlgoInfoBar";
import Blocks from "../../../Components/Blocks/Blocks";
import Typography from "antd/es/typography/Typography";
import handleSortingAlgorithm from "../../../Utility/LibraryFunctions/HandleSortAlgorithms";

const statusStyles = {
  statuContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    marginTop: "-6vh",
    marginLeft: "44%",
    background: "rgb(7, 101, 133)",
    borderRadius: "20px",
    transform: "perspective(1000px) rotateX(20deg)",
    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
  },
  statusText: {
    fontSize: "30px",
    fontFamily: "freight-big-pro",
    fontWeight: "600",
    color: "#fff",
    letterSpacing: "1.5px",
  },
};

export default function SortAlgoVisualizer() {
  const [algorithm, setAlgorithm] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedValue, setSortedValue] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Unsorted");
  const [iterations, setIterations] = useState(0);
  const [isSorted, setIsSorted] = useState(false);
  const [isDataReset, resetData] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [size, setSize] = useState(40);
  const [quickIndex, setQuickIndex] = useState(() => null);
  const [isSortingPaused, setIsSortingPaused] = useState(false);

  // function that randomizes a sorted list
  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  // Function that generates a array from 1 to length
  const createNewArray = (number) => {
    let len = Number(number);
    const tempBlocks = [];
    for (let i = 1; i < len + 1; i++) {
      tempBlocks.push(i);
    }
    shuffleArray(tempBlocks);
    setBlocks(tempBlocks);
    setSorting(false);
    setIsSorted(false);
    setSortedValue([]);
  };
  // Loading the inital array of blocks
  if (blocks.length === 0) {
    createNewArray(size);
  }
  // Function to update the speed when user adjusts it
  const handleSpeed = (value) => {
    setSpeed(value);
  };

  // Function to update the speed when user adjusts it
  const handleSize = (sizePassed) => {
    let restrainedSize;
    if (sizePassed < 5) {
      restrainedSize = 5;
    } else if (sizePassed > 100) {
      restrainedSize = 100;
    } else {
      restrainedSize = sizePassed;
    }
    setSize(restrainedSize);
  };

  // The Immdediately invoked function expression acts like a while loop
  // that stops once all stored values have been executed
  const sortArray = (values) => {
    let i = 0;
    let timeoutId = null;

    const processNextStep = () => {
      if (isSortingPaused) {
        clearTimeout(timeoutId);
        return;
      }
      if (isSorted) {
        return;
      }
      const [j, k, arr, inPlace, quickIndex] = values[i];
      setIterations((count) => count + 1); // Increment iterations when sorting is complete
      setCompare([j, k]);
      setSwap([]);

      if (inPlace !== null) {
        setSortedValue((prevState) => [...prevState, inPlace]);
      }

      if (arr) {
        setBlocks(arr);
        if (j !== null || k != null) setSwap([j, k]);
      }

      if (++i < values.length) {
        timeoutId = setTimeout(processNextStep, speed);
      } else {
        setStatusMessage("Sorted");
        setSorting(false);
      }

      if (quickIndex >= 0) {
        setQuickIndex(quickIndex);
      }
    };
    processNextStep();
  };

  const handleSort = () => {
    setStatusMessage("Sorting...");
    if (isSorted) {
      return;
    }
    setIsSortingPaused(false);
    setIterations(0); // Initialize iterations to 0
    sortArray(handleSortingAlgorithm(algorithm, blocks));
    setSorting(true);
    setIsSorted(true);
  };

  // Event handler to randomize the array when button is pressed
  const handleRandomize = () => {
    setSortedValue([]);
    setAlgorithm("");
    createNewArray(size);
    setIsSorted(false);
    setIterations(0);
    setSorting(false);
    setStatusMessage("Unsorted");
  };

  // Event handler to randomize the array when button is pressed
  const handleReset = () => {
    setSortedValue([]);
    setSpeed(50);
    setSize(40);
    setAlgorithm("");
    setIterations(0);
    setStatusMessage("Unsorted");
    createNewArray(size);
    setIsSorted(false);
    setSorting(false);
  };

  // Generating random array every time the length is changed by th user
  useEffect(() => {
    let len = Number(size);
    const tempBlocks = [];
    for (let i = 1; i < len + 1; i++) {
      tempBlocks.push(i);
    }
    shuffleArray(tempBlocks);
    setBlocks(tempBlocks);
    setSorting(false);
    setIsSorted(false);
    setStatusMessage("Unsorted");
    setSortedValue([]);
  }, [size]);

  return (
    <>
      <SortingVisualizerAppNavBar
        setAlgorithm={setAlgorithm}
        algorithm={algorithm}
        resetData={resetData}
        isDataReset={isDataReset}
        sorting={sorting}
        setSorting={setSorting}
        handleRandomize={handleRandomize}
        handleSort={handleSort}
        handleReset={handleReset}
      />
      <SortingVisToolbar
        handleSpeed={handleSpeed}
        handleSize={handleSize}
        sorting={sorting}
        speed={speed}
        size={size}
        algorithm={algorithm}
      />
      <SortAlgoInfoBar algoTitle={algorithm} />
      <Blocks
        algorithm={algorithm}
        iterations={iterations}
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sortedValue={sortedValue}
        quickIndex={quickIndex}
      />

    <div style={statusStyles.statuContainer}>
      <Typography style={statusStyles.statusText}>{statusMessage}</Typography>
    </div>
    </>
  );
}
