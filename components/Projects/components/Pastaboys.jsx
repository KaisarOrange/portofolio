import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import SwipeableTextMobileStepper from '../Carousel';
import { Box, Button, Typography } from '@mui/material';
import TechnologyParser from './TechnologyParser';

import Link from 'next/link';
import { useRouter } from 'next/router';

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
  github,
  live,
  liveEnabled,
}) {
  const router = useRouter();
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      sx={{
        flexDirection: { xs: 'column', md: isPhone ? 'row' : 'column' },
        alignItems: { xs: '', md: '' },
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

        {/* <Typography sx={{ marginTop: '40px', fontWeight: 'bold' }}>
          {indev ? 'In Development' : ''}
        </Typography>
        <Typography sx={{ marginTop: '0px' }}>{paratiga}</Typography> */}

        <Button
          variant='contained'
          sx={{ margin: '5px', backgroundColor: '#000057' }}
          disabled={!liveEnabled}
          onClick={() => {
            window.open(live);
          }}
        >
          Live Demo
        </Button>

        <Button
          variant='outlined'
          onClick={() => {
            window.open(github);
          }}
          sx={{ margin: '5px', borderColor: '#000057', color: '#000057' }}
        >
          Github <GitHubIcon style={{ marginLeft: '5px' }}></GitHubIcon>
        </Button>

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
