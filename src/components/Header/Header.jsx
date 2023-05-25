import { Typography, Box } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="black"
        fontWeight="bold"
        sx={{ mb: "3px" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color="black">
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
