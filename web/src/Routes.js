import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import LoginPage from "./pages/LoginPage";
import BlocosPage from "./pages/BlocosPage";
import SalasPage from "./pages/SalasPage";
import PcsPage from "./pages/PcsPage";
import AvariasPage from "./pages/AvariasPage";

const Routes = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/blocos" component={BlocosPage} />
          <Route path="/salas" component={SalasPage} />
          <Route path="/pcs" component={PcsPage} />
          <Route path="/avarias" component={AvariasPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
