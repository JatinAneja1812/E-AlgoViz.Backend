import React, { useRef, useEffect, useState } from "react";

const BSTNode = ({ tree, searchNumber, speed, canvasWidth, canvasHeight, scale, translateX, translateY }) => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [scaleFactor] = useState(1);

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current.getContext('2d'));
    }
  }, [canvasWidth, canvasHeight]);

  const visualizeTree = (tree) => {
    preOrderHelperMethod(tree);
  };

  const preOrderHelperMethod = (tree) => {
    drawCircle(tree.xAxis, tree.yAxis, tree.value, "white", "black", "black");

    if (tree.left != null) {
      drawLine(
        tree.left.xAxis,
        tree.left.yAxis,
        tree.left.parentXAxis,
        tree.left.parentYAxis,
        "black"
      );
      preOrderHelperMethod(tree.left);
    }

    if (tree.right != null) {
      drawLine(
        tree.right.xAxis,
        tree.right.yAxis,
        tree.right.parentXAxis,
        tree.right.parentYAxis,
        "black"
      );
      preOrderHelperMethod(tree.right);
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


  const visualizeSearchNumber = (tree, searchNumber) => {
    drawCircle(tree.xAxis, tree.yAxis, tree.value, "red", "red", "white");

    setTimeout(() => {
      drawCircle(tree.xAxis, tree.yAxis, tree.value, "white", "red", "red");
    }, 500);

    if (tree.value === searchNumber) {
      setTimeout(() => {
        drawCircle(tree.xAxis, tree.yAxis, tree.value, "green", "black", "white");
      }, speed);
    } else if (tree.value > searchNumber && tree.left != null) {
      setTimeout(() => {
        drawLine(
          tree.left.xAxis,
          tree.left.yAxis,
          tree.left.parentXAxis,
          tree.left.parentYAxis,
          "red"
        );
        visualizeSearchNumber(tree.left, searchNumber);
      }, speed);
    } else if (tree.value < searchNumber && tree.right != null) {
      setTimeout(() => {
        drawLine(
          tree.right.xAxis,
          tree.right.yAxis,
          tree.right.parentXAxis,
          tree.right.parentYAxis,
          "red"
        );
        visualizeSearchNumber(tree.right, searchNumber);
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
        style={{ transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)` }}
      />
      {context != null && visualizeTree(tree)}
      {searchNumber != null && visualizeSearchNumber(tree, searchNumber)}
    </span>
  );
};

export default BSTNode;