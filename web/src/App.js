import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Paper,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import { HomeRounded as HomeIcon } from "@material-ui/icons";

import Routes from "./Routes";

import { UserProvider } from "./context/UserContext";
import { LoggedProvider } from "./context/LoggedContext";

import "typeface-roboto";
import "./global.css";

function App() {
  const history = useHistory();

  return (
    <LoggedProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </LoggedProvider>
  );
}

export default App;
