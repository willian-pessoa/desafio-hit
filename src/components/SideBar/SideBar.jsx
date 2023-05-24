import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Drawer,
  Typography,
  List,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  HomeOutlined,
  Label,
  ChevronLeft,
  ChevronRightOutlined,
} from "@mui/icons-material";

import FlexBetween from "components/CustomBoxs/FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Tickets",
    icon: <Label />,
  },
];

const SideBar = ({ isSideBarOpen, isNonMobile, setIsSideBarOpen }) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSideBarOpen && (
        <Drawer
          open={isSideBarOpen}
          variant="persistent"
          anchor="left"
          sx={{
            width: "250px",
            "& .MuiDrawer-paper": {
              color: "black",
              backgroundColor: "#feecd3",
              boxSizing: "border-box",
              borderWidth: "2px",
              width: "250px",
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography fontSize="1.1rem" fontWeight="bold">
                    DESAFIO HIT
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSideBarOpen((prev) => !prev)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? "#f0c284" : "transparent",
                        color: "black",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color: "black",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
