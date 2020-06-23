import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box
} from "@material-ui/core";

import Header from "../../components/Header";
import api from "../../services/api";
import AvariasCards from "./AvariasCards";
import AvariasTable from "./AvariasTable";

const AvariasPage = () => {
  const [avarias, setAvarias] = useState([]);
  const [page, setPage] = useState(1);
  const [totalAvarias, setTotalAvarias] = useState(0);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [selectValue, setSelectValue] = useState("cards");

  useEffect(() => {
    setLoading(true);
    api.get("/avarias", { params: { page } }).then(response => {
      setAvarias(response.data);
      setTotalAvarias(response.headers["x-total-count"]);
      setLoading(false);
    });
  }, [page]);

  const navigateToAvaria = avariaState => {
    history.push("/avaria", avariaState);
  };

  return (
    <Box component="main" height="100%">
      <Header />
      <Container maxWidth="md" style={{ height: "100%" }}>
        {loading && <CircularProgress size={150} />}
        {!loading && (
          <>
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel children="Display" />
              <Select
                variant="filled"
                value={selectValue}
                onChange={event => setSelectValue(event.target.value)}
              >
                <MenuItem value="cards">Cards</MenuItem>
                <MenuItem value="table">Table</MenuItem>
              </Select>
            </FormControl>
            <>
              {selectValue === "cards" ? (
                <AvariasCards
                  totalAvarias={totalAvarias}
                  page={page}
                  setPage={setPage}
                  avarias={avarias}
                  navigateToAvaria={navigateToAvaria}
                />
              ) : selectValue === "table" ? (
                <AvariasTable
                  avarias={avarias}
                  navigateToAvaria={navigateToAvaria}
                />
              ) : null}
            </>
          </>
        )}
      </Container>
    </Box>
  );
};

export default AvariasPage;
