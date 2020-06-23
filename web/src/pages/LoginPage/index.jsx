import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Link,
  Box,
  Paper,
  Checkbox,
  CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SupervisorAccountRounded as SuperVisorIcon } from "@material-ui/icons";

import UserContext from "../../context/UserContext";
import AlertSnackBar from "../../components/AlertSnackBar";
import api from "../../services/api";
import { LoggedContext } from "../../context/LoggedContext";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",

    display: "flex",
    alignItems: "center"
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [n_processo, setNProcesso] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const { dispatch: dispatchUser } = useContext(UserContext);
  const { logged, dispatch: dispatchLogged } = useContext(LoggedContext);

  useEffect(() => {
    if (logged) history.push("/inicio");
  });

  const handleLogin = async event => {
    event.preventDefault();

    setLoading(true);
    try {
      const response = await api.post("/session", { n_processo, password });

      let sessionObj = {
        ...response.data,
        remember: remember
      };

      // remember
      //   ? localStorage.setItem("session", JSON.stringify(sessionObj))
      //   : sessionStorage.setItem("session", JSON.stringify(sessionObj));

      dispatchUser({
        type: "login",
        payload: {
          id: sessionObj.id,
          nome: sessionObj.nome,
          apelido: sessionObj.apelido,
          isAdmin: remember
        }
      });

      dispatchLogged({ type: "logged" });

      history.push("/inicio");
    } catch (error) {
      alert(error);
      setOpenAlert(true);
      setLoading(false);
    }
  };

  return (
    <Container className={classes.container} component="main" maxWidth="sm">
      <Box
        className={classes.paper}
        component={Paper}
        width="100%"
        p={3}
        border={2}
        borderRadius={8}
      >
        <Avatar className={classes.avatar}>
          <SuperVisorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="n_processo"
            label="Numero Processo"
            name="n_processo"
            autoFocus
            value={n_processo}
            onChange={event => setNProcesso(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={remember}
                onChange={event => setRemember(event.target.checked)}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {loading && <CircularProgress />}
            {!loading && <Typography variant="button">Login</Typography>}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>

      <AlertSnackBar
        open={openAlert}
        autoHideDuration={3000}
        setOpen={setOpenAlert}
        severity="error"
        message="Erro de credenciais"
      />
    </Container>
  );
};

export default LoginPage;
