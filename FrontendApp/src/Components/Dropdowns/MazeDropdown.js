import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MazeDropdown(props) {
  const [maze, setMaze] = useState("");

  const handleChange = (event) => {
    setMaze(event.target.value);
    props.visualizeMaze(event.target.value);
  };

  useEffect(() => {
    if(props.boardCleared){
      setMaze("");
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
          value={maze}
          label="Algorithm"
          onChange={handleChange}
          style={{color:"#ffffff", border: "#ffffff"}}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          
        >
          <MenuItem value="">
            <em>Mazes</em>
          </MenuItem>
          <MenuItem value={"Recursive Division"}>Recursive Division</MenuItem>
          <MenuItem value={"Vertical Maze"}>Vertical Maze</MenuItem>
          <MenuItem value={"Horizontal Maze"}>Horizontal Maze</MenuItem>
          <MenuItem value={"Resursive Backtracking"}>Resursive Backtracking </MenuItem>
          <MenuItem value={"Basic Random maze"}>Basic Random maze</MenuItem>
          <MenuItem value={"Simple stair"}>Simple stair</MenuItem>
          <MenuItem value={"Prim Maze"}>Prim Maze</MenuItem>
          <MenuItem value={"Spiral Maze"}>Spiral Maze</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
