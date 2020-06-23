import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Box,
  IconButton,
  CircularProgress,
  Fab,
  Typography,
  Badge
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Computer as ComputerIcon,
  DesktopAccessDisabled as NoPcIcon,
  BuildRounded as ChangeIcon
} from "@material-ui/icons";

import Header from "../../components/Header";
import api from "../../services/api";
import CustomTable from "../../components/CustomTable";
import UserContext from "../../context/UserContext";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      maxWidth: theme.breakpoints.values.sm
    }
  },

  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

const PcsPage = () => {
  const classes = useStyles();
  const [pcs, setPcs] = useState([]);
  const [indexXY, setIndexXY] = useState({ x: 0, y: 0 });
  const history = useHistory();
  const { id_sala } = useParams();
  const [loading, setLoading] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await api.get(`/sala/${id_sala}`).then(response =>
        setIndexXY({
          x: response.data.x || 0,
          y: response.data.y || 0
        })
      );

      await api.get(`/pcs/${id_sala}`).then(response => setPcs(response.data));
      setLoading(false);
    };

    fetchData();
  }, [id_sala]);

  const navigateToOcorrencia = pcState => history.push("/ocorrencia", pcState);

  return (
    <Box className={classes.container} component="main">
      <Header />
      {loading && <CircularProgress size={150} />}
      {!loading && (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          maxWidth="md"
        >
          <Typography variant="h3" color="primary" gutterBottom>
            Escolha o computador com defeito!
          </Typography>
          <Box component={Paper} width="100%" m="auto">
            <CustomTable
              xValue={indexXY.x}
              yValue={indexXY.y}
              items={pcs}
              falseComponent={props => (
                <NoPcIcon {...props} color="disabled" fontSize="small" />
              )}
              onClick={{ type: "navigate", handle: navigateToOcorrencia }}
            >
              {props => (
                <IconButton {...props}>
                  <Badge color="error" variant="dot">
                    <ComputerIcon color="primary" fontSize="large" />
                  </Badge>
                </IconButton>
              )}
            </CustomTable>
          </Box>
          {user.isAdmin && (
            <Fab
              className={classes.fab}
              onClick={() => history.push(`/alterarsala/${id_sala}`)}
            >
              <ChangeIcon color="primary" />
            </Fab>
          )}
        </Container>
      )}
    </Box>
  );
};

export default PcsPage;
