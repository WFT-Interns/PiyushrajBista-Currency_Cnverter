import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { useQuery } from "react-query";
import { instance } from "../../../config/axios.config";

function SelectOptions() {
  const [currencyCode, setCurrencyCode] = useState("");

  const { isLoading, error, data } = useQuery("currentData", () => {
    return instance.get("/latest/USD").then((res) => {
      return res.data;
    });
  });

  return (
    <>
      <FormControl sx={{ width: "200px", marginTop: "80px" }}>
        <InputLabel id="select-base-currency">Select Base Currency</InputLabel>
        <Select
          labelId="select-autowidth-label"
          value={currencyCode}
          label="Select Base Currency"
          onChange={(event) => setCurrencyCode(event.target.value)}
        >
          {data &&
            Object.keys(data.conversion_rates).map((currency) => (
              <MenuItem key={currency} value={currency}>
                {currency}
              </MenuItem>
            ))}
        </Select>
        <Button sx={{ marginTop: "20px" }} variant="contained">
          Submit
        </Button>
      </FormControl>
    </>
  );
}

export default SelectOptions;
