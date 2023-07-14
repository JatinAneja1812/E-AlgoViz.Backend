import React, { useMemo } from "react";
import "./Node.styles.css";

const Node = (props) => {
  const {
    row,
    col,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    isWall,
    isWeight,
    isVisited,
    isVisited2,
    isShortest,
    isStart,
    isFinish,
    isMid,
    nodeSize
  } = props;

  const classNames = useMemo(() => {
    let extra = "";
    if (isShortest && isStart) extra = "node-start node-shortest-path-2";
    else if (isShortest && isMid) extra = "node-mid node-shortest-path-2";
    else if (isShortest && isFinish) extra = "node-finish node-shortest-path-2";
    else if (isWall) extra = "node_wall_add";
    else if (isWeight) extra = "node-weight";
    else if (isFinish) extra = "node-finish";
    else if (isStart) extra = "node-start";
    else if (isShortest) extra = "node-shortest-path_f";
    else if (isVisited2) extra = "node_vis_f_2";
    else if (isVisited) extra = "node_vis_f";
    else if (isMid) extra = "node-mid";

    return `node ${extra}`;
  }, [isShortest, isStart, isMid, isFinish, isWall, isWeight, isVisited2, isVisited]);

  return (
    <div
      id={`node-${row}-${col}`}
      className={classNames}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp(row, col)}
      style={{ width: `${nodeSize}px`, height: `${nodeSize}px` }}
    ></div>
  );
};

export default Node;






