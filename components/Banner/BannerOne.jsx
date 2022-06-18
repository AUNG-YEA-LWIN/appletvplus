import {
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css';

const BannerOne = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={styles.videowrapper}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/codigo.mp4" type="video/mp4" />
      </video>
      <Box sx={{ position: 'relative', top: '22%', left: '8%' }}>
        <Typography
          variant="subtitle"
          sx={{
            color: 'white',
            fontWeight: '900',
            fontSize: isMatch ? '50px' : '70px',
          }}
        >
          All Apple Originals.
          <br />
          Only on Apple TY+.
        </Typography>
        <br />
        <Button
          variant="contained"
          sx={{
            background: 'white',
            color: 'black',
            width: '150px',
            marginTop: '50px',
            borderRadius: '40px',
          }}
        >
          Stream now
        </Button>
      </Box>
    </div>
  );
};

export default BannerOne;
