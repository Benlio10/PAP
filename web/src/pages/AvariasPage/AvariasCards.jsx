import React from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

import { displayDateFormat } from "../../utils/dateFormat";
import { yellow } from "@material-ui/core/colors";
import { ReportProblemRounded as ReportProblemIcon } from "@material-ui/icons";

const AvariasCards = ({
  totalAvarias,
  page,
  setPage,
  avarias,
  navigateToAvaria
}) => {
  return (
    <Box width="100%">
      {/* {`Total de Paginas: ${totalAvarias} | Pagina Atual: ${page}`} */}
      <Grid container spacing={4}>
        {avarias.map(avaria => (
          <Grid key={avaria.id} item sm={3}>
            <Card style={{ marginTop: "12px" }}>
              <CardHeader
                avatar={<ReportProblemIcon style={{ color: yellow[700] }} />}
                title={`${avaria.designacao + avaria.num_sala} : PC_${
                  avaria.id_pc
                } `}
                subheader={displayDateFormat(avaria.hora)}
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {avaria.observacao}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigateToAvaria(avaria)}
                >
                  Pc Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {!avarias.length && (
          <Grid container justify="center">
            <Typography>Sem ocorrencias registadas</Typography>
          </Grid>
        )}
      </Grid>

      {/* <Pagination
        count={Math.ceil(totalAvarias / 8)}
        page={page}
        onChange={(_event, value) => setPage(value)}
      /> */}
    </Box>
  );
};

export default AvariasCards;
