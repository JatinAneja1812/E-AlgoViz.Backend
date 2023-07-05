import React from "react";
import Button from "@mui/material/Button";
import path from "../Asset/Images/path.png";
import algorithms from "../Asset/Images/algorithms.png";
import walls from "../Asset/Images/walls.gif";
import addBomb from "../Asset/Images/addBomb.png";
import enjoy from "../Asset/Images/enjoy.png";
import dragging from "../Asset/Images/dragging.gif";
import tools from "../Asset/Images/tools.png";
import "../Popups/ModalStyles/InstructionMainPopupStyle.css";

var counter = 1;

function nextPreviousClick(counter) {
  if (counter === 1) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>What is a Pathfinding Algorithm?</h3>
                    <h6>At its core, a Pathfinding Algorithm seeks to find the shortest path between two points. This application visualizes various pathfinding algorithms in action, and more!</h6>
                    <p>All of the algorithms on this application are adapted for a 2D grid, where 90 degree turns have a "cost" of 1 and movements from a node to another have a "cost" of 1.</p>
                    <img id="mainTutorialImage" alt="pathImg" src="${path}"/><div id="tutorialCounter">${counter}/8</div>`;
  } else if (counter === 2) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Picking an algorithm</h3><h6>Choose an algorithm from the "select Algorithms" drop-down menu.</h6>
                    <p>Note that some algorithms are <i><b>unweighted</b></i>, while others are <i><b>weighted</b></i>. Unweighted algorithms do not take turns or weight nodes into account, whereas weighted ones do. Additionally, not all algorithms guarantee the shortest path. </p>
                    <img id="secondTutorialImage"  alt="algoImg" src="${algorithms}"><div id="tutorialCounter">${counter}/8</div>`;
  } else if (counter === 3) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Algorithms Intomation</h3>
                   <h6>Not all algorithms are created equal.</h6><ul><li>
                   <b>Dijkstra's Algorithm</b> (weighted): the father of pathfinding algorithms; guarantees the shortest path</li><li>
                   <b>A* Search</b> (weighted): arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm</li><li>
                   <b>Greedy Best-first Search</b> (weighted): a faster, more heuristic-heavy version of A*; does not guarantee the shortest path</li><li>
                   <b>Swarm Algorithm</b> (weighted): a mixture of Dijkstra's Algorithm and A*; does not guarantee the shortest-path</li><li>
                   <b>Convergent Swarm Algorithm</b> (weighted): the faster, more heuristic-heavy version of Swarm; does not guarantee the shortest path</li><li>
                   <b>Bidirectional Swarm Algorithm</b> (weighted): Swarm from both sides; does not guarantee the shortest path</li><li>
                   <b>Breath-first Search</b> (unweighted): a great algorithm; guarantees the shortest path</li><li>
                   <b>Birdirectional Breath-first Search</b> (unweighted): Another great algorithm, Breath-First Search from both sides; guarantees the shortest path</li><li>
                   <b>Depth-first Search</b> (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path</li></ul>
                   <div id="tutorialCounter">${counter}/8</div>`;
  } else if (counter === 4) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Adding walls and weights</h3>
                    <h6>Click on the grid to add a wall. Click on the grid while pressing W to add a weight. Generate mazes and patterns from the "Mazes & Patterns" drop-down menu.</h6>
                    <p>Walls are impenetrable, meaning that a path cannot cross through them. Weights, however, are not impassable. They are simply more "costly" to move through. In this application, moving through a weight node has a "cost" of 15.</p>
                    <img id="secondTutorialImage" src="${walls}"><div id="tutorialCounter">${counter}/8</div>`;
  } else if (counter === 5) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Adding a bomb</h3><h6>Click the "Add Bomb" button.</h6>
                   <p>Adding a bomb will change the course of the chosen algorithm. In other words, the algorithm will first look for the bomb (in an effort to diffuse it) and will then look for the target node. Note that the Bidirectional Swarm Algorithm does not support adding a bomb.</p>
                   <img id="secondTutorialImage" src="${addBomb}"><div id="tutorialCounter">${counter}/8</div>`;
  } else if (counter === 6) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Dragging nodes</h3><h6>Click and drag the start, bomb, and target nodes to move them.</h6>
                   <p>Note that you can drag nodes even after an algorithm has finished running. This will allow you to instantly see different paths.</p>
                   <img id="secondTutorialImage" alt="dragging" src="${dragging}"><div id="tutorialCounter">${counter}/8</div>`;
  } else if (counter === 7) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Visualizing and more</h3><h6>Use the navbar buttons to visualize algorithms and to do other stuff!</h6>
                   <p>You can clear the entire board, and adjust the visualization speed, Take a Print of current board, all from the navbar. If you want to access this tutorial again, click on "Instructions" on the navbar.</p>
                   <img id="secondTutorialImage" alt="tools" src="${tools}"><div id="tutorialCounter">${counter}/8</div>`;
  } else if (counter === 8) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Enjoy!</h3><h6>I hope you must enjoy playing around with this visualization tool and just have as much fun as I had building it!</h6>
                   <img id="mainTutorialImage" alt="enjoyImg" src="${enjoy}"/>
                   <div id="tutorialCounter">${counter}/8</div>`;
  }
}

const InstructionMainPopup = (props) => {
  const handleSkip = () => {
    counter = 1;
    props.setShowTutorial(false);
  };

  const handleNext = () => {
    if (counter < 8) counter++;
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
        width: "130%"
      }}
    >
      <div id="tutorial" className="popup" style={{ background: "#ffffff" }}>
        <div id="textGroup">
          <h3>What is a Pathfinding Algorithm?</h3>
          <h6>
            At its core, a Pathfinding Algorithm seeks to find the shortest path
            between two nodes. This application visualizes various pathfinding
            algorithms in action, and more!
          </h6>
          <p>
            All of the algorithms on this application are adapted for a 2D grid,
            where 90 degree turns have a "cost" of 1 and movements from a node
            to another have a "cost" of 1.
          </p>
          <div id="tutorialCounter">1/8</div>
          <img id="mainTutorialImage" alt="img" src={path} />
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

export default InstructionMainPopup;
