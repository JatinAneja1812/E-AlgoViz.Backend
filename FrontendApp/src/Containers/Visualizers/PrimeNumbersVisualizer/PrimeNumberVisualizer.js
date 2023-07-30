import React, { useState, useEffect } from "react";
import PrimeNumberVisualizerNavMenu from "../../../Components/Menu/PrimeNumberVisualizerNavMenu";
import PrimeNumberVisualizerTools from "../../../Components/InfomationBar/PrimeNumberVisualizerTools/PrimeNumberVisualizerTools";
import Cells from "./Cells/Cells.js";
import "./PrimeNumberVisualizer.css"

export default function PrimeNumberVisualizer() {
  const [number, setNumber] = useState(100);
  const [cells, setCells] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(20);
  const [startNumber, setStartNumber] = useState(1);
  const [endNumber, setEndNumber] = useState(100);
  const [checked, setChecked] = useState(false);

  const getNewCellPrimeToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
      ...cell,
      isPrime: true,        
    };
    newCells[pos] = newCell;
    return newCells;
  };

  const getNewCellVisitingToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
      ...cell,
      isVisiting: !cell.isVisiting,
    };
    newCells[pos] = newCell;
    return newCells;
  };

  const getNewCellCheckToggled = (cells, pos) => {
    const newCells = cells.slice();
    const cell = newCells[pos];
    const newCell = {
      ...cell,
      isChecking: true,
    };
    newCells[pos] = newCell;
    return newCells;
  };

  const getCells = (startNum, endNum) => {
    const cells = [];
    for (let cell = startNum; cell <= endNum; cell++) {
      cells.push(createCell(cell));
    }
    return cells;
  };

  const createCell = (val) => {
    return {
      val,
      isChecking: false,
      isVisiting: false,
      isPrime: false,
    };
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const cells = [];
    for (let cell = 1; cell <= number; cell++) {
      cells.push(createCell(cell));
    }
    setCells(cells);
  }, [number]);

  const handleChangeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleValueIncrease = (value) => {
    setNumber(value);
    setCells(getCells(1, value));
    setIsRunning(false);
  };

  const handleRefresh = () => {
    setCells(getCells(1, number));
    setStartNumber(1);
    setEndNumber(100);
    setNumber(100);
    setChecked(false)
    setIsRunning(false);
  };

  const startSeive = async () => {
    setIsRunning(true);
    const prime = [];
    let start = 1;
    let end = 100;
    if(checked === true){
        start = startNumber;
        end = endNumber;
    }else{
        end = number;
    }

  // Initialize the prime array for the specified range
  for (let i = 0; i <= end; i++) {
    prime.push(1);
  }
  prime[0] = prime[1] = 0;

  let changedCells = cells;
  let prevCheck = -1;
  let counter = 0;

  // Outer loop to find prime numbers in the range [start, end]
  for (let i = 2; i <= end; i++) {
    if (prime[i] === 1) {
      changedCells = getNewCellPrimeToggled(changedCells, i - start);
      setCells(changedCells);

      await sleep(700 - speed * 10);
      counter++;

      // Inner loop to mark multiples of the current prime within the range [start, end]
      for (let j = Math.max(i * i, Math.ceil(start / i) * i); j <= end; j += i) {
        if (prevCheck !== -1 && j - start < cells.length) {
          changedCells = getNewCellVisitingToggled(changedCells, j - start);
        }
        prevCheck = j - start;

        if (j - start >= 0 && j - start < cells.length) {
          changedCells = getNewCellCheckToggled(changedCells, j - start);
          changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
          setCells(changedCells);
          await sleep(700 - speed * 10);
          // eslint-disable-next-line no-unused-vars
          counter++;
        }

        // Update the prime array for multiples of the current prime
        prime[j] = 0;
      }
    }
  }

    changedCells = getNewCellVisitingToggled(changedCells, prevCheck);
    setCells(changedCells);
    setIsRunning(false);
  };

  return (
    <div>
      <PrimeNumberVisualizerNavMenu
        onVisualize={startSeive}
        onRefresh={handleRefresh}
        isDisabled={isRunning}
      />
      <PrimeNumberVisualizerTools
        onChangeSpeed={handleChangeSpeed}
        onChangeValues={handleValueIncrease}
        number={number}
        setNumber={setNumber}
        setCells={setCells}
        getCells={getCells}
        sliderSpeed={speed}
        isDisabled={isRunning}
        setStartNumber={setStartNumber}
        setEndNumber={setEndNumber}
        startNumber={startNumber}
        endNumber={endNumber}
        setChecked={setChecked}
        checked={checked}
      />

      <div className="scrollable-container">
        <Cells cells={cells} />
      </div>
    </div>
  );
}
