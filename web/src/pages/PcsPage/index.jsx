import React from "react";
import { Container, Paper, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center"
  },

  paper: {
    padding: 24
  }
});

const PcsPage = () => {
  const classes = useStyles();
  const pcs = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const x = 6;
  console.log(pcs);
  return (
    <>
      <Container className={classes.container} component="main" maxWidth="sm">
        <Grid container>
          {pcs.map(pc => (
            <Grid item xs={12 / x}>
              <Paper className={classes.paper}>PC</Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default PcsPage;
