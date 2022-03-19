import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import data from "./Data/score-visualizer.json";
import dummy from "./Data/dummy.json";
import Header from "./Components/Header.js";
import PatientSelectForm from "./Components/PatientSelectForm.js";
import MyResponsiveChart from "./Components/MyResponsiveChart.js";
import AnalyzerLogo from "./Assets/Analyzer.png";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const [selected, setSelected] = useState("");
  const [displayData, setDisplayData] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    const sortDisplayData = () => {
      let returnData = [];
      let gad7 = [];
      let gad10 = [];
      let individualData = data.filter((individual) => {
        return individual["Patient Name"] === selected;
      });
      individualData.forEach((ele) => {
        let timeStamp = ele["Timestamp"].split(" ")[0];
        gad7.push({ x: ele["Timestamp"], y: ele["GAD-7 Score"] });
      });
      individualData.forEach((ele) => {
        let timeStamp = ele["Timestamp"].split(" ")[0];
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
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#DBCCBA",
        }}
        height="100vh"
      >
        <img src={AnalyzerLogo} alt="logo" height="25%" />
        <Box padding={"2em"}>
          <PatientSelectForm selected={selected} setSelected={setSelected} />
        </Box>
        <Box padding={"2em"} alignContent="center" justifyContent="center">
          <SettingsIcon onClick={() => console.log("open modal")} />
        </Box>
      </Box>
      {selected ? (
        <Box width="100%" height="100vh">
          <Typography
            fontSize={"2rem"}
            fontWeight={800}
            paddingBottom="0"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selected}
          </Typography>
          <MyResponsiveChart data={displayData} />
        </Box>
      ) : (
        <Box
          width="100%"
          height="100vh"
          sx={{
            bgcolor: "#D3D3D3",
            opacity: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Please Select a Patient</Typography>
        </Box>
      )}
    </Box>
  );
}

export default App;
