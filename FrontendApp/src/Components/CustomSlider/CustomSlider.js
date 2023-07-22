import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Speed from "@material-ui/icons/Speed";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import Typography from "@material-ui/core/Typography";
import "./CustomSlider.css";

export default function CustomSlider(props) {
  const min = props.className === "speed" ? 1 : 1;
  const max = props.className === "speed" ? 100 : 50;
  const [value, setValue] = useState(
    props.className === "speed" ? props.speed : props.size
  );

  const handleSliderChange = (event, newValue) => {
    props.className === "speed"
      ? props.handleSpeed(newValue)
      : props.handleSize(newValue);
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const val = event.target.value;
    // ensure value is number
    if (!isNaN(val)) {
      props.className === "speed"
        ? props.handleSpeed(val)
        : props.handleSize(val);
      setValue(Number(val));
    }
  };

  const handleBlur = () => {
    if (value < min) {
      props.className === "speed"
        ? props.handleSpeed(min)
        : props.handleSize(min);
      setValue(min);
    } else if (value > max) {
      props.className === "speed"
        ? props.handleSpeed(max)
        : props.handleSize(max);
      setValue(max);
    }
  };

  // change symbol color if disabled
  let sliderColor = "#076585";
  if (props.sorting === true) {
    sliderColor = "grey";
  } else {
    sliderColor = "#000";
  }

  // chooseing between the two symbols
  let symbol;
  if (props.className === "speed") {
    symbol = <Speed style={{ color: sliderColor }} />;
  } else if (props.className === "size") {
    symbol = (
      <StraightenOutlinedIcon
        style={{ color: "#000", transform: "rotate(-45deg)" }}
      />
    );
  }

  const title = () => {
    var sentence;
    if (props.className === "speed") {
      sentence = "Swap Speed - " + props.speed + " ms";
    } else if (props.className === "size") {
      sentence = "Array Size - " + props.size + " Blocks";
    }
    return sentence;
  };

  // Update the value state when props.speed or props.size changes
  useEffect(() => {
    setValue(props.className === "speed" ? props.speed : props.size);
  }, [props.speed, props.size, props.className]);

  return (
    <div style={{ display: "flex", alignItems: "center", color: sliderColor }}>
      <Typography
        style={{
          color: sliderColor,
          top: "14px",
          left: "-15px",
          position: "relative",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        {" "}
        {title()}{" "}
      </Typography>
      <div className="slider_container">
        <Grid container spacing={1} alignItems="center">
          <Grid item>{symbol}</Grid>
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              max={props.max}
              min={props.min}
              disabled={props.sorting}
            />
          </Grid>
          <Grid item>
            <Input
              value={value}
              margin="dense"
              onChange={handleInputChange}
              onBlur={handleBlur}
              disabled={props.sorting}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
