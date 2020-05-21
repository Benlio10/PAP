import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import LoginPage from "./pages/LoginPage";
import BlocosPage from "./pages/BlocosPage";
import SalasPage from "./pages/SalasPage";
import PcsPage from "./pages/PcsPage";
import OcorrenciaPage from "./pages/OcorrenciaPage";
import AvariasPage from "./pages/AvariasPage";
import AvariaPage from "./pages/AvariaPage";
import CriarSalaPage from "./pages/CriarSalaPage";

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
          <Route path="/ocorrencia" component={OcorrenciaPage} />
          <Route path="/avarias" component={AvariasPage} />
          <Route path="/avaria" component={AvariaPage} />
          <Route path="/criarsala" component={CriarSalaPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
