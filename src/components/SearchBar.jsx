import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ onSearch }) {
  return (
    <TextField
      fullWidth
      label="Search by name"
      variant="outlined"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
