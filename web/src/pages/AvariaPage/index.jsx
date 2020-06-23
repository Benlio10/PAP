import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Box,
  Paper,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Computer as ComputerIcon,
  DesktopAccessDisabled as NoPcIcon
} from "@material-ui/icons";

import Header from "../../components/Header";
import { displayDateFormat } from "../../utils/dateFormat";
import CustomTable from "../../components/CustomTable";
import api from "../../services/api";

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    height: "100vh",

    display: "flex",
    alignItems: "center"
  },

  textTypo: {
    height: 200
  },

  checkbox: {
    position: "absolute",
    right: theme.spacing(2),
    top: theme.spacing(2),
    zIndex: 4
  }
}));

const AvariaPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const [avaria] = useState(location.state);
  const [checked, setChecked] = useState(false);
  console.log(avaria);

  useEffect(() => () => {
    const fetchData = async () =>
      await api.put(`/avaria/${avaria.id}`, { resolvido: checked });
    fetchData();
  });

  return (
    <>
      <Header />
      <Container className={classes.container} component="main" maxWidth="md">
        <Box component={Paper} width="100%" p={3} position="relative">
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center" paragraph>
                PC_{avaria.id_pc}
              </Typography>
              <FormControlLabel
                className={classes.checkbox}
                control={
                  <Checkbox
                    checked={checked}
                    onChange={event => setChecked(event.target.checked)}
                    color="primary"
                  />
                }
                label="RESOLVIDO"
              />
            </Grid>
            <Box width="100%" mb={3}>
              <Grid container item xs={12}>
                <Grid container item xs={6}>
                  <Box width="100%" mr={2}>
                    <Grid item xs={12}>
                      <Typography align="center">Mapa</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTable
                        xValue={avaria.sala_x}
                        yValue={avaria.sala_y}
                        items={[{ x: avaria.pc_x, y: avaria.pc_y }]}
                        onClick={{ type: "noclick" }}
                        falseComponent={props => (
                          <NoPcIcon
                            {...props}
                            color="disabled"
                            fontSize="small"
                          />
                        )}
                      >
                        {props => (
                          <ComputerIcon
                            {...props}
                            color="primary"
                            fontSize="small"
                          />
                        )}
                      </CustomTable>
                    </Grid>
                  </Box>
                </Grid>
                <Grid container item xs={6}>
                  <Box width="100%" ml={2}>
                    <Grid item xs={12}>
                      <Typography align="center">Observacão</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box component={Paper} height={200}>
                        <Typography
                          className={classes.textTypo}
                          style={{ padding: 14 }}
                        >
                          {avaria.observacao}
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
              <Typography>{displayDateFormat(avaria.hora)}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="right">
                {avaria.utilzador_nome + " " + avaria.utilizador_apelido}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AvariaPage;
