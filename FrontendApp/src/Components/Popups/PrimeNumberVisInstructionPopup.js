import React from "react";
import Button from "@mui/material/Button";
import SieveofEratosthenes from "../Asset/PrimeNumberVisComponentImages/SieveofEratosthenes.gif";
import PrimeNumberRangeSelection from "../Asset/PrimeNumberVisComponentImages/PrimeNumberRangeSelection.png";

import PNVisReset from "../Asset/PrimeNumberVisComponentImages/PNVisReset.png";
import PNVisSpeed from "../Asset/PrimeNumberVisComponentImages/PNVisSpeed.png";
import enjoy from "../Asset/PathfindingComponentsImages/enjoy.png";
import "../Popups/ModalStyles/InstructionMainPopupStyle.css";

var counter = 1;

function nextPreviousClick(counter) {
  if (counter === 1) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Welcome to the Prime Number Visualizer!</h3>
                    <h4> 
                        Welcome to the Prime Number Visualizer, a powerful tool that makes understanding prime numbers and the Sieve of Eratosthenes algorithm accessible and engaging.
                    </h4>
                    <p>
                        Prime numbers are fundamental in number theory and have wide-ranging applications in computer science and cryptography. 
                        With this tool, you can explore and visualize the process of finding prime numbers using the Sieve algorithm step by step.
                    </p>
                    <img id="PrimeNumberVisMainTutorialImage" alt="sieveImage" src="${SieveofEratosthenes}"/><div id="tutorialCounter">${counter}/4</div>`;
  } else if (counter === 2) {
    document.getElementById(
      "textGroup"
    ).innerHTML = ` <h3>Custom Range Selection</h3><h4>In the Prime Number Visualizer, you have the flexibility to choose the range of numbers you want to explore. Whether you prefer a random selection or have a specific range in mind, this feature has you covered.</h4>
                    <p>
                      <ul>
                        <li><b>Random Selection (Slider): </b></li>
                        <li> 1. Use the slider to pick any number from 1 to 500.</li>
                        <li> 2. Click the "Visualize" button, and the Sieve algorithm will identify prime numbers within your selected range.</li>
                        <li> 3. Witness the visual representation of prime numbers appearing as they are found.
                        <li><b>Manual Range Selection (Input Boxes): </b></li>
                        <li> 1. Manually input your desired range's start and end values.</li>
                        <li> 2. Click the "Visualize" button to initiate the Sieve algorithm within your specified range.</li>
                        <li> 3. Observe the visualization highlighting prime numbers within the provided interval.</li>
                      <ul>
                    </p>
                    <ul>
                      <li> <img id="primeNumberInsert" alt="primeNumbersInsert" src="${PrimeNumberRangeSelection}"> </li>
                    </ul>
                    <div id="tutorialCounter">${counter}/4</div>`;
  } else if (counter === 3) {
    document.getElementById(
      "textGroup"
    ).innerHTML = ` <h3>Visualization Control</h3>
                    <h4>Fine-tune your Prime Number Visualizer experience with comprehensive control options..</h4>
                    <p> 
                        <ul>
                            <li> <b>Visualizer Speed Adjustment:</b> Use the speed control slider to set your preferred visualization speed. Slide left for slower, more detailed visualizations, or right for faster results. Observe the Sieve algorithm efficiently identifying prime numbers at your chosen pace.</li>
                            <li> <b>Refresh Visualizer:</b> Click the "Refresh" button to reset the visualization. Start anew, change your range, or adjust the speed with a clean slate. Ensure uninterrupted learning by quickly refreshing the visualizer whenever you need it.</li>
                        </ul>
                    </p>
                    <ul>
                      <li><img id="primeNumberVisSpeed" alt="pPrimeNumberVisSpeed" src="${PNVisSpeed}"></li> 
                      <li><img id="primeNumberVisReset" alt="pPrimeNumberVisReset" src="${PNVisReset}"></li>  
                    </ul>
                    <div id="tutorialCounter">${counter}/4</div>`;
  } else if (counter === 4) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Enjoy!</h3>
                    <h4>I hope you must enjoy playing around with this visualization tool and just have as much fun as I had building it!</h4>
                    <img id="mainTutorialImage" alt="enjoyImg" src="${enjoy}"/>
                    <div id="tutorialCounter">${counter}/4</div>`;
  }
}

export default function PrimeNumberVisInstructionPopup(props) {
  const handleSkip = () => {
    counter = 1;
    props.setShowTutorial(false);
  };

  const handleNext = () => {
    if (counter < 4) counter++;
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
        marginTop: "-4%",
        marginLeft: "-104%",
        width: "130%",
      }}
    >
      <div id="tutorial" className="popup" style={{ background: "#ffffff" }}>
        <div id="textGroup">
          <h3>Welcome to the Prime Number Visualizer!</h3>
          <h4>
             Welcome to the Prime Number Visualizer, a powerful tool that makes understanding prime numbers and the Sieve of Eratosthenes algorithm accessible and engaging.
          </h4>
          <p>
            Prime numbers are fundamental in number theory and have wide-ranging applications in computer science and cryptography. 
            With this tool, you can explore and visualize the process of finding prime numbers using the Sieve algorithm step by step.
          </p>
          <div id="tutorialCounter">1/4</div>
          <img id="PrimeNumberVisMainTutorialImage" alt="BSTImg" src={SieveofEratosthenes} />
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
