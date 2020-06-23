import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Paper,
  Grid,
  Button,
  Typography,
  CircularProgress,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../../components/Header";
import api from "../../services/api";

const useStyles = makeStyles({
  container: {
    height: "100vh"
  },

  paper: {
    // padding: 75
    width: "100%",
    height: "25vh"
  }
});

const BlocosPage = () => {
  const classes = useStyles();
  const [blocos, setBlocos] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("/blocos").then(response => {
      setBlocos(response.data);
      setLoading(false);
    });
  }, []);

  const navigateToSalas = id => history.push(`/salas/${id}`);

  return (
    <Box className={classes.container} component="main">
      <Header />
      {loading && <CircularProgress size={150} />}
      {!loading && (
        <Container style={{ height: "92%" }} maxWidth="sm">
          <Typography variant="h3" color="primary" align="center" gutterBottom>
            Escolha o Bloco
          </Typography>
          <Grid container spacing={4}>
            {blocos.map(bloco => (
              <Grid key={bloco.id} item sm={6} xs={12}>
                <Button
                  className={classes.paper}
                  variant="outlined"
                  color="primary"
                  onClick={() => navigateToSalas(bloco.id)}
                >
                  <Typography variant="button">{bloco.designacao}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default BlocosPage;
