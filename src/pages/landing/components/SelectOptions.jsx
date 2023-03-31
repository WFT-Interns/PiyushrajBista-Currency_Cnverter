import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

function SelectOptions() {
  return (
    <>
      <FormControl sx={{ width: "200px", marginRight: "80px" }}>
        <InputLabel id="select-base-currency">Select Base Currency</InputLabel>
        <Select labelId="select-autowidth-label" label="Select Base Cuurency">
          <MenuItem></MenuItem>
        </Select>
        <Button sx={{ marginTop: "20px" }} variant="contained">
          Submit
        </Button>
      </FormControl>
    </>
  );
}

export default SelectOptions;
