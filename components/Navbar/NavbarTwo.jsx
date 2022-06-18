import {
  AppBar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import React from 'react';

const NavbarTwo = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Box
          sx={{
            width: '100%',
            height: '50px',
            backgroundColor: '#18181b',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: isMatch ? '100%' : '74%',
              height: '50px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '0px 20px',
            }}
          >
            <Link href="#">
              <a>
                <Typography variant="h6" color="white" sx={{ fontWeight: 700 }}>
                  Apple TV+
                </Typography>
              </a>
            </Link>
            <Button
              variant="contained"
              sx={{ color: 'black', background: 'white', borderRadius: '20px' }}
            >
              Stream Now
            </Button>
          </Box>
        </Box>
      </AppBar>
      <Divider sx={{ height: '1px', backgroundColor: 'rgb(80,80,94)' }} light />
      <Box
        sx={{
          width: '100%',
          height: '50px',
          backgroundColor: '#18181b',
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{ color: 'white', paddingTop: '15px', fontSize: '14px' }}
        >
          Friday Night Baseball, now streaming on Apple TV+. Learn more..{' '}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default NavbarTwo;
