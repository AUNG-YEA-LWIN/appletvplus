import React from 'react';
import {
  Box,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AiFillApple } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { BsBag } from 'react-icons/bs';
import DrawerOne from './Drawer/DrawerOne'
import { pages } from '../../data/SidebarAndNavbar';

const NavbarOne = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
  const isChange = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="div"
      sx={{ width: '100%', height: '50px', backgroundColor: 'black' }}
    >
      {isChange ? (
        <>
          <DrawerOne />
        </>
      ) : (
        <>
          <Box
            sx={{
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <IconButton>
              <AiFillApple color="white" />
            </IconButton>
            {pages.map((page, index) => {
              return (
                <Link href="#" underline="none" key={index}>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      paddingLeft: isMatch ? '15px' : '22px',
                      paddingRight: isMatch ? '15px' : '22px',
                      fontSize: '12px',
                    }}
                  >
                    {page.title}
                  </Typography>
                </Link>
              );
            })}
            <IconButton sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
              <BiSearch color="white" />
            </IconButton>
            <IconButton sx={{ paddingLeft: '20px', paddingRight: '20px' }}>
              <BsBag color="white" />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default NavbarOne;
