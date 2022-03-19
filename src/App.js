import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import data from "./Data/score-visualizer.json";
import dummy from "./Data/dummy.json";
import Header from "./Components/Header.js";
import PatientSelectForm from "./Components/PatientSelectForm.js";
import MyResponsiveChart from "./Components/MyResponsiveChart.js";
import { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

function App() {
  const [selected, setSelected] = useState("");
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const sortDisplayData = () => {
      let returnData = [];
      let gad7 = [];
      let gad10 = [];
      let individualData = data.filter((individual) => {
        return individual["Patient Name"] === selected;
      });
      individualData.forEach((ele) => {
        gad7.push({ x: ele["Timestamp"], y: ele["GAD-7 Score"] });
      });
      individualData.forEach((ele) => {
        gad10.push({ x: ele["Timestamp"], y: ele["PHQ-9 Score"] });
      });
      returnData = [
        { id: "GAD-7 Score", color: "hsl(56, 70%, 50%)", data: gad7 },
        { id: "PHQ-9 Score", color: "hsl(56, 70%, 50%)", data: gad10 },
      ];
      setDisplayData(returnData);
    };
    sortDisplayData();
  }, [selected]);

  return (
    <Box>
      {/* <Header /> */}
      <Typography fontSize={"2rem"} textAlign={"center"} fontWeight={800}>
        Prairie Health
        {console.log("here", setDisplayData)}
      </Typography>
      <Box padding={"2em"}>
        <PatientSelectForm selected={selected} setSelected={setSelected} />
      </Box>
      <MyResponsiveChart data={displayData} />
    </Box>
  );
}

export default App;
