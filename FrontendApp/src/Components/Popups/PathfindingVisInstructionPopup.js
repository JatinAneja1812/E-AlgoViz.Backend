import React from "react";
import Button from "@mui/material/Button";
import path from "../Asset/PathfindingComponentsImages/pathImage.gif"
import algorithms from "../Asset/PathfindingComponentsImages/algorithms.png";
import walls from "../Asset/PathfindingComponentsImages/walls.gif";
import switchWeightAndWalls from "../Asset/PathfindingComponentsImages/SwitchWeightandWalls.png";
import mazeImage from "../Asset/PathfindingComponentsImages/MazesImages.png";
import distAndTimeBtn from "../Asset/PathfindingComponentsImages/DistandTimeBtn.png";
import distAndTimeModal from "../Asset/PathfindingComponentsImages/TimeAndDistModal.png";
import enjoy from "../Asset/PathfindingComponentsImages/enjoy.png";
import dragging from "../Asset/PathfindingComponentsImages/dragging.gif";
import clearingTools from "../Asset/PathfindingComponentsImages/clearingVisualizer.png";
import speedTool from "../Asset/PathfindingComponentsImages/speedImage.png";
import "../Popups/ModalStyles/InstructionMainPopupStyle.css";

var counter = 1;

function nextPreviousClick(counter) {
  if (counter === 1) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>What is a Pathfinding Algorithm?</h3>
                    <h4>Welcome to our Pathfinding Visualizer, a powerful tool for exploring and understanding various pathfinding algorithms. 
                    Pathfinding is crucial in computer science and gaming, as it helps find the shortest path from one point to another in a complex maze or map. 
                    This application visualizes various pathfinding algorithms in action, and more!</h4>
                    <p>All of the algorithms on this application are adapted for a 2D grid, where 90 degree turns have a "cost" of 1 and movements from a node to another have a "cost" of 1.</p>
                    <img id="mainTutorialImage" alt="pathImg" src="${path}"/><div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 2) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Picking an algorithm</h3><h4>Choose an algorithm from the "select Algorithms" drop-down menu.</h4>
                    <p>Note that some algorithms are <i><b>unweighted</b></i>, while others are <i><b>weighted</b></i>. Unweighted algorithms do not take turns or weight nodes into account, whereas weighted ones do. Additionally, not all algorithms guarantee the shortest path. </p>
                    <img id="secondTutorialImage"  alt="algoImg" src="${algorithms}"><div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 3) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Algorithms Intomation</h3>
                   <h4>Not all algorithms are created equal.</h4>
                   <ul>
                    <li><b>Dijkstra's Algorithm</b> (weighted): the father of pathfinding algorithms; guarantees the shortest path</li>
                    <li><b>A* Search</b> (weighted): arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm</li>
                    <li><b>Greedy Best-first Search</b> (weighted): a faster, more heuristic-heavy version of A*; does not guarantee the shortest path</li>
                    <li><b>Swarm Algorithm</b> (weighted): a mixture of Dijkstra's Algorithm and A*; does not guarantee the shortest-path</li
                    <li><b>Convergent Swarm Algorithm</b> (weighted): the faster, more heuristic-heavy version of Swarm; does not guarantee the shortest path</li>
                    <li><b>Bidirectional Swarm Algorithm</b> (weighted): Swarm from both sides; does not guarantee the shortest path</li>
                    <li><b>Breath-first Search</b> (unweighted): a great algorithm; guarantees the shortest path</li>
                    <li><b>Birdirectional Breath-first Search</b> (unweighted): Another great algorithm, Breath-First Search from both sides; guarantees the shortest path</li>
                    <li><b>Depth-first Search</b> (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path</li>
                   </ul>
                   <div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 4) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Picking a maze</h3><h4>Choose a maze from the "Mazes" drop-down menu.</h4>
                    <p> Choose a maze type from the dropdown menu and watch the grid magically transform into a new maze layout. Feel free to modify the maze by adding or removing walls, and experiment with different start and end node positions. Unleash your creativity and strategic thinking to customize the maze and optimize your pathfinding journey. </p>
                    <img id="fouthTutorialImage" alt="algoImg" src="${mazeImage}"><div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 5) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Adding walls and weights</h3>
                    <h4>Click on the grid to add a wall. Click on the grid while pressing W to add a weight. Generate mazes and patterns from the "Mazes & Patterns" drop-down menu.</h4>
                    <p>Walls are impenetrable, meaning that a path cannot cross through them. Weights, however, are not impassable. They are simply more "costly" to move through. In this application, moving through a weight node has a "cost" of 15.</p>
                    <img id="secondTutorialImage" src="${walls}"> <img id="thirdTutorialImage" src="${switchWeightAndWalls}"><div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 6) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Visualize Time and Distance Measurement</h3><h4>Discover the Efficiency</h4>
                   <p>Witness the power of pathfinding algorithms as the visualizer calculates the shortest path and measures the distance from the start node to the end node in real-time. Track the time taken and embrace the efficiency of the algorithm as it navigates through the maze, guiding you to your destination with precision and speed.</p>
                   <img id="fouthTutorialImage" src="${distAndTimeModal}"><img id="thirdTutorialImage" src="${distAndTimeBtn}"><div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 7) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Dragging nodes</h3><h4>Click and drag the start and target nodes to move them.</h4>
                   <p>Note that you can drag nodes even after an algorithm has finished running. This will allow you to instantly see different paths.</p>
                   <img id="secondTutorialImage" alt="dragging" src="${dragging}"><div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 8) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Visualizing and more</h3><h4>Use the navbar buttons to visualize algorithms and to do other stuff!</h4>
                   <p>You can clear the entire board, clear the path animated and adjust the visualization speed all from the navbar. If you want to access this tutorial again, click on instructions icons at the corner on the navbar or If you want to return home press on the title on navbar.</p>
                   <img id="fouthTutorialImage" alt="tools" src="${speedTool}">
                   <img id="thirdTutorialImage" alt="tools" src="${clearingTools}">
                   <div id="tutorialCounter">${counter}/9</div>`;
  } else if (counter === 9) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Enjoy!</h3><h4>I hope you must enjoy playing around with this visualization tool and just have as much fun as I had building it!</h4>
                   <img id="mainTutorialImage" alt="enjoyImg" src="${enjoy}"/>
                   <div id="tutorialCounter">${counter}/9</div>`;
  }
}

export default function InstructionMainPopup(props) {
  const handleSkip = () => {
    counter = 1;
    props.setShowTutorial(false);
  };

  const handleNext = () => {
    if (counter < 9) counter++;
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
          <h3> Welcome to the Pathfinding Visualizer!</h3>
          <h4>
            Welcome to our Pathfinding Visualizer, a powerful tool for exploring and understanding various pathfinding algorithms. 
            Pathfinding is crucial in computer science and gaming, as it helps find the shortest path from one point to another in a complex maze or map. 
            This application visualizes various pathfinding algorithms in action, and more!
          </h4>
          <p>
            All of the algorithms on this application are adapted for a 2D grid,
            where 90 degree turns have a "cost" of 1 and movements from a node
            to another have a "cost" of 1.
          </p>
          <div id="tutorialCounter">1/9</div>
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
