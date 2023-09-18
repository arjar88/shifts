import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const NumOfWorkersTabs = ({ structure }) => {
  const [value, setValue] = useState(structure.structure[0]);
  console.log("structure:", structure);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {/* <Tab value="three" label="Item Three" /> */}
        {structure.structure.map((s, index) => (
          <Tab value={s} label={s.day} key={index} />
        ))}
      </Tabs>
    </Box>
  );
};

export default NumOfWorkersTabs;
