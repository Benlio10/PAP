import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center"
  },

  paper: {
    padding: 20
  }
});

const SalasPage = () => {
  const classes = useStyles();
  const salas = ["D1", "D2", "D3", "D3", "D3", "D3", "D3"];

  return (
    <Container className={classes.container} component="main">
      <Grid container spacing={2}>
        {salas.map(sala => (
          <Grid item xs>
            <Paper className={classes.paper}>{sala}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SalasPage;
