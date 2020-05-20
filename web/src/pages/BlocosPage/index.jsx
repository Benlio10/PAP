import React from "react";
import { Container, Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }
});

const BlocosPage = () => {
  const classes = useStyles();
  const blocos = ["A", "B", "C", "D"];

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <Grid container spacing={4}>
        {blocos.map(bloco => (
          <Grid item xs={6}>
            <Paper>{bloco}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlocosPage;
