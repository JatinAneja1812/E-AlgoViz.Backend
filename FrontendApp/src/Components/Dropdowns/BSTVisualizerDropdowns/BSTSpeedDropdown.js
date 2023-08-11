import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BSTVisualizerSpeedEnum } from "../../../Enums/BSTVisualizerSpeed";

export default function BSTSpeedDropdown( props ) {

  const handleChange = (event) => {
    props.setSpeed(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0.5, minWidth: 140 }}>
        <Select
          size="small"
          value={props.speed}
          onChange={handleChange}
          style={{ color:"#FFF", border: "#FFF", width: "100%", marginTop: "1px", height: "46px"}}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          placeholder="Speed"  
        >
          <MenuItem value={BSTVisualizerSpeedEnum.FASTEST}>Fastest</MenuItem>
          <MenuItem value={BSTVisualizerSpeedEnum.FAST}>Fast</MenuItem>
          <MenuItem value={BSTVisualizerSpeedEnum.MEDIUM}>Medium</MenuItem>
          <MenuItem value={BSTVisualizerSpeedEnum.SLOW}>Slow</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
