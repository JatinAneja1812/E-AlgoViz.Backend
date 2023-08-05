import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import Speed from "@material-ui/icons/Speed";
import NumbersIcon from "@mui/icons-material/Numbers";
import { styled } from '@mui/material/styles';
function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  // chooseing between the two symbols
  let symbol;
  if (props.title === "Visulaizer Speed") {
    symbol = <Speed style={{ color: "#000" }} />;
  } else if (props.title === "Total Number") {
    symbol = (
      <NumbersIcon style={{ color: "#000" }} />
    );
  }

  const handleChange = (event) => {
    if (event.target.innerText === "") {
      return;
    }
    const num = parseInt(event.target.innerText, 10);
    props.onChange(num);
  };

  const PrettoSlider = styled(Slider)({
    color: 'rgb(7, 101, 133)',
    height: 5,
    '& .PrivateValueLabel-circle-4':{
        borderRadius: "50% 50% 50% 50%",
        marginTop: "12px",
        background: "rgb(7, 101, 133)"
      },
    '& .MuiSlider-thumb': {
        height: 18,
        width: 18,
        top: "10px",
        backgroundColor: '#fff',
        border: '3px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-thumb.Mui-disabled': {
        height: 18,
        width: 18,
        top: "8px",
    },
    '& .MuiSlider-valueLabel': {
        left: "calc(-50% - 4px)"
      }
    
  });

  return (
    <div style={{ display: "flex", alignItems: "center", color: "#000" }}>
      <Typography
        style={{
          color: "#000",
          top: "14px",
          left: "-15px",
          position: "relative",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        {" "}
        {props.title}{" "}
      </Typography>
      <div className="slider_container">
        <Grid container spacing={2} alignItems="center">
          <Grid item>{symbol}</Grid>
          <Grid item xs>
            <PrettoSlider
              defaultValue={props.default}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto" // Display value label at the bottom
              onChangeCommitted={handleChange}
              step={props.step}
              marks={props.marks}
              min={props.min}
              max={props.max}
              // valueLabelDisplay="on"
              disabled={props.disable ? true : props.isDisabled ? true : false}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
