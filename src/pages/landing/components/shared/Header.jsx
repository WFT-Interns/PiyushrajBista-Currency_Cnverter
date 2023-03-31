import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: "1000px" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 10 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Currency Converter
            </Typography>
            <Button color="inherit">Hello! John Doe</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
