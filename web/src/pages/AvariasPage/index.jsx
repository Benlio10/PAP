import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { ReportProblemRounded as ReportProblemIcon } from "@material-ui/icons";
import { yellow } from "@material-ui/core/colors";

const AvariasPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box width="100%">
        <Grid container spacing={4}>
          <Grid item sm={3}>
            <Card>
              <CardHeader
                avatar={<ReportProblemIcon style={{ color: yellow[700] }} />}
                title="Aviso"
                subheader="Data"
              />

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Observacao
                </Typography>
              </CardContent>

              <CardActions>
                <Button variant="contained" color="primary" fullWidth>
                  Pc Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AvariasPage;
