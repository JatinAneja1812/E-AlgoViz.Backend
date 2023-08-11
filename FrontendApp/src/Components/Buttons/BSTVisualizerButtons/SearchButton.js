import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

export default function SearchNodeButton(props) {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      style={{
        display: "flex",
        position: " relative",
        marginLeft: "32px"
      }}
    >
      <FormControl sx={{ m: 1, width: "22vh", background: "#fff", borderRadius: "5px" }} variant="outlined">
        <OutlinedInput
          type="number"
          size="small"
          id="userSearchInput"
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          placeholder="Enter Search Number"
        />
      </FormControl>
      <Button
        sx={{
          fontSize: "12px",
          padding: "4px 8px",
          background: "rgb(7, 101, 133)",
          width: "11vw",
          height: "5vh",
          right: "14px",
          color: "#FFF"
        }}
        variant="contained"
        onClick={props.handleNodeSearch}
        startIcon={
          <SearchIcon sx={{ width: 28, height: 28, fontSize: "medium" }} />
        }
      >
        Search Element
      </Button>
    </Stack>
  );
}
