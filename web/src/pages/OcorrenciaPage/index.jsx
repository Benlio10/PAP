import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Send as SendIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",

    display: "flex",
    alignItems: "center"
  },

  textInput: {
    minHeight: 200,
    maxHeight: 200
  },

  iconSendButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 4
  }
});

const OcorrenciaPage = () => {
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
                    <Box position="relative">
                      <IconButton
                        className={classes.iconSendButton}
                        color="primary"
                      >
                        <SendIcon />
                      </IconButton>

                      <TextField
                        InputProps={{
                          classes: { input: classes.textInput }
                        }}
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Grid container item xs={12} justify="space-between">
            <Grid item xs={6}>
              <Typography>Datetime</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">Nome</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OcorrenciaPage;
