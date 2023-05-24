import React from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";

import FlexBetween from "components/CustomBoxs/FlexBetween";

import { useDispatch } from "react-redux";
import { setLogout } from "redux/global";

const NavBar = ({ setIsSideBarOpen }) => {
  const dispatch = useDispatch();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "antiquewhite", color: "black", padding: "0" }}
    >
      <Toolbar>
        <FlexBetween width="100%">
          <IconButton
            onClick={() => setIsSideBarOpen((prev) => !prev)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {" "}
            <Menu />
          </IconButton>
          <Button onClick={() => dispatch(setLogout())} color="inherit">
            Logout
          </Button>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
