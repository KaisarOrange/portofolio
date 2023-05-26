import React from 'react';

import SwipeableTextMobileStepper from '../Carousel';
import { Box, Typography } from '@mui/material';
import TechnologyParser from './TechnologyParser';

function Pastaboys({ title, images, width, heigth, items }) {
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box width={'30%'}>
        <Typography sx={{ fontSize: '3.2rem', fontWeight: 'bold' }}>
          {title}
        </Typography>

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
        <Typography
          sx={{ marginTop: '40px', marginBottom: '10px', fontWeight: 'bold' }}
        >
          Made with:
        </Typography>
        <TechnologyParser items={items} />
      </Box>
      <Box>
        <SwipeableTextMobileStepper
          images={images}
          width={width}
          maxWidth={width}
          heigth={heigth}
        />
      </Box>
    </Box>
  );
}

export default Pastaboys;
