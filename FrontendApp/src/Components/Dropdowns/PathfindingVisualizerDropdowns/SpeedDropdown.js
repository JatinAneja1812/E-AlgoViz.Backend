import React, {useEffect, useState} from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SpeedDropdown( props ) {

  const [speed, setSpeed] = useState("Fast");

  const handleChange = (event) => {
    setSpeed(event.target.value);
    props.setVisualizerSpeed(event.target.value);
  };

  useEffect(() => {
    if(props.boardCleared){
        setSpeed("Fast");
        props.setBoardClear(false);
    }
    return () => {};
  },[props])

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 0.5, minWidth: 120 }}>

        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={speed}
          label="Speed"
          onChange={handleChange}
          style={{color:"#ffffff", border: "#ffffff"}}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          placeholder="Speed"  
        >
          <MenuItem value={"Fastest"}>Fastest</MenuItem>
          <MenuItem value={"Fast"}>Fast</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Slow"}>Slow</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
