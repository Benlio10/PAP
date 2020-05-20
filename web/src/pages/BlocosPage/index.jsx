import React from "react";
import { Container, Paper, Grid, Typography } from "@material-ui/core";

const BlocosPage = () => {
  const blocos = ["A", "B", "C", "D"];

  return (
    <Container component="main" maxWidth="xs">
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
