import React from "react";
import { Box, Button } from "@material-ui/core";
import MaterialTable from "material-table";

import { displayDateFormat } from "../../utils/dateFormat";
import tableIcons from "./materialTableIcons";

const AvariasTable = ({ avarias, navigateToAvaria }) => {
  const tableData = () =>
    avarias.map(avaria => {
      return {
        id: avaria.id_pc,
        sala: avaria.designacao + avaria.num_sala,
        hora: displayDateFormat(avaria.hora),
        observacao: avaria.observacao,
        avaria
      };
    });

  return (
    <Box width="100%">
      <MaterialTable
        icons={tableIcons}
        title="Avarias"
        columns={[
          { title: "Id", field: "id" },
          { title: "Sala", field: "sala" },
          { title: "Hora", field: "hora" },
          { title: "Observacao", field: "observacao" },
          {
            title: "Details",
            field: "details",
            render: rowData => (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigateToAvaria(rowData.avaria)}
              >
                Pc Details
              </Button>
            )
          }
        ]}
        data={tableData()}
      />
    </Box>
  );
};

export default AvariasTable;
