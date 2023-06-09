import React from 'react';

import SwipeableTextMobileStepper from '../Carousel';
import { Box, Typography } from '@mui/material';
import TechnologyParser from './TechnologyParser';

function Pastaboys({
  title,
  images,
  width,
  heigth,
  items,
  parasatu,
  paradua,
  paratiga,
  indev,
}) {
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      gap={'20px'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box>
        <Typography sx={{ fontSize: '3.2rem', fontWeight: 'bold' }}>
          {title}
        </Typography>

        <Typography sx={{ marginTop: '20px' }}>{parasatu}</Typography>
        <Typography sx={{ marginTop: '20px' }}>{paradua}</Typography>

        <Typography sx={{ marginTop: '40px', fontWeight: 'bold' }}>
          {indev ? 'In Development' : ''}
        </Typography>
        <Typography sx={{ marginTop: '0px' }}>{paratiga}</Typography>
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
