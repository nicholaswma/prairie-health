import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <div>
      <AppBar>
        <Typography fontSize={"2rem"} textAlign={"center"} fontWeight={800}>
          Prairie Health
        </Typography>
      </AppBar>
    </div>
  );
}

export default Header;
