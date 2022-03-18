import { useState, useEffect } from "react";
import data from "../Data/score-visualizer.json";

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Input,
} from "@mui/material";

function PatientSelectForm() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    let names = [];
    let sorter = () => {
      data.forEach((ele) => {
        if (!names.includes(ele["Patient Name"])) {
          names.push(ele["Patient Name"]);
        }
      });
    };
    sorter();
    console.log(names);
    setPatients(names);
  }, []);
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Name</InputLabel>
        <Select value={name} label="Name" onChange={handleChange}>
          {patients.map((patient) => {
            return <MenuItem value={patient}>{patient}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default PatientSelectForm;
