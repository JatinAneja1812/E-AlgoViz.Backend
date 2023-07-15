import React, {useEffect} from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AlgorithmDropdown( props ) {
 

  const handleChange = (event) => {
    props.setAlgorithms(event.target.value);
  };

  useEffect(() => {
    if(props.boardCleared){
      props.setAlgorithms("");
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
          value={props.algorithms}
          label="Algorithm"
          onChange={handleChange}
          disabled={props.isRunning ? true : false}
          style={{color:"#ffffff", border: "#ffffff"}}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          placeholder="Select Algorithm"  
        >
          <MenuItem value="">
            <em>Select Algorithms</em>
          </MenuItem>
          <MenuItem value={"Dijkstra"}>Dijkstra</MenuItem>
          <MenuItem value={"A* Search"}>A* Search</MenuItem>
          <MenuItem value={"Greedy B-F Serach"}>Greedy Best-First Serach</MenuItem>
          <MenuItem value={"Breadth-First Search"}>Breadth-First Search </MenuItem>
          <MenuItem value={"BFS-Bidirectional"}>BFS - Bidirectional</MenuItem>
          <MenuItem value={"Depth-First Search"}>Depth-First Search</MenuItem>
          <MenuItem value={"Swarm Algorithm"}>Swarm Algorithm</MenuItem>
          <MenuItem value={"Convergent Swarm"}>Convergent Swarm</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
