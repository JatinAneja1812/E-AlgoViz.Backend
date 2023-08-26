import React, { useEffect, useState } from "react";
import { PathfindingAlgorithmTabWrapper } from "../AlgorithmsTabs.styles";



export default function PathfindigAlgorithmsTab(props) {

    console.log(props.PathfindingAlgorithms)

  return (
    <PathfindingAlgorithmTabWrapper>
      <div class="button-container">
        <button class="Tab_button1" data-target="info1">
          Button 1
        </button>
        <button class="Tab_button1" data-target="info2">
          Button 2
        </button>
        <button class="Tab_button1" data-target="info3">
          Button 3
        </button>
        <button class="Tab_button1" data-target="info4">
          Button 4
        </button>
        <button class="Tab_button1" data-target="info5">
          Button 5
        </button>
        <button class="Tab_button1" data-target="info6">
          Button 6
        </button>
      </div>
      <div class="info-container">
        <div id="info1" class="info">
          Content for Info 1
        </div>
        <div id="info2" class="info">
          Content for Info 2
        </div>
        <div id="info3" class="info">
          Content for Info 3
        </div>
        <div id="info4" class="info">
          Content for Info 4
        </div>
        <div id="info5" class="info">
          Content for Info 5
        </div>
        <div id="info6" class="info">
          Content for Info 6
        </div>
      </div>
    </PathfindingAlgorithmTabWrapper>
  );
}
