import React, { useContext } from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  Fab,
  Box,
  Paper
} from "@material-ui/core";
import { SupervisorAccountRounded as AdminIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import UserContext from "../../context/UserContext";

import logimage from "../../assets/logimage.png";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh"
  },
  fab: {
    position: "absolute",
    left: theme.spacing(2),
    bottom: theme.spacing(2),
    zIndex: 4
  }
}));

const LandingPage = ({ history }) => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return (
    <Box className={classes.container} component="main">
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12}>
          <Header position="fixed" />
        </Grid>
        <Grid
          container
          item
          xs={12}
          style={{ height: "100%" }}
          justify="center"
        >
          <Grid
            container
            item
            xs={6}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="h4" gutterBottom>
              Registe uma ocorrência na sua sala!
            </Typography>
            <Box component={Paper} p={24} borderRadius={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/blocos")}
              >
                <Typography variant="button">Registar Ocorrencia</Typography>
              </Button>
            </Box>
          </Grid>

          <Grid container item xs={6} justify="center" alignContent="center">
            <img src={logimage} width={425} />
          </Grid>
        </Grid>
      </Grid>

      {user.isAdmin ? (
        <Fab
          className={classes.fab}
          onClick={() => history.push("/avarias")}
          variant="extended"
        >
          <AdminIcon color="primary" />
          <Typography color="primary" style={{ marginLeft: "12px" }}>
            Admin
          </Typography>
        </Fab>
      ) : null}
    </Box>
  );
};

export default LandingPage;
