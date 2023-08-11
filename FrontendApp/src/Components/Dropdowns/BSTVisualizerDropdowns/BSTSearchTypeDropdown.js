import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BSTSearchTypeEnum } from "../../../Enums/BSTSearchTypeEnum";

export default function BSTSearchTypeDropdown(props) {
  const handleChange = (event) => {
    props.setTraversalOrder(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 0.5, minWidth: 140 }}>
        <Select
          size="small"
          value={props.traversalOrder}
          onChange={handleChange}
          style={{
            color: "#FFF",
            border: "#FFF",
            width: "100%",
            marginTop: "1px",
            left: "15px",
            height: "46px",
          }}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          placeholder="Search order"
        >
          <MenuItem value={BSTSearchTypeEnum.PRE_ORDER.toString()}>Pre-Order Search</MenuItem>
          <MenuItem value={BSTSearchTypeEnum.IN_ORDER.toString()}>In-Order Search</MenuItem>
          <MenuItem value={BSTSearchTypeEnum.POST_ORDER.toString()}>Post-Order Search</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
