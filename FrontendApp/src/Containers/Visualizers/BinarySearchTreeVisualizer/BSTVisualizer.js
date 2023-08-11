import React, { useState, useEffect } from "react";
import BSTVisualizerNavMenu from "../../../Components/Menu/BSTVisualizerNavMenu";
import * as BSTConstants from "./Constants/BSTConstants.js";
import BSTTools from "../../../Components/InfomationBar/BSTVisualizerTools/BSTTools";
import BSTNode from "./Node/BSTNode";
import "./BSTVisualizer.css";
import { BSTVisualizerSpeedEnum } from "../../../Enums/BSTVisualizerSpeed";
import Nodata from "../../../imgs/NoData.svg";
import { BSTSearchTypeEnum } from "../../../Enums/BSTSearchTypeEnum";
import BSTTreeOrder from "../../../Components/InfomationBar/BSTVisualizerTools/BSTTreeOrders";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createBSTNode(value, xAxis, yAxis, parentXAxis, parentYAxis) {
  return {
    value: value,
    left: null,
    right: null,
    xAxis: xAxis,
    yAxis: yAxis,
    parentXAxis: parentXAxis,
    parentYAxis: parentYAxis,
  };
}

function insertNode(currentNode, value) {
  if (currentNode.value > value) {
    if (currentNode.left == null) {
      if (currentNode.parentXAxis == null || currentNode.parentYAxis == null) {
        currentNode.left = createBSTNode(
          value,
          currentNode.xAxis - BSTConstants.SECOND_LEVEL_NODE_X_AXIS,
          currentNode.yAxis + BSTConstants.SECOND_LEVEL_NODE_Y_AXIS,
          currentNode.xAxis,
          currentNode.yAxis
        );
      } else {
        currentNode.left = createBSTNode(
          value,
          currentNode.xAxis - BSTConstants.DISTANCE_BETWEEN_NODES,
          currentNode.yAxis + BSTConstants.DISTANCE_BETWEEN_NODES,
          currentNode.xAxis,
          currentNode.yAxis
        );
      }
    } else {
      insertNode(currentNode.left, value);
    }
  } else {
    if (currentNode.right == null) {
      if (currentNode.parentXAxis == null || currentNode.parentYAxis == null) {
        currentNode.right = createBSTNode(
          value,
          currentNode.xAxis + BSTConstants.SECOND_LEVEL_NODE_X_AXIS,
          currentNode.yAxis + BSTConstants.SECOND_LEVEL_NODE_Y_AXIS,
          currentNode.xAxis,
          currentNode.yAxis
        );
      } else {
        currentNode.right = createBSTNode(
          value,
          currentNode.xAxis + BSTConstants.DISTANCE_BETWEEN_NODES,
          currentNode.yAxis + BSTConstants.DISTANCE_BETWEEN_NODES,
          currentNode.xAxis,
          currentNode.yAxis
        );
      }
    } else {
      insertNode(currentNode.right, value);
    }
  }
}

