import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";

export const KbdInputPreview = () => {
  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search or type a command"
          inputProps={{ "aria-label": "Search or type a command" }}
        />
        <IconButton sx={{ p: "10px" }} aria-label="microphone">
          <MicNoneIcon />
        </IconButton>
      </Paper>
    </>
  );
};
