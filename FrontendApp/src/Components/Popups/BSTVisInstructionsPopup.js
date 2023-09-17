import React from "react";
import Button from "@mui/material/Button";
import Treedatastructure from "../Asset/BSTVisComponentsImages/Treedatastructure.png";
import BSTRandomInsert from "../Asset/BSTVisComponentsImages/BSTRandomInsert.png";
import BSTRandomRangeInsert from "../Asset/BSTVisComponentsImages/BSTRandomRangeInsert.png";
import BSTSingleInsert from "../Asset/BSTVisComponentsImages/BSTSingleInsert.png";
import BSTSearchElement from "../Asset/BSTVisComponentsImages/BSTSearchElement.png";
import VisualizedSearch from "../Asset/BSTVisComponentsImages/VisualizedSearch.png";
import BstOrder from "../Asset/BSTVisComponentsImages/BstOrder.png";
import BSTOrdersWithValues from "../Asset/BSTVisComponentsImages/BSTOrdersWithValues.png";
import BstReset from "../Asset/BSTVisComponentsImages/BstReset.png";
import BstVisSpeed from "../Asset/BSTVisComponentsImages/BstVisSpeed.png";
import enjoy from "../Asset/PathfindingComponentsImages/enjoy.png";
import "../Popups/ModalStyles/InstructionMainPopupStyle.css";

var counter = 1;

function nextPreviousClick(counter) {
  if (counter === 1) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Welcome to the Binary Search Tree Visualizer!</h3>
                    <h4> 
                        Welcome to our Binary Search Tree Visualizer, a tool that helps you understand how Binary Search Trees work. 
                        A Binary Search Tree is a hierarchical data structure that allows for efficient data insertion, deletion, and retrieval operations. 
                        This visualizer will help you explore and learn more about the properties and operations of Binary Search Trees.
                    </h4>
                    <p>
                        Dive into the world of Binary Search Trees and its significance in computer science. This visualizer is your gateway to exploring abouts BSTs, helping you grasp their key properties and operations.
                    </p>
                    <img id="bstMainTutorialImage" alt="BSTImg" src="${Treedatastructure}"/><div id="tutorialCounter">${counter}/5</div>`;
  } else if (counter === 2) {
    document.getElementById(
      "textGroup"
    ).innerHTML = ` <h3>Diverse Node Insertion</h3><h4>Explore Binary Search Trees with Versatile Node Insertion.</h4>
                    <p>
                      <ul>
                        <li> 1. <b>Single Node</b>: Insert individual nodes with precision to understand the fundamentals of Binary Search Trees.</li>
                        <li> 2. <b>Random Element</b>: Add random elements to observe how the tree dynamically adapts and balances itself.</li>
                        <li> 3. <b>Quick Insertion</b>: Insert 1-20 nodes in a single step for an immersive exploration of BSTs. 
                        Customize your learning experience to gain comprehensive insights into Binary Search Trees. Whether you're a beginner or a seasoned enthusiast, our visualizer caters to your needs, providing a versatile and interactive learning platform. </li>
                      <ul>
                    </p>
                    <ul>
                      <li> <img id="bstInsert" alt="bstSingleInsert" src="${BSTSingleInsert}"> </li>
                      <li>  <img id="bstRandonInsert" alt="bstRandomInsert" src="${BSTRandomInsert}"></li>
                      <li> <img id="bstInsert" alt="bstRandomRangeInsert" src="${BSTRandomRangeInsert}"></li>
                    </ul>
                    <div id="tutorialCounter">${counter}/5</div>`;
  } else if (counter === 3) {
    document.getElementById(
      "textGroup"
    ).innerHTML = ` <h3>Fine-Tuned Search Control</h3>
                    <h4>Precision Searching with User-Defined Order.</h4>
                    <p> Customize your Binary Search Tree (BST) exploration by selecting in-order, pre-order, or post-order traversal. Enter your target number and initiate the search. 
                    Witness the BST efficiently find and retrieve the element within your chosen order. Gain valuable insights into BST search operations with this interactive tool.</p>
                    <div id="image-container" >
                      <img id="visualizedSearch" alt="bstSearchNode" src="${VisualizedSearch}"> 
                      <img id="bstSeachElement" alt="bstSearchNode" src="${BSTSearchElement}">  
                      <img id="bstSeachOrder" alt="bstSearchOrder" src="${BstOrder}">
                    </div>
                    <div id="tutorialCounter">${counter}/5</div>`;
  } else if (counter === 4) {
    document.getElementById(
      "textGroup"
    ).innerHTML =  `<h3>Custom Speed, Canvas Reset, and Dynamic Traversal Display</h3>
                    <h4>Enhanced Control and Insightful Feedback.</h4>
                    <p>Customize your Binary Search Tree (BST) experience with adjustable search speed, canvas reset, and dynamic traversal insights. Control your learning pace, reset the canvas, 
                    and observe real-time traversal sequences for a comprehensive understanding of BSTs. Ideal for both beginners and enthusiasts, explore BSTs with enhanced control and insightful feedback.</p>
                    <img id="bstResetBtn" alt="bstReset" src="${BstReset}">  
                    <img id="bstSpeedBtn" alt="bstVisSpeed" src="${BstVisSpeed}">
                    <img id="bstOrders" alt="bstOrderType" src="${BSTOrdersWithValues}"> 
                    <div id="tutorialCounter">${counter}/5</div>`;
  }  else if (counter === 5) {
    document.getElementById(
      "textGroup"
    ).innerHTML = `<h3>Enjoy!</h3>
                    <h4>I hope you must enjoy playing around with this visualization tool and just have as much fun as I had building it!</h4>
                    <img id="mainTutorialImage" alt="enjoyImg" src="${enjoy}"/>
                    <div id="tutorialCounter">${counter}/5</div>`;
  }
}

export default function BSTVisInstructionPopup(props) {
  const handleSkip = () => {
    counter = 1;
    props.setShowTutorial(false);
  };

  const handleNext = () => {
    if (counter < 5) counter++;
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
          <h3>Welcome to the Binary Search Tree Visualizer!</h3>
          <h4>
            Welcome to our Binary Search Tree Visualizer, a tool that helps you understand how Binary Search Trees work. 
            A Binary Search Tree is a hierarchical data structure that allows for efficient data insertion, deletion, and retrieval operations. 
            This visualizer will help you explore and learn more about the properties and operations of Binary Search Trees.
          </h4>
          <p>
            Dive into the world of Binary Search Trees and its significance in computer science. This visualizer is your gateway to exploring abouts BSTs, helping you grasp their key properties and operations.
          </p>
          <div id="tutorialCounter">1/5</div>
          <img id="bstMainTutorialImage" alt="BSTImg" src={Treedatastructure} />
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
