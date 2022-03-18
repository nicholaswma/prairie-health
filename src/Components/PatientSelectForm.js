import { useState, useEffect } from "react";
import data from "../Data/score-visualizer.json";

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Input,
} from "@mui/material";

function PatientSelectForm({ setSelected, selected }) {
  const [patients, setPatients] = useState([]);

  const handleChange = (e) => {
    setSelected(e.target.value);
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
    setPatients(names);
  }, []);
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Patient</InputLabel>
        <Select value={selected} label="Name" onChange={handleChange}>
          {patients.map((patient, id) => {
            return (
              <MenuItem value={patient} key={id}>
                {patient}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export default PatientSelectForm;
