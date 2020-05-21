import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh"

    // display: "flex",
    // alignItems: "center"
  }
});

const CriarSalaPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} component="main" maxWidth="md">
      <Box component={Paper} width="100%" p={3}>
        <Grid container>
          <Grid container item xs={3}>
            <Grid item xs={12}>
              <RadioGroupComponent />
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Divider orientation="vertical" />
          </Grid>
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <Box>
                <TextField label="Num_sala" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <TextField label="x" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="y" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const RadioGroupComponent = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Bloco</FormLabel>
      <RadioGroup aria-label="bloco" name="blocos">
        <FormControlLabel value="A" control={<Radio />} label="A" />
        <FormControlLabel value="B" control={<Radio />} label="B" />
        <FormControlLabel value="C" control={<Radio />} label="C" />
        <FormControlLabel value="D" control={<Radio />} label="D" />
      </RadioGroup>
    </FormControl>
  );
};

export default CriarSalaPage;
