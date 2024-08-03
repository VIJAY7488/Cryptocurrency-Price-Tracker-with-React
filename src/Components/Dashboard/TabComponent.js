import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import GridPage from './Grid';

export default function TabComponent({coin}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette:{
      primary:{
        main: "#2563EB",
      },
    },
  })

  const style = {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize"
  }

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
        
        <TabPanel value="grid">
          <div className='flex gap-10 flex-wrap justify-center'>
            {coin.map((coin, i) =>(
              <GridPage coin={coin} key={i}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          mapping for list
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
