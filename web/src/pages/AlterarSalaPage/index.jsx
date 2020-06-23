import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Paper,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
  Button,
  Typography,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Computer as ComputerIcon } from "@material-ui/icons";

import Header from "../../components/Header";
import api from "../../services/api";
import CustomTable from "../../components/CustomTable";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",

    display: "flex",
    alignItems: "center"
  }
});

const AlterarSalaPage = () => {
  const classes = useStyles();
  const { id_sala } = useParams();
  const [bloco, setBloco] = useState(null);
  const [numSala, setNumSala] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [newPcs, setNewPcs] = useState([]);

  useEffect(() => {
    api.get(`/sala/${id_sala}`).then(response => {
      setNumSala(response.data.num_sala);
      setBloco(response.data.id_edificio.toString());
      setX(response.data.x || 0);
      setY(response.data.y || 0);
    });

    api.get(`/pcs/${id_sala}`).then(response => setNewPcs(response.data));
  }, [id_sala]);

  const handleSubmitSala = event => {
    event.preventDefault();

    api.put(`/sala/${id_sala}`, {
      num_sala: numSala,
      id_edificio: parseInt(bloco),
      x: x || null,
      y: y || null
    });
  };

  const handleSubmitPcs = async event => {
    event.preventDefault();

    for (let newPc of newPcs) {
      await api.post("/pcs", { id_sala, x: newPc.x, y: newPc.y });
    }
  };

  const handleTrueClick = ({ x, y }) => {
    setNewPcs([...newPcs, { x, y }]);
  };

  const handleFalseClick = ({ x, y }) => {
    setNewPcs(newPcs.filter(newPc => newPc.x !== x || newPc.y !== y));
  };

  return (
    <>
      <Header />
      <Container className={classes.container} component="main" maxWidth="md">
        <Box component={Paper} width="100%" p={3}>
          <form onSubmit={handleSubmitSala} style={{ marginBottom: 24 }}>
            <Grid container>
              <Grid container item xs={3}>
                <Grid item xs={12}>
                  <RadioGroupComponent
                    blocoState={{ bloco: bloco, setBloco: setBloco }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={1}>
                <Divider orientation="vertical" />
              </Grid>
              <Grid container item xs={8}>
                <Grid item xs={12}>
                  <Box>
                    <TextField
                      label="Num_sala"
                      type="number"
                      required
                      InputProps={{ inputProps: { min: 0 } }}
                      value={numSala}
                      onChange={event => setNumSala(event.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="x"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    value={x}
                    onChange={event => setX(event.target.value)}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="y"
                    type="number"
                    InputProps={{ inputProps: { min: 0 } }}
                    value={y}
                    onChange={event => setY(event.target.value)}
                  />
                </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{ marginTop: 8 }}
                >
                  <Typography variant="button">Alterar</Typography>
                </Button>
              </Grid>
            </Grid>
          </form>

          <form onSubmit={handleSubmitPcs}>
            <Grid container>
              <Grid item xs={12}>
                <CustomTable
                  xValue={x}
                  yValue={y}
                  items={newPcs}
                  onClick={{ type: "toggle", handle: handleFalseClick }}
                  onFalseClick={{ type: "toggle", handle: handleTrueClick }}
                  falseComponent={props => (
                    <Button {...props} variant="contained" color="primary">
                      <Typography>+</Typography>
                    </Button>
                  )}
                >
                  {props => (
                    <IconButton {...props}>
                      <ComputerIcon color="primary" fontSize="large" />
                    </IconButton>
                  )}
                </CustomTable>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 14 }}
              >
                <Typography variant="button">Adicionar os Pcs</Typography>
              </Button>
            </Grid>
          </form>
        </Box>
      </Container>
    </>
  );
};

const RadioGroupComponent = ({ blocoState: { bloco, setBloco } }) => {
  const [blocos, setBlocos] = useState([]);

  useEffect(() => {
    api.get("/blocos").then(response => setBlocos(response.data));
  }, []);

  return (
    <FormControl component="fieldset" required>
      <FormLabel component="legend">Bloco</FormLabel>
      <RadioGroup
        aria-label="bloco"
        name="blocos"
        value={bloco}
        onChange={event => setBloco(event.target.value)}
      >
        {blocos.map(bloco => (
          <FormControlLabel
            key={bloco.id}
            value={bloco.id.toString()}
            control={<Radio color="primary" required />}
            label={bloco.designacao}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default AlterarSalaPage;
