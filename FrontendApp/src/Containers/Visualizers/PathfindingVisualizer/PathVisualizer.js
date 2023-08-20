import React, { useState, useEffect, useCallback  } from "react";
import Node from "./Node/Node.js";
import AppNavBar from "../../../Components/Menu/PathfindingVisualizerNavMenu.js";
import Infobar from "../../../Components/InfomationBar/PathfindingVisualizerTools/PathfindingComponentsInfobar.js";
import AlgorithmInfoBar from "../../../Components/InfomationBar/PathfindingVisualizerTools/PathfindingAlgorithmInfoBar.js";
import { solve_algorithm } from "../../../Components/Algorithms/PathFindingAlgorithms/Rootcaller.js";
import { solve_maze } from "../../../Components/Mazes/Rootcaller.js";
import TimeAndDistModal from "../../../Components/Popups/TimeAndDistModal.js";
import "./PathVisualizer.styles.css";
import visualizerSpeedValue from "../../../Utility/Hooks/GetVisualizerSpeedValue.js";

let START_NODE_ROW = 15;
let START_NODE_COL = 10;
let FINISH_NODE_ROW = 35;
let FINISH_NODE_COL = 10;
let MID_NODE_ROW = -1;
let MID_NODE_COL = -1;
let GRIDCOLS = 21;
let GRIDROWS = 50;

let algo;
let TIME = 0;
let PATH_LENGTH = 0;

