import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  ListItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HiMenuAlt4 } from 'react-icons/hi';
import { FaApple } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import * as React from 'react';
import { useState } from 'react';
import { pages } from '../../../data/SidebarAndNavbar';

const DrawerOne = () => {
  const [open, setOpen] = useState(false);

  const style = {
    width: '100%',
    bgcolor: 'grey.900',
    color: '#fff',
  };

  return (
    <React.Fragment>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <Box
            sx={{
              width: '50%',
              height: '50px',
              backgroundColor: '#f4f4f4',
              marginLeft: '25%',
            }}
          ></Box>
          <Divider />
          {pages.map((page, index) => {
            return (
              <ListItem button key={page.id} divider>
                <ListItemText primary={page.title} sx={{ marginLeft: '50%' }} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton sx={{ color: 'white' }} onClick={() => setOpen(!open)}>
          <HiMenuAlt4 />
        </IconButton>
        <IconButton sx={{ color: 'white' }} onClick={() => setOpen(!open)}>
          <FaApple />
        </IconButton>
        <IconButton sx={{ color: 'white' }} onClick={() => setOpen(!open)}>
          <BsBag />
        </IconButton>
      </Box>
    </React.Fragment>
  );
};

export default DrawerOne;
