import React from 'react';

import SwipeableTextMobileStepper from '../Carousel';
import { Box, Typography } from '@mui/material';
import TechnologyParser from './TechnologyParser';
function Pastaboys() {
  const images = [
    {
      label: 'Menu Page',
      imgPath: '/img/aa.png',
    },
    {
      label: 'OrderPage',
      imgPath: '/img/bb.png',
    },
    {
      label: 'Finish Page',
      imgPath: '/img/dd.png',
    },
    {
      label: 'Hehe Page',
      imgPath: '/img/ee.png',
    },
    {
      label: 'Welcome Page',
      imgPath: '/img/cc.png',
    },
  ];

  const items = [
    { name: 'Angular', image: './img/angular.png' },
    { name: 'Firebase', image: './img/firebase.png' },
    { name: 'Express.js', image: './img/express.png' },
    { name: 'PostgreSql', image: './img/postgres.png' },
    { name: 'Tailwind', image: './img/tail.svg' },
  ];

  return (
    <Box height={'100vh'}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Projects
      </Typography>
      <Box display={'flex'} alignItems={'center'}>
        <Box>
          <Typography sx={{ fontSize: '3.2rem', fontWeight: 'bold' }}>
            Pastaboys
          </Typography>

          <Typography sx={{ marginTop: '20px' }}>
            Pastaboys is a small business located in Malang, Indonesia. Being
            run by dormary students, Pastaboys hold dearly products quality and
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
            Switching from using SaaS to a standalone robust Node Express
            backend server with PostgreSql as database
          </Typography>
          <Typography
            sx={{ marginTop: '40px', marginBottom: '10px', fontWeight: 'bold' }}
          >
            Made with:
          </Typography>
          <TechnologyParser items={items} />
        </Box>
        <SwipeableTextMobileStepper
          images={images}
          width={300}
          maxWidth={600}
          heigth={600}
        />
      </Box>
    </Box>
  );
}

export default Pastaboys;
