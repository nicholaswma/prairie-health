import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import data from "./Data/score-visualizer.json";
import Header from "./Components/Header.js";
import PatientSelectForm from "./Components/PatientSelectForm.js";
import { Component } from "react";

function App() {
  return (
    <Box>
      {/* <Header /> */}
      <Typography fontSize={"2rem"} textAlign={"center"} fontWeight={800}>
        Prairie Health
      </Typography>
      <Box paddingLeft={"2em"}>
        <PatientSelectForm />
      </Box>
    </Box>
  );
}

export default App;
