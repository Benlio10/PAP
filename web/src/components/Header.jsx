import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import { HomeRounded as HomeIcon } from "@material-ui/icons";

const Header = ({ position }) => {
  const history = useHistory();
  console.log(position);

  return (
    <AppBar position={!position ? "static" : position}>
      <Toolbar>
        <IconButton onClick={() => history.push("/inicio")}>
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
