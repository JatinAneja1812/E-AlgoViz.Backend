import React, { useRef, useEffect, useState } from "react";

const BSTNode = ({ tree, searchNumber, speed, canvasWidth, canvasHeight, scale,  traversalOrder }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [scaleFactor] = useState(1);

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current.getContext('2d'));
    }
  }, [canvasWidth, canvasHeight]);

  const BuildTree = (tree) => {
    buildTreeHelperMethod(tree);
  };

  const buildTreeHelperMethod  = (tree) => {
    drawCircle(tree.xAxis, tree.yAxis, tree.value, "white", "black", "black");

    if (tree.left != null) {
      drawLine(
        tree.left.xAxis,
        tree.left.yAxis,
        tree.left.parentXAxis,
        tree.left.parentYAxis,
        "black"
      );
      buildTreeHelperMethod(tree.left);
    }

    if (tree.right != null) {
      drawLine(
        tree.right.xAxis,
        tree.right.yAxis,
        tree.right.parentXAxis,
        tree.right.parentYAxis,
        "black"
      );
      buildTreeHelperMethod(tree.right);
    }
  };

  const drawCircle = (
    xAxis,
    yAxis,
    value,
    circleBackgroundColor,
    circleBorder,
    fontColor
  ) => {
    if (context) {
      const scaledXAxis = (xAxis / canvasWidth) * canvasRef.current.width;
      const scaledYAxis = (yAxis / canvasHeight) * canvasRef.current.height;

      context.beginPath();
      context.lineWidth = 3;
  
      context.arc(scaledXAxis, scaledYAxis, 20 * scaleFactor, 0, 2 * Math.PI, true);
  
      context.fillStyle = circleBackgroundColor;
      context.fill();
      context.strokeStyle = circleBorder;
      context.stroke();
  
      context.beginPath();
      context.font = `${15 * scaleFactor}px Arial`;
      context.fillStyle = fontColor;
      context.fill();
      context.textAlign = "center";
      context.fillText(value, scaledXAxis, scaledYAxis + 5 * scaleFactor);
      context.stroke();
    }
  };
  
  const drawLine = (
    xAxis,
    yAxis,
    parentXAxis,
    parentYAxis,
    lineColor
  ) => {
    if (context) {
       const scaledXAxis = (xAxis / canvasWidth) * canvasRef.current.width;
    const scaledYAxis = (yAxis / canvasHeight) * canvasRef.current.height;
    const scaledParentXAxis = (parentXAxis / canvasWidth) * canvasRef.current.width;
    const scaledParentYAxis = (parentYAxis / canvasHeight) * canvasRef.current.height;

    context.beginPath();
    context.moveTo(scaledParentXAxis - 5, scaledParentYAxis + 20);
    context.lineTo(scaledXAxis, scaledYAxis - 20);
    context.strokeStyle = lineColor;
    context.stroke();
    }
  };

  const preOrderTraversal = (node) => {
    if (node === null) return;
  
    visualizeNode(tree, "red", "black", "white");
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  };

  const inOrderTraversal = (node) => {
    if (node === null) return;

    inOrderTraversal(node.left);
    visualizeNode(tree, "red", "black", "white");
    inOrderTraversal(node.right);
  };

  const postOrderTraversal = (node) => {
    if (node === null) return;

    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    visualizeNode(tree, "red", "black", "white");
  };

  const visualizeNode = (node, backgroundColor, circleColor, fontColor, duration = 500) => {
    drawCircle(node.xAxis, node.yAxis, node.value, backgroundColor, circleColor, fontColor);
  
    setTimeout(() => {
      resetNodeAppearance(node, backgroundColor, circleColor, fontColor);
    }, duration);
  };
  
  const resetNodeAppearance = (node, backgroundColor, circleColor, fontColor) => {
    drawCircle(node.xAxis, node.yAxis, node.value, backgroundColor, circleColor, fontColor);
  };


  const visualizeSearchNumber = (tree, searchNumber, traversalOrder) => {

    const traversalFunction = {
      "preorder": preOrderTraversal,
      "inorder": inOrderTraversal,
      "postorder": postOrderTraversal,
    };

    const selectedTraversal = traversalFunction[traversalOrder];
    if (selectedTraversal) {
      selectedTraversal(tree);
    }

    if (tree.value === searchNumber) {
      visualizeNode(tree, "green", "black", "white");
    } else if (tree.value > searchNumber && tree.left != null) {
      visualizeNode(tree, "red", "black", "white");
      setTimeout(() => {
        drawLine(
          tree.left.xAxis,
          tree.left.yAxis,
          tree.left.parentXAxis,
          tree.left.parentYAxis,
          "red"
        );
        visualizeSearchNumber(tree.left, searchNumber, traversalOrder);
      }, speed);
    } else if (tree.value < searchNumber && tree.right != null) {
      visualizeNode(tree, "red", "black", "white");
      setTimeout(() => {
        drawLine(
          tree.right.xAxis,
          tree.right.yAxis,
          tree.right.parentXAxis,
          tree.right.parentYAxis,
          "red"
        );
        visualizeSearchNumber(tree.right, searchNumber, traversalOrder);
      }, speed);
    }
  };

  if (tree == null) return null;

  return (
    <span>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ transform: `scale(${scale}) translate(${10}px, ${0}px)` }}
      />
      {context != null && BuildTree(tree)}
      {searchNumber != null && visualizeSearchNumber(tree, searchNumber, traversalOrder)}
    </span>
  );
};

export default BSTNode;