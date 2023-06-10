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
  isPhone,
}) {
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      sx={{
        flexDirection: { xs: 'column', md: isPhone ? 'row' : 'column' },
        alignItems: { xs: '', md: 'center' },
      }}
      marginTop={{ xs: 10, md: 0 }}
      gap={'20px'}
      justifyContent={{
        xs: 'space-around',
        md: isPhone ? 'space-between' : 'space-around',
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: { xs: '2rem', md: '3.2rem' }, fontWeight: 'bold' }}
        >
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
          isPhone={isPhone}
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
