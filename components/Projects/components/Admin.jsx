import { Box, Typography } from '@mui/material';
import React from 'react';
import SwipeableTextMobileStepper from '../Carousel';
import TechnologyParser from './TechnologyParser';

function Admin() {
  const images = [
    {
      label: 'Menu Page',
      imgPath: '/img/Pastaboys/satu.png',
    },
    {
      label: 'OrderPage',
      imgPath: '/img/Pastaboys/dua.png',
    },
    {
      label: 'Finish Page',
      imgPath: '/img/Pastaboys/tiga.png',
    },
  ];
  const items = [
    { name: 'React', image: './img/react.svg' },
    { name: 'React query', image: './img/rq.png' },
    { name: 'Express.js', image: './img/express.png' },
    { name: 'PostgreSql', image: './img/postgres.png' },
    { name: 'Material UI', image: './img/mui.png' },
    { name: 'Passport.js', image: './img/ps.webp' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
      }}
    >
      <Typography fontSize={'2rem'} fontWeight={'bold'}>
        Admin Dashboard
      </Typography>
      <SwipeableTextMobileStepper
        images={images}
        width={'100%'}
        maxWidth={'80%'}
        heigth={'25%'}
      />
      <Box textAlign={'justify'} width={'80%'}>
        <Typography
          sx={{ marginTop: '40px', marginBottom: '10px', fontWeight: 'bold' }}
        >
          Made with:
        </Typography>
        <TechnologyParser items={items} />
        <Typography sx={{ marginTop: '20px' }}>
          Pastaboys is a small business located in Malang, Indonesia. Being run
          by dormary students, Pastaboys hold dearly products quality and
          customer satistfaction.
        </Typography>
        <Typography sx={{ marginTop: '20px' }}>
          Pastaboys App Minimum Viable Product (MVP) is currently powered with
          Angular and Firebase as Backend.
        </Typography>

        <Typography sx={{ marginTop: '40px', fontWeight: 'bold' }}>
          In Development:
        </Typography>
        <Typography sx={{ marginTop: '0px' }}>
          Switching from using SaaS to a standalone robust Node Express backend
          server with PostgreSql as database
        </Typography>
      </Box>
    </Box>
  );
}

export default Admin;