export default function PathAlgoVisualizer() {
  const [grid, setGrid] = useState([]);
  const [mouseIsPressed, setMousePressed] = useState(false);
  const [startIsSelected, setStartIsSelected] = useState(false);
  const [finishIsSelected, setFinishIsSelected] = useState(false);
  const [nodeSize] = useState((window.outerWidth - 21) / 50);
  const [boardCleared, setBoardClear] = useState(false);
  const [algorithms, setAlgorithms] = useState("");
  const [TimeDistShow, setTimeDistShow] = useState(false);
  const [visualizerSpeed, setVisualizerSpeed] = useState("");
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    const g = getInitialGrid();
    setGrid(g);
    return () => {};
  }, []);

  const clearBoard = () => {
    const g = grid;
    TIME = 0;
    PATH_LENGTH = 0;
    MID_NODE_ROW = MID_NODE_COL = -1;
    START_NODE_ROW = 15;
    START_NODE_COL = 10;
    FINISH_NODE_ROW = 35;
    FINISH_NODE_COL = 10;
    GRIDCOLS = 21;
    GRIDROWS = 50;
    setMousePressed(false);
    for (let i = 0; i < GRIDROWS; i++) {
      for (let j = 0; j < GRIDCOLS; j++) {
        var node = g[i][j];

        document.getElementById(`node-${i}-${j}`).className = "node";
        node.row = i;
        node.col = j;
        node.isStart =
          node.row === START_NODE_ROW && node.col === START_NODE_COL;
        node.isFinish =
          node.row === FINISH_NODE_ROW && node.col === FINISH_NODE_COL;
        node.isMid = false;
        node.heuristic = 0;
        node.isWall = false;
        node.isVisited = false;
        node.isVisited2 = false;
        node.isShortest = false;
        node.isWeight = false;
        node.distance = 1000000000;
        node.previousNode = null;
        node.src = 0;
      }
      document.getElementById(
        `node-${START_NODE_ROW}-${START_NODE_COL}`
      ).className = "node-start";
      document.getElementById(
        `node-${FINISH_NODE_ROW}-${FINISH_NODE_COL}`
      ).className = "node-finish";
    }

    setGrid(g);
    setBoardClear(true);
  };

  const clearPath = () => {
    const newGrid = grid;
    TIME = 0;
    PATH_LENGTH = 0;
    MID_NODE_ROW = MID_NODE_COL = -1;
    for (let row of newGrid) {
      for (let node of row) {
        node.isStart =
          node.row === START_NODE_ROW && node.col === START_NODE_COL;
        node.isFinish =
          node.row === FINISH_NODE_ROW && node.col === FINISH_NODE_COL;
        node.isVisited2 = false;
        if (node.isShortest) {
          node.isShortest = false;
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node";
        }
        node.distance = 1000000000;
        node.heuristic = 0;
        node.isVisited = false;
        node.previousNode = null;
        node.src = 0;
        if (node.isWall) continue;
        if (node.isWeight) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node-weight";
          continue;
        }
        node.isWall = false;
        if (node.isStart) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node-start";
          continue;
        }
        if (node.isFinish) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node-finish";
          continue;
        }
      }
    }
    setGrid(newGrid);
  };

  const handleMouseDown = useCallback((row, col) => {
    if (row === START_NODE_ROW && col === START_NODE_COL) {
      setMousePressed(true);
      setStartIsSelected(true);
      return;
    }
    if (row === FINISH_NODE_ROW && col === FINISH_NODE_COL) {
      setMousePressed(true);
      setFinishIsSelected(true);
      return;
    }
    if (document.getElementById("weightToggle").checked === true) {
      setMousePressed(true);
      return;
    }
    setMousePressed(true);
    setGrid(getNewGridWithWallToggled(grid, row, col));
  }, [grid]);

  const handleMouseEnter = useCallback((row, col) => {
    if (!mouseIsPressed) return;

    if (startIsSelected) {
      if (
        !grid[row][col].isFinish &&
        !grid[row][col].isWall &&
        !grid[row][col].isWeight
      ) {
        const newGrid = getNewGridWithStartToggled(grid, row, col);
        setGrid(newGrid);
      }
      return;
    }
    if (finishIsSelected) {
      if (
        !grid[row][col].isStart &&
        !grid[row][col].isWall &&
        !grid[row][col].isWeight
      ) {
        const newGrid = getNewGridWithFinishToggled(grid, row, col);
        setGrid(newGrid);
      }
      return;
    }
    if (document.getElementById("weightToggle").checked === true) {
      const newGrid = getNewGridWithWeightToggled(grid, row, col);
      setGrid(newGrid);
      return;
    }

    setGrid(getNewGridWithWallToggled(grid, row, col));
  }, [grid, mouseIsPressed, startIsSelected, finishIsSelected]);

  const handleMouseUp = useCallback(() => {
    setMousePressed(false);
    setStartIsSelected(false);
    setFinishIsSelected(false);
  }, []);

  const handleTimeDistModalShow = (e) => {
    setTimeDistShow(!TimeDistShow);
  };

  const handleAlgorithm = async (grid, algo_type) => {
    var startTime = Date.now();
    var res = await solve_algorithm(
      grid,
      START_NODE_ROW,
      START_NODE_COL,
      FINISH_NODE_ROW,
      FINISH_NODE_COL,
      MID_NODE_ROW,
      MID_NODE_COL,
      algo_type
    );
    var endTime = Date.now();
    TIME = endTime - startTime;
    return res;
  };

  const path_length = (nodesInShortestPathOrder) => {
    var i,
      sum = 0,
      a,
      b,
      dx,
      dy;
    for (i = 1; i < nodesInShortestPathOrder.length; i++) {
      a = nodesInShortestPathOrder[i - 1];
      b = nodesInShortestPathOrder[i];
      dx = a.row - b.row;
      dy = a.col - b.col;
      sum += Math.sqrt(dx * dx + dy * dy);
    }
    return sum;
  };

  const visualizeAlgorithm = async (type, algo_type) => {
    algo = algo_type;
    clearPath();
    const ret = await handleAlgorithm(grid, algo);
    const visitedNodesInOrder = ret[0];
    const nodesInShortestPathOrder = ret[1];

    PATH_LENGTH = path_length(nodesInShortestPathOrder);
    const speed = visualizerSpeedValue(visualizerSpeed);
    animateAlgorithm(
      grid,
      visitedNodesInOrder,
      nodesInShortestPathOrder,
      type,
      speed
    );
   
  };

  const animateShortestPath = (
    state_grid,
    nodesInShortestPathOrder,
    type,
    speed
  ) => {
    //this variable is used to check in which index mid node occurs, so that we can change colors
    let m = 100000000;
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      const node = nodesInShortestPathOrder[i];
      if (i === 1) continue;
      if (
        MID_NODE_ROW !== -1 &&
        node.row === MID_NODE_ROW &&
        node.col === MID_NODE_COL
      ) {
        m = i;
        break;
      }
    }
  
    //animator code begins here
    if (type === 0) {
      for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
        setTimeout(() => {
          const node = nodesInShortestPathOrder[i];
          const orig_node = state_grid[node.row][node.col];
          orig_node.isShortest = orig_node.isVisited = true;
  
          let value = "";
          if (i >= m) {
            value = "node-shortest-path-2";
          } else {
            value = "node-shortest-path";
          }
          if (node.isStart) {
            value += " node-start";
          } else if (node.isMid) {
            value += " node-mid";
          } else if (node.isFinish) {
            value += " node-finish";
          }
          document.getElementById(
            `node-${node.row}-${node.col}`
          ).className = `node ${value}`;
        }, speed * i);
      }
    } else {
      for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
        const node = nodesInShortestPathOrder[i];
        const orig_node = state_grid[node.row][node.col];
        orig_node.isShortest = orig_node.isVisited = true;
        if (node.isStart) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-start node-shortest-path_f";
        } else if (node.isMid) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-mid node-shortest-path_f";
        } else if (node.isFinish) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-finish node-shortest-path_f";
        } else {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path_f";
        }
      }
    }
    setRunning(false);
  };
  
  const animateAlgorithm = (
    state_grid,
    visitedNodesInOrder,
    nodesInShortestPathOrder,
    type,
    speed
  ) => {
    //this variable is used to check in which index mid node occurs, so that we can change colors
    let m = 10000000;
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      const node = visitedNodesInOrder[i];
      if (i === 1) continue;
      if (
        MID_NODE_ROW !== -1 &&
        node.row === MID_NODE_ROW &&
        node.col === MID_NODE_COL
      ) {
        m = i;
        break;
      }
    }
  
    //animator code begins here
    if (type === 0) {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        // use to color the final path, yellow in the end
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            animateShortestPath(
              state_grid,
              nodesInShortestPathOrder,
              type,
              speed
            );
          }, speed * i);
          return;
        }
  
        //yellow blinker to indicate current position
        const node = visitedNodesInOrder[i];
        setTimeout(() => {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node_current";
        }, speed * i - 15);
        setTimeout(() => {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node";
        }, speed * i - 5);
  
        //condition to check if I have to change color
        let value = "";
        if (i >= m) {
          value = "node_vis_2";
        } else {
          value = "node_vis";
        }
  
        if (node.isStart) {
          value += "node-start";
        } else if (node.isMid) {
          value += "node-mid";
        } else if (node.isFinish) {
          value += "node-finish";
        }
  
        //used to color the visited grids in order
        setTimeout(() => {
          const orig_node = state_grid[node.row][node.col];
          orig_node.isVisited = true;
          if (node.isStart === true) orig_node.isStart = true;
          document.getElementById(
            `node-${node.row}-${node.col}`
          ).className = `node ${value}`;
        }, speed * i);
      }
    } else {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
          animateShortestPath(state_grid, nodesInShortestPathOrder, type, speed);
          return;
        }
        const node = visitedNodesInOrder[i];
        const orig_node = state_grid[node.row][node.col];
        let value = "";
        if (i >= m) {
          value = "node_vis_f_2";
          orig_node.isVisited2 = true;
        } else {
          value = "node_vis_f";
          orig_node.isVisited = true;
        }
  
        if (node.isStart) {
          value += " node-start";
        } else if (node.isMid) {
          value += " node-mid";
        } else if (node.isFinish) {
          value += " node-finish";
        }
        document.getElementById(
          `node-${node.row}-${node.col}`
        ).className = `node ${value}`;
      }
    }
  };  

  function handleMaze(maze_type) {
    return solve_maze(grid, GRIDROWS, GRIDCOLS, maze_type);
  }

  const visualizeMaze = (maze_type) => {
    clearBoard();
    const visitedNodesInOrder = handleMaze(maze_type);
    animateMaze(grid, visitedNodesInOrder, maze_type);
  };

  return (
    <>
      <AppNavBar
        clearBoard={clearBoard}
        boardCleared={boardCleared}
        setBoardClear={setBoardClear}
        clearPath={clearPath}
        visualizeAlgorithm={visualizeAlgorithm}
        setAlgorithms={setAlgorithms}
        algorithms={algorithms}
        visualizeMaze={visualizeMaze}
        setVisualizerSpeed={setVisualizerSpeed}
        changeTimeAndDistModalShow={handleTimeDistModalShow}
        setRunning={setRunning}
        isRunning={isRunning}
      />

      <Infobar />
      <AlgorithmInfoBar algoTitle={algorithms} />

      <TimeAndDistModal
        show={TimeDistShow}
        onHide={handleTimeDistModalShow}
        timetaken={TIME}
        pathtravelled={PATH_LENGTH}
      />

      <div className="table">
        <div className="table-wrapper">
          {grid.map((row, rowIdx) => (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const {
                  row,
                  col,
                  isStart,
                  isFinish,
                  isWall,
                  isWeight,
                  isVisited,
                  isVisited2,
                  isMid,
                  isShortest,
                } = node;
                return (
                  <Node
                    key={nodeIdx}
                    row={row}
                    col={col}
                    isWall={isWall}
                    isWeight={isWeight}
                    isStart={isStart}
                    isFinish={isFinish}
                    isMid={isMid}
                    isVisited={isVisited}
                    isVisited2={isVisited2}
                    isShortest={isShortest}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseUp={() => handleMouseUp()}
                    nodeSize={nodeSize}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 50; row++) {
    const currentRow = [];
    for (let col = 0; col < 21; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isMid: false,
    distance: 1000000000, //unable to use Infinity here, cos deep copy does not work with infinity
    heuristic: 0,
    isVisited: false,
    isVisited2: false,
    isWall: false,
    isWeight: false,
    isShortest: false,
    previousNode: null,
    src: 0,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  if (grid[row][col].isStart || grid[row][col].isFinish || grid[row][col].isWeight) {
    return grid;
  }

  const newGrid = grid.map((rowArray) =>
    rowArray.map((node) => {
      if (node.row === row && node.col === col) {
        return { ...node, isWall: !node.isWall };
      }
      return node;
    })
  );

  return newGrid;
};

const getNewGridWithWeightToggled = (grid, row, col) => {
  console.log("reahced")
  if (grid[row][col].isStart || grid[row][col].isFinish || grid[row][col].isWall) {
    return grid;
  }

  const newGrid = grid.map((rowArray) =>
    rowArray.map((node) => {
      if (node.row === row && node.col === col) {
        return { ...node, isWeight: !node.isWeight };
      }
      return node;
    })
  );

  return newGrid;
};

const getNewGridWithStartToggled = (grid, row, col) => {
  if (row === START_NODE_ROW && col === START_NODE_COL) {
    return grid;
  }

  const newGrid = grid.map((rowArray) =>
    rowArray.map((node) => {
      if (node.row === START_NODE_ROW && node.col === START_NODE_COL) {
        return { ...node, isStart: false };
      } else if (node.row === row && node.col === col) {
        return { ...node, isWall: false, isWeight: false, isStart: true };
      }
      return node;
    })
  );

  START_NODE_ROW = row;
  START_NODE_COL = col;

  return newGrid;
};

const getNewGridWithFinishToggled = (grid, row, col) => {
  if (row === FINISH_NODE_ROW && col === FINISH_NODE_COL) {
    return grid;
  }

  const newGrid = grid.map((rowArray) =>
    rowArray.map((node) => {
      if (node.row === FINISH_NODE_ROW && node.col === FINISH_NODE_COL) {
        return { ...node, isFinish: false };
      } else if (node.row === row && node.col === col) {
        return { ...node, isWall: false, isWeight: false, isFinish: true };
      }
      return node;
    })
  );

  FINISH_NODE_ROW = row;
  FINISH_NODE_COL = col;

  return newGrid;
};

const animateMaze = (state_grid, visitedNodesInOrder, maze_type) => {
  for (let i = 0; i < visitedNodesInOrder.length; i++) {
    const node = visitedNodesInOrder[i];
    const a_node = state_grid[node.row][node.col];
    if (a_node.isStart || a_node.isMid || a_node.isFinish) continue;
    setTimeout(() => {
      a_node.isWall = true;
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "node-wall";
    }, 10 * i);
  }
};
