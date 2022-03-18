import { Box } from "@mui/system";
import { useState } from "react";
import { Typography } from "@mui/material";
import data from "./Data/score-visualizer.json";
import Header from "./Components/Header.js";
import PatientSelectForm from "./Components/PatientSelectForm.js";
import { Component } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <Box>
      {/* <Header /> */}
      <Typography fontSize={"2rem"} textAlign={"center"} fontWeight={800}>
        Prairie Health
      </Typography>
      <Box padding={"2em"}>
        <PatientSelectForm selected={selected} setSelected={setSelected} />
      </Box>
    </Box>
  );
}

export default App;
