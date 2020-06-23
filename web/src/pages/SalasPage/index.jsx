import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Button,
  CircularProgress,
  Fab,
  Typography,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddRounded as AddIcon } from "@material-ui/icons";

import Header from "../../components/Header";
import api from "../../services/api";
import UserContext from "../../context/UserContext";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    // justifyContent: "center"
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const SalasPage = () => {
  const classes = useStyles();
  const [salas, setSalas] = useState([]);
  const history = useHistory();
  const { id_bloco } = useParams();
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    api.get(`/salas/${id_bloco}`).then(response => {
      setSalas(response.data);
      setLoading(false);
    });
  }, [id_bloco]);

  const navigateToPcs = id => history.push(`/pcs/${id}`);

  return (
    <Box className={classes.container} component="main">
      <Header />
      {loading && <CircularProgress size={150} />}
      {!loading && (
        <Container className={classes.container} component="main" maxWidth="md">
          <Typography variant="h3" color="primary" gutterBottom>
            Escolha a sala
          </Typography>
          <Grid container spacing={2} justify="center">
            {salas.length ? (
              salas.map(sala => (
                <Grid key={sala.id} item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigateToPcs(sala.id)}
                  >
                    <Typography>{sala.designacao + sala.num_sala}</Typography>
                  </Button>
                </Grid>
              ))
            ) : (
              <Typography>Sem Salas</Typography>
            )}
          </Grid>

          {user.isAdmin && (
            <Fab
              className={classes.fab}
              onClick={() => history.push("/criarsala")}
            >
              <AddIcon fontSize="large" color="primary" />
            </Fab>
          )}
        </Container>
      )}
    </Box>
  );
};

export default SalasPage;
