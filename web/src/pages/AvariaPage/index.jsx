import React from "react";
import { Container, Box, Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",

    display: "flex",
    alignItems: "center"
  },

  textTypo: {
    height: 200
  }
});

const AvariaPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main" maxWidth="md">
      <Box component={Paper} width="100%" p={3}>
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center" paragraph>
              PC_ID
            </Typography>
          </Grid>
          <Box width="100%" mb={3}>
            <Grid container item xs={12}>
              <Grid container item xs={6}>
                <Box width="100%">
                  <Grid item xs={12}>
                    <Typography align="center">Mapa</Typography>
                  </Grid>
                </Box>
              </Grid>
              <Grid container item xs={6}>
                <Box width="100%">
                  <Grid item xs={12}>
                    <Typography align="center">Observacao</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box component={Paper} height={200}>
                      <Typography
                        classeName={classes.textTypo}
                        style={{ padding: 14 }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloribus nihil odio alias inventore maiores nostrum!
                        Cupiditate suscipit sunt nulla a, asperiores
                        reprehenderit tempore impedit accusamus adipisci atque
                        molestias? Facere, optio!
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid container item xs={12} justify="space-between">
          <Grid item xs={6}>
            <Typography>Datetime</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right">Nome</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AvariaPage;
