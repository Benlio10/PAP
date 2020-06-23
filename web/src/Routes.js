import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BlocosPage from "./pages/BlocosPage";
import SalasPage from "./pages/SalasPage";
import PcsPage from "./pages/PcsPage";
import OcorrenciaPage from "./pages/OcorrenciaPage";
import AvariasPage from "./pages/AvariasPage";
import AvariaPage from "./pages/AvariaPage";
import CriarSalaPage from "./pages/CriarSalaPage";
import AlterarSalaPage from "./pages/AlterarSalaPage";

import { LoggedContext } from "./context/LoggedContext";
import UserContext from "./context/UserContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PublicRoute path="/inicio" component={LandingPage} />
        <PublicRoute path="/blocos" component={BlocosPage} />
        <PublicRoute path="/salas/:id_bloco" component={SalasPage} />
        <PublicRoute path="/pcs/:id_sala" component={PcsPage} />
        <PublicRoute path="/ocorrencia" component={OcorrenciaPage} />

        <PrivateRoute path="/avarias" component={AvariasPage} />
        <PrivateRoute path="/avaria" component={AvariaPage} />
        <PrivateRoute path="/criarsala" component={CriarSalaPage} />
        <PrivateRoute
          path="/alterarsala/:id_sala"
          component={AlterarSalaPage}
        />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const PublicRoute = ({ component: Component, ...rest }) => {
  const { logged } = useContext(LoggedContext);
  const isLogged = logged;

  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  const { logged } = useContext(LoggedContext);

  return (
    <Route
      {...rest}
      render={props =>
        logged && user.isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default Routes;
