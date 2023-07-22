import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function SortingAlgorithmDropdown(props) {
  
  const handleChange = (event) => {
    props.setAlgorithm(event.target.value);
  };
  
  useEffect(() => {
    if (props.isDataReset) {
      props.setAlgorithm("");
      props.resetData(false);
    }
    return () => {};
  }, [props]);

  return (
    <div>
      <FormControl size="small" sx={{ m: 1, minWidth: 150 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.algorithm}
          onChange={handleChange}
          disabled={props.isSorting ? true : false}
          style={{
            color: props.isSorting ? "#CCC" : "#FFF",
            border: "#ffffff",
            fontSize: "20px",
            width: "108%",
            paddingLeft: "32px",
            paddingTop: "2px",
            display: "flex",
            left: "5vw",
          }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          placeholder="Select Algorithm"
        >
          <MenuItem value="">
            <em>Select Algorithm</em>
          </MenuItem>
          <ListSubheader>LOGARITHMIC</ListSubheader>
          <MenuItem value={"Quick Sort"}>Quick Sort</MenuItem>
          <MenuItem value={"Merge Sort"}>Merge Sort</MenuItem>
          <MenuItem value={"Heap Sort"}>Heap Sort</MenuItem>
          <MenuItem value={"Shell Sort"}>Shell Sort</MenuItem>
          <ListSubheader>QUADRITIC</ListSubheader>
          <MenuItem value={"Bubble Sort"}>Bubble Sort</MenuItem>
          <MenuItem value={"Selection Sort"}>Selection Sort</MenuItem>
          <MenuItem value={"Insertion Sort"}>Insertion Sort</MenuItem>
          <MenuItem value={"Gnome Sort"}>Gnome Sort</MenuItem>
          <MenuItem value={"Shaker Sort"}>Shaker Sort</MenuItem>
          <MenuItem value={"Odd Even Sort"}>Odd Even Sort</MenuItem>
          <MenuItem value={"Pancake Sort"}>Pancake Sort</MenuItem>
          <ListSubheader>DISTRIBUTION</ListSubheader>
          <MenuItem value={"Radix Sort"}>Radix Sort</MenuItem>
          <ListSubheader>CAMPARIZONE-BASED</ListSubheader>
          <MenuItem value={"Cycle Sort"}>Cycle Sort</MenuItem>
          <MenuItem value={"Bitonic Sort"}>Bitonic Sort</MenuItem>
          <ListSubheader>OTHERS</ListSubheader>
          <MenuItem value={"Tim Sort"}>Tim Sort</MenuItem>
          <MenuItem value={"Cube Sort"}>Cube Sort</MenuItem>
          <MenuItem value={"Bogo Sort"}>Bogo Sort</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
