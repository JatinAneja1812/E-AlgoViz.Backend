import React from "react";
import Cell from "./cell";
import "./Cells.css";
export default function Cells(props) {
  return (
    <div className="Cells">
      {props.cells.map((cell, cellidx) => {
        return <Cell key={cellidx} cell={cell} />;
      })}
    </div>
  );
}
