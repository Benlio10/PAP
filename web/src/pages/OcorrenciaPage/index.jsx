import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Send as SendIcon,
  Computer as ComputerIcon,
  DesktopAccessDisabled as NoPcIcon
} from "@material-ui/icons";

import Header from "../../components/Header";
import UserContext from "../../context/UserContext";
import api from "../../services/api";
import { displayDateFormat, apiDateFormat } from "../../utils/dateFormat";
import CustomTable from "../../components/CustomTable";
import AlertSnackBar from "../../components/AlertSnackBar";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh"
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
  const location = useLocation();
  const [pc] = useState(location.state);
  const [observacao, setObservacao] = useState("");
  const [loading, setLoading] = useState(false);
  const [hora] = useState(Date.now());
  const [openSuccess, setOpenSuccess] = useState(false);

  const { user } = useContext(UserContext);
  const { id: id_utilizador, nome, apelido } = user;

  // const { id: id_utilizador, nome, apelido } = JSON.parse(
  //   sessionStorage.getItem("session") || localStorage.getItem("session")
  // );

  const handleSubmit = async event => {
    event.preventDefault();

    setLoading(true);

    try {
      await api.post("/avarias", {
        id_pc: pc.id,
        id_utilizador,
        hora: apiDateFormat(hora),
        observacao
      });

      setOpenSuccess(true);
    } catch (error) {}

    setLoading(false);
  };

  return (
    <Box className={classes.container} component="main">
      <Header />
      <Box>
        <Box component={Paper} width="100%" p={3} m="auto">
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                align="center"
                color="primary"
                gutterBottom
              >
                PC_{pc.id}
              </Typography>
            </Grid>

            <Box width="100%" mb={3}>
              <Grid container item xs={12}>
                <Grid container item xs={6}>
                  <Box width="100%" mr={2}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textPrimary"
                      >
                        Mapa
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTable
                        xValue={pc.sala_x}
                        yValue={pc.sala_y}
                        items={[{ x: pc.x, y: pc.y }]}
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
                  <Box width="100%">
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        align="center"
                        color="textPrimary"
                      >
                        Observacão
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Box position="relative">
                        <form onSubmit={handleSubmit}>
                          {loading ? (
                            <CircularProgress
                              className={classes.iconSendButton}
                            />
                          ) : (
                            <IconButton
                              type="submit"
                              className={classes.iconSendButton}
                              color="primary"
                              disabled={loading}
                            >
                              <SendIcon />
                            </IconButton>
                          )}

                          <TextField
                            InputProps={{
                              classes: { input: classes.textInput }
                            }}
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={5}
                            value={observacao}
                            onChange={event =>
                              setObservacao(event.target.value)
                            }
                          />
                        </form>
                      </Box>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Grid container item xs={12} justify="space-between">
              <Grid item xs={6}>
                <Typography variant="h6" color="textPrimary">
                  {displayDateFormat(hora)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  align="right"
                  color="textPrimary"
                >{`${nome} ${apelido}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <AlertSnackBar
        open={openSuccess}
        autoHideDuration={3000}
        setOpen={setOpenSuccess}
        severity="success"
        message="Ocorrencia registada com sucesso"
      />
    </Box>
  );
};

export default OcorrenciaPage;
