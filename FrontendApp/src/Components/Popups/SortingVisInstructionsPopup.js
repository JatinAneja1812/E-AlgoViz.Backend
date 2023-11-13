import React from "react";
import Button from "@mui/material/Button";
import SortingBars from "../Asset/SortingVisCompoenetsImages/SortingBars.gif";
import SortingAlgoImg1 from "../Asset/SortingVisCompoenetsImages/SortingAlgoImg1.png";
import SortingAlgoImg2 from "../Asset/SortingVisCompoenetsImages/SortingAlgoImg2.png";
import SortingVisBoard from "../Asset/SortingVisCompoenetsImages/SortingVisBoard.png";
import SetSizeAndSpeed from "../Asset/SortingVisCompoenetsImages/SetSizeAndSpeed.png";
import enjoy from "../Asset/PathfindingComponentsImages/enjoy.png";
import RandomizeReset from "../Asset/SortingVisCompoenetsImages/RandomizeReset.png";
import "../Popups/ModalStyles/InstructionMainPopupStyle.css";

var counter = 1;

function nextPreviousClick(counter) {
  if (counter === 1) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Welcome to the Sorting Visualizer!</h3>
                    <h4> 
                      Explore and understand diverse sorting algorithms with our Sorting Visualizer—a robust tool for efficiently organizing data. 
                      Sorting algorithms are methods for arranging elements in a specific order, such as ascending or descending, to enhance data accessibility for tasks like searching, retrieval, and analysis.
                      Sorting is a foundational operation in computer science, elevating the performance of various algorithms and applications. 
                      These algorithms differ in implementation, efficiency, and adaptability to varying data types and input sizes. 
                    </h4>
                    <p>
                      Dive into the world of sorting and its significance in computer science.
                    </p>
                    <img id="sortMainTutorialImage" alt="sortingBarImg" src="${SortingBars}"/><div id="tutorialCounter">${counter}/6</div>`;
  } else if (counter === 2) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Picking an Algorithm</h3><h4>Select Your Preferred Sorting Algorithm</h4>
                    <p>
                      Take control of your sorting experience by choosing from a range of powerful sorting algorithms in the "Select Algorithms" drop-down menu. 
                      Observe the efficiency and elegance of each algorithm as it sorts your data into the desired order. Uncover the best sorting solution for your specific datasets, and gain valuable insights into the world of sorting algorithms with this professional and intuitive tool. 
                    </p>
                    <img id="SortAlgoImg1" alt="sortingAlgoImg1" src="${SortingAlgoImg1}"> <img id="SortAlgoImg2" alt="sortingAlgoImg2" src="${SortingAlgoImg2}"><div id="tutorialCounter">${counter}/6</div>`;
  } else if (counter === 3) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Sorting Visualizer Board with Bars</h3><h4>Discover Sorting Algorithms in Action with Colorful Bars.</h4>
                    <p> This interactive tool uses colored bars to showcase how sorting algorithms work. With real-time visualizations, users can easily understand how data elements are organized efficiently using different sorting methods. Additionally, the tool provides information on the sorting status and the number of iterations required to sort an array. Explore the magic of sorting algorithms with this simple and informative visualizer.</p>
                    <img id="sortVisBoardImg" alt="sortingBoardImg" src="${SortingVisBoard}"><div id="tutorialCounter">${counter}/6</div>`;
  } else if (counter === 4) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Dynamic Sorting Visualizer: Control Speed and Data Size</h3>
                    <h4>Personalize Your Sorting Experience.</h4>
                    <p>Take charge of your sorting exploration with our Customizable Sorting Visualizer. Adjust the visualization speed and data size effortlessly using intuitive slider tools. 
                    Fine-tune the pace to analyze sorting algorithms in detail or accelerate for a quick overview. Whether you're a coding enthusiast, a student, or a professional, this tool allows you to tailor the sorting experience to your needs, fostering a deeper understanding of these essential computational processes.</p>
                    <img id="sortVisToolsImg" src="${SetSizeAndSpeed}"><div id="tutorialCounter">${counter}/6</div>`;
  }  else if (counter === 5) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Visualizing and more</h3><h4>Use the navbar buttons to visualize algorithms and to do other stuff!</h4>
                   <p>. With just a click, the "Randomize" button shuffles the bars, providing a fresh dataset for each sorting algorithm. Meanwhile, the "Reset" button brings everything back to its initial state, including sliders, bars, and iteration counts. Seamlessly select your preferred algorithm, and the "Sort" button becomes enabled, allowing you to witness the sorting process step-by-step. </p>
                   <img id="sortVisToolsImg2" alt="tools" src="${RandomizeReset}">
                   <div id="tutorialCounter">${counter}/6</div>`;
  } else if (counter === 6) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Enjoy!</h3><h4>I hope you must enjoy playing around with this visualization tool and just have as much fun as I had building it!</h4>
                   <img id="mainTutorialImage" alt="enjoyImg" src="${enjoy}"/>
                   <div id="tutorialCounter">${counter}/6</div>`;
  }
}

export default function SortingVisInstructionPopup(props) {
  const handleSkip = () => {
    counter = 1;
    props.setShowTutorial(false);
  };

  const handleNext = () => {
    if (counter < 6) counter++;
    nextPreviousClick(counter);
  };

  const handlePrevious = () => {
    if (counter > 1) counter--;
    nextPreviousClick(counter);
  };

  return (
    <div
      className={props.counter === 0 ? "popupmainTutorial" : "popupmain"}
      style={{
        display: props.showtutorial ? "block" : "none",
        height: "110%",
        marginTop: "50%",
        width: "130%",
      }}
    >
      <div id="tutorial" className="popup" style={{ background: "#ffffff" }}>
        <div id="textGroup">
          <h3>Welcome to the Sorting Visualizer!</h3>
          <h4>
            Explore and understand diverse sorting algorithms with our Sorting Visualizer—a robust tool for efficiently organizing data. 
            Sorting algorithms are methods for arranging elements in a specific order, such as ascending or descending, to enhance data accessibility for tasks like searching, retrieval, and analysis.
            Sorting is a foundational operation in computer science, elevating the performance of various algorithms and applications. 
            These algorithms differ in implementation, efficiency, and adaptability to varying data types and input sizes. 
          </h4>
          <p>
             Dive into the world of sorting and its significance in computer science.
          </p>
          <div id="tutorialCounter">1/6</div>
          <img id="sortMainTutorialImage" alt="sortingBarImg" src={SortingBars} />
        </div>

        <Button id="nextButton" onClick={handleNext} type="button">
          Next
        </Button>
        <Button id="previousButton" onClick={handlePrevious} type="button">
          Previous
        </Button>
        <Button id="skipButton" onClick={handleSkip} type="button">
          Skip Tutorial
        </Button>
      </div>
    </div>
  );
};
