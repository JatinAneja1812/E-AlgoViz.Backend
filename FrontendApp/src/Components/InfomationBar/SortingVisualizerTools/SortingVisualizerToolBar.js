import React from "react";
import SortingVisToolbarWrapper from "./SortingVisualizerToolBar.styles";
import CustomSlider from "../../CustomSlider/CustomSlider";

export default function SortingVisToolbar(props) {
  return (
    <SortingVisToolbarWrapper>
      <div className="changes">
        <div className="sliders">
          <div className="speedSlider">
            <CustomSlider
              className="speed"
              sliderVal={props.speed}
              min={1}
              max={100}
              speed={props.speed}
              handleSpeed={props.handleSpeed}
              sorting={props.sorting}
            />
          </div>
          <div style={{width: "10vh"}}/>
          <div className="sizeSlider">
            <CustomSlider
              className="size"
              sliderVal={props.size}
              min={5}
              max={100}
              size={props.size}
              handleSize={props.handleSize}
              sorting={props.sorting}
            />
          </div>
        </div>
      </div>
    </SortingVisToolbarWrapper>
  );
}
