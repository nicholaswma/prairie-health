import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import data from "./Data/score-visualizer.json";
import PatientSelectForm from "./Components/PatientSelectForm.js";
import MyResponsiveChart from "./Components/MyResponsiveChart.js";
import AnalyzerLogo from "./Assets/Analyzer.png";
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
        let timeStamp = !matches
          ? ele["Timestamp"].split(" ")[0]
          : ele["Timestamp"];
        gad7.push({ x: timeStamp, y: ele["GAD-7 Score"] });
      });
      individualData.forEach((ele) => {
        let timeStamp = !matches
          ? ele["Timestamp"].split(" ")[0]
          : ele["Timestamp"];
        gad10.push({ x: timeStamp, y: ele["PHQ-9 Score"] });
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
    <>
      {matches ? (
        <></>
      ) : (
        <>
          <Box
            color="white"
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#DBCCBA",
            }}
            alignItems={"center"}
            padding={0}
            height="7em"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              padding="2em"
              justifyContent="center"
              alignItems="center"
            >
              <Typography fontSize={"1.5rem"} fontWeight={700}>
                Analyzer
              </Typography>
              <Typography fontSize={"1.125rem"}>Monitor your health</Typography>
            </Box>
            {/* <img src={AnalyzerLogo} alt="logo" width="50%" height="auto" /> */}
          </Box>
          <Box padding={"2em"} backgroundColor="#DBCCBA">
            <PatientSelectForm selected={selected} setSelected={setSelected} />
          </Box>
        </>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {matches ? (
          <Box
            sx={{
              backgroundColor: "#DBCCBA",
            }}
            color="white"
            height="100vh"
            padding={"2em"}
          >
            <img src={AnalyzerLogo} alt="logo" height="25%" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              paddingBottom="2em"
              justifyContent={"center"}
              alignItems="center"
            >
              <Typography fontSize={"1.5rem"} fontWeight={700}>
                Analyzer
              </Typography>
              <Typography fontSize={"1.125rem"}>Monitor your health</Typography>
            </Box>

            <Box>
              <PatientSelectForm
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        ) : (
          <></>
        )}
        {selected ? (
          <Box
            width="100%"
            height={matches ? "auto" : "100vh"}
            marginTop="2.5em"
          >
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
            height={!matches ? "100%" : "100vh"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Please Select a Patient</Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;
