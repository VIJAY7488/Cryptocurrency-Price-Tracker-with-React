import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';


export default function AnchorTemporaryDrawer() {
  const [state, setState] = useState(false);   

  const menuList = [
    {
      id: 1,
      label: "Home",
      link: "/home"
    },
    {
      id: 2,
      label: "Compare",
      link: "/compare"
    },
    {
      id: 3,
      label: "Watchlist",
      link: "watchlist"
    },
  ];
 
  return (
    <div>
      <Button onClick={() => setState(true)} 
        className='text-white hidden md:flex'>
        <MenuSharpIcon/>
     </Button>
      <Drawer anchor='right' open={state} onClose={() => setState(false)}>
            <div className='bg-slate-900 w-52 h-full p-6 space-y-4'>
                {
                    menuList.map((navItem) =>(
                        <li className='list-none text-gray-300'>
                          {navItem.label}
                        </li>
                    ))
                }
                <button className='text-gray-200'>Dashboard</button>
            </div>
      </Drawer>
    </div>
  );
}