function BSTVisualizer() {
  const [tree, setTree] = useState(null);
  const [searchNumber, setSearchNumber] = useState(null);
  const [scale, setScale] = useState(1);
  const [speed, setSpeed] = useState(BSTVisualizerSpeedEnum.FAST);
  const [traversalOrder, setTraversalOrder] = useState(
    BSTSearchTypeEnum.PRE_ORDER.toString()
  );
  const [treeContainerDimensions, setTreeContainerDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const treeContainer = document.getElementById("treeContainer");
    if (treeContainer) {
      const { width, height } = treeContainer.getBoundingClientRect();
      setTreeContainerDimensions({ width, height });
    }
  }, []);

  // Function to traverse the BST and collect elements in a given order
  const traverseTree = (node, order, elements) => {
    if (order === "preorder") elements.push(node.value);
    if (node.left) traverseTree(node.left, order, elements);
    if (order === "inorder") elements.push(node.value);
    if (node.right) traverseTree(node.right, order, elements);
    if (order === "postorder") elements.push(node.value);
  };

  // Function to get the elements in a given order
  const getElementsInOrder = (order) => {
    if (!tree) return [];
    const elements = [];
    traverseTree(tree, order, elements);
    return elements;
  };

  const handleWheel = (e) => {
    // Increase or decrease scale based on the scroll direction
    const newScale = e.deltaY > 0 ? scale * 0.9 : scale * 1.1;
    // Set a range for the scale to prevent extreme zooming
    const clampedScale = Math.min(Math.max(newScale, 0.5), 3);
    setScale(clampedScale);
  };

  const addNode = (num = null) => {
    let userInput = num ?? parseInt(document.getElementById("userInput").value);

    if (userInput == null || userInput === "") return;
    if (isNaN(userInput)) return; // Input validation

    if (tree == null) {
      const initialX = Math.floor(treeContainerDimensions.width / 2) - 10;
      const initialY = Math.floor(treeContainerDimensions.height / 5);

      setTree(createBSTNode(userInput, initialX, initialY, null, null));

      setCanvasDimensions(initialX, initialY);
    } else {
      insertNode(tree, userInput);
      setTree({ ...tree });

      const newNode = findNodeByValue(tree, userInput);
      if (newNode) {
        setCanvasDimensions(newNode.xAxis, newNode.yAxis);
      }
    }
  };

  const addMultipleNode = async (num = null) => {
    let size = num ?? parseInt(document.getElementById("sizeInput").value);

    for (let i = 0; i < size; i++) {
      setTimeout(() => {
        document.getElementById("RandomInsertButton").click();
      }, i * 1000); // Delay is based on the index of the iteration
    }
  };

  // Add this function inside your BSTVisualizer component
  const findNodeByValue = (currentNode, value) => {
    if (currentNode === null) {
      return null;
    }

    if (currentNode.value === value) {
      return currentNode;
    }

    if (value < currentNode.value) {
      return findNodeByValue(currentNode.left, value);
    } else {
      return findNodeByValue(currentNode.right, value);
    }
  };

  const setCanvasDimensions = (newX, newY) => {
    const newCanvasWidth = Math.max(
      treeContainerDimensions.width,
      Math.abs(newX) * 2
    );
    const newCanvasHeight = Math.max(
      treeContainerDimensions.height,
      Math.abs(newY) * 2
    );
    setTreeContainerDimensions({
      width: newCanvasWidth,
      height: newCanvasHeight,
    });
  };

  const BSTReset = () => {
    document.getElementById("userInput").value = "";
    document.getElementById("userSearchInput").value = "";
    document.getElementById("sizeInput").value = "";
    setTree(null);
    setSearchNumber(null);
    setSpeed(BSTVisualizerSpeedEnum.FAST);
    setTraversalOrder(BSTSearchTypeEnum.PRE_ORDER);
  };

  const searchNodeInTree = () => {
    let searchNumber = parseInt(
      document.getElementById("userSearchInput").value
    );

    if (isNaN(searchNumber)) return; // Input validation

    setSearchNumber(searchNumber);
  };

  const BSTRandomInsert = () => {
    const randomNum = getRandomNumber(-1000, 1000);
    addNode(randomNum);
  };

  return (
    <div>
      <BSTVisualizerNavMenu
        BSTReset={BSTReset}
        searchNodeInTree={searchNodeInTree}
        setSpeed={setSpeed}
        speed={speed}
        setTraversalOrder={setTraversalOrder}
        traversalOrder={traversalOrder}
      />
      <BSTTools
        addNode={addNode}
        BSTRandomInsert={BSTRandomInsert}
        addMultipleNode={addMultipleNode}
      />
      <BSTTreeOrder getElementsInOrder={getElementsInOrder} />

      {/* Final Tree */}
      <div id="treeContainer" onWheel={handleWheel} className="treeContainer">
        <div className="treeContent" style={{ transform: `scale(${scale})` }}>
          {tree != null ? (
            <BSTNode
              className="number-found-msg font-weight-bold"
              tree={tree}
              speed={speed}
              canvasWidth={treeContainerDimensions.width}
              canvasHeight={treeContainerDimensions.height - 100}
              searchNumber={searchNumber}
              traversalOrder={traversalOrder}
            />
          ) : (
            <label className="emptyDivText">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={Nodata} alt="no data " />
                <div class="ant-empty-description">
                  Please insert the element to begin!
                </div>
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
}

export default BSTVisualizer;
