import React, { useEffect } from "react";
import { Row, Col } from "antd";
import DiscreteSlider from "../../CustomSlider/PrimeNumberVisualizerSlider/CustomPNVSlider";
import PrimeNumVisToolbarWrapper from "./PrimeNumberVisualizerTools.styles";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { alpha, styled } from '@mui/material/styles';

export default function PrimeNumberVisualizerTools(props) {
 

  const handleStartNumberChange = (event) => {
    const value = parseInt(event.target.value, 10); // Convert input to an integer

    // Check for negative value and if start number is greater than or equal to end number
    if ( value < 0 || value >= parseInt(props.endNumber, 10) ) {
      return; // Don't update the state if the input is invalid
    }

    props.setStartNumber(value);
  };

  const handleEndNumberChange = (event) => {
    const value = parseInt(event.target.value, 10); // Convert input to an integer

    // Check for negative value and if end number is smaller than or equal to start number
    if ( value < 0 ) {
      return; // Don't update the state if the input is invalid
    }

    props.setEndNumber(value);
  };

  useEffect(() => {
    props.setCells(props.getCells(props.startNumber, props.endNumber ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.endNumber, props.startNumber]);

  const handleChange = (event) => {
    props.setChecked(event.target.checked);
    if(event.target.checked === true){
        props.setStartNumber(1);
        props.setEndNumber(100); 
        props.setNumber(100);
    }else{
        props.setStartNumber(1);
        props.setEndNumber(100); 
        props.setNumber(100);
    }
  };

  const ColoredSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#0B7FA0",
      '&:hover': {
        backgroundColor: alpha( "#0B7FA0", theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase': {
        color: "#0B7FA0",
        '&:hover': {
          backgroundColor: alpha( "#0B7FA0", theme.palette.action.hoverOpacity),
        },
      },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
  }));

  return (
    <PrimeNumVisToolbarWrapper style={{ marginTop: "10vh" }}>
      <DiscreteSlider
        onChange={props.onChangeSpeed}
        title="Visulaizer Speed"
        marks={false}
        default={props.sliderSpeed}
        step={1}
        min={10}
        max={100}
        isDisabled={false}
      />

      <Row display="flex" alignitems="center" style={{ marginTop: "26px"}}>
        <Col span={12}>
          <DiscreteSlider
            onChange={props.onChangeValues}
            title="Total Number"
            marks={false}
            default={props.number}
            step={1}
            min={10}
            max={500}
            disable={props.checked}
            isDisabled={props.isDisabled}
          />
        </Col>
        <Col span={2} style={{marginLeft:"14px"}}>
          <ColoredSwitch
            color="default"
            checked={props.checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Col>
        <Col span={4} style={{marginLeft:"14px"}}>
          <TextField
            label="Start Number"
            type="number"
            disabled={!props.checked}
            size="small"
            style={{
                top: "5px"}}
            value={props.startNumber}
            onChange={handleStartNumberChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Col>
        <Col span={4} style={{marginLeft:"14px"}}>
          <TextField
            label="End Number"
            type="number"
            size="small"
            disabled={!props.checked}
            style={{
                top: "5px"}}
            value={props.endNumber}
            onChange={handleEndNumberChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Col>
      </Row>
    </PrimeNumVisToolbarWrapper>
  );
}
