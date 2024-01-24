import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import Wallet from '../Pages/Wallet';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard';
import AboutUs from '../Pages/AboutUs';
// import Logout from '../Pages/Logout';
import EnergyTradePage from '../Pages/EnergyTradePage';
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';
// import Header from './Header';
import Form from './Form';
import '../styles/sidebar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineDashboard } from 'react-icons/ai';
import {  TiContacts} from 'react-icons/ti';
import {  SiAboutdotme} from 'react-icons/si';
import { BiLogOut } from 'react-icons/bi';
import {  useNavigate } from 'react-router-dom';
<Box className="sidebar" sx={{ display: 'flex' }}/>

const drawerWidth = 240;


export default function Sidebar(props) {
  const theme =useTheme();
  const[open,setOpen]=useState(false);
  const [menudata,setMenudata]=useState("Home");
  const navigate = useNavigate();

  const handlelogout = () => {
    navigate('/');
 };
//  handlelogout();
  return (
    <section className='sidebar2'>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='appbar' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography  noWrap component="div">
            Happy energy exchange
          </Typography>
        </Toolbar>
      </AppBar>

      <div className='sidebar'>
      <Drawer
      
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("Dashboard")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <AiOutlineHome/>
                  </ListItemIcon>
                  
                  <ListItemText primary="Dashboard"/>
                </ListItemButton>
              </ListItem>
             
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("EnergyTradePage")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <AiOutlineDashboard/>
                  </ListItemIcon>
                  
                  <ListItemText primary="EnergyTradePage"/>
                </ListItemButton>
              </ListItem>
             
              {/* <ListItem disablePadding sx={{display:"block"}} onClick={handlelogout}> */}
              <ListItem disablePadding sx={{ display: "block" }} onClick={handlelogout}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <BiLogOut/>
                  </ListItemIcon>
                  
                  <ListItemText  primary="Logout"/>
                </ListItemButton>
              </ListItem>
            
            
            
          </List>
          <Divider />
          
        </Box>
      </Drawer>
      </div>
      <div className='sidebar1'>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menudata === "Dashboard" && <Dashboard/>}
        {menudata === "Wallet" && <Wallet/>}
        {menudata === "EnergyTradePage" && <EnergyTradePage
         energypurchase={props.energypurchase}
         SellOrder={props.SellOrder}
         BuyOrder={props.BuyOrder}
        />}
        {menudata === "Profile" && <Profile/>}
        {menudata === "Contact" && <Contact/>}
        {menudata === "About Us" && <AboutUs/>}
        {/* {menudata === "Logout" && <Logout/>} */}
      </Box>
      </div>
    </Box>
    </section>
  );
}
/*
import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import Wallet from '../Pages/Wallet';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard';
import AboutUs from '../Pages/AboutUs';
import Logout from '../Pages/Logout';
import EnergyTradePage from '../Pages/EnergyTradePage';
import Profile from '../Pages/Profile';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineDashboard } from 'react-icons/ai';
import {  TiContacts} from 'react-icons/ti';
import {  SiAboutdotme} from 'react-icons/si';
import { BiLogOut } from 'react-icons/bi';
const drawerWidth = 240;


export default function Sidebar(props) {
  const theme =useTheme();
  const[open,setOpen]=useState(false);
  const [menudata,setMenudata]=useState("Home");
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography  noWrap component="div">
            Happy energy exchange
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("Dashboard")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <AiOutlineHome/>
                  </ListItemIcon>
                  
                  <ListItemText primary="Dashboard"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("Wallet")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <AiOutlineDashboard/>
                  </ListItemIcon>
                  
                  <ListItemText primary="Wallet"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("EnergyTradePage")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <AiOutlineDashboard/>
                  </ListItemIcon>
                  
                  <ListItemText primary="EnergyTradePage"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("Profile")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <TiContacts/>
                  </ListItemIcon>
                  
                  <ListItemText primary="Profile"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("Contact")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <TiContacts/>
                  </ListItemIcon>
                  
                  <ListItemText primary="Contact"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("AboutUs")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <SiAboutdotme/>
                  </ListItemIcon>
                  
                  <ListItemText primary="About US"/>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{display:"block"}} onClick={()=>setMenudata("Logout")}>
                <ListItemButton
                  sx={{
                    minHeight:48,
                    justifyContent:open?'initial':'center',
                    px:2.5
                  }}
                >
                
                  <ListItemIcon
                   sx={{
                    minWidth:0,
                    mr:open?3:"auto",
                    justifyContent:"center",
                  }}
                  >
                    <BiLogOut/>
                  </ListItemIcon>
                  
                  <ListItemText primary="Logout"/>
                </ListItemButton>
              </ListItem>
            
            
            
          </List>
          <Divider />
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {menudata === "Dashboard" && <Dashboard/>}
        {menudata === "Wallet" && <Wallet/>}
        {menudata === "EnergyTradePage" && <EnergyTradePage
         energypurchase={props.energypurchase}
         SellOrder={props.SellOrder}
         BuyOrder={props.BuyOrder}
        />}
        {menudata === "Profile" && <Profile/>}
        {menudata === "Contact" && <Contact/>}
        {menudata === "About Us" && <AboutUs/>}
        {menudata === "Logout" && <Logout/>}
      </Box>
    </Box>
  );
}
*/