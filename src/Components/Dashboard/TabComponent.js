import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function TabComponent() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize"
  }

  return (
    <div sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        
        <TabPanel value="grid">Grid</TabPanel>
        <TabPanel value="list">List</TabPanel>
      </TabContext>
    </div>
  );
}
