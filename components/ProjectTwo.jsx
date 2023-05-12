import React from 'react';
import SwipeableTextMobileStepper from './Carousel';
import { Box, Typography } from '@mui/material';

import styles from '../styles/Projects.module.scss';
import { useInView } from 'react-intersection-observer';

function ProjectTwo() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      ref={ref}
      className={`${styles.container} ${inView ? styles.show : ''}`}
    >
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Projects
      </Typography>
      <Box display={'flex'}>
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

          <Typography sx={{ marginTop: '20px', fontWeight: 'bold' }}>
            In Development:
          </Typography>
          <Typography sx={{ marginTop: '0px' }}>
            Switching from using SaaS to a standalone robust Node Express
            backend server with PostgreSql as database
          </Typography>
          <Typography
            sx={{ marginTop: '20px', marginBottom: '10px', fontWeight: 'bold' }}
          >
            Technology used:
          </Typography>
          <Box display={'flex'} gap={2}>
            <Box textAlign={'center'}>
              <img width={'50px'} height={'50px'} src='./img/angular.png'></img>
              <Typography fontSize={'0.9rem'}>Angular</Typography>
            </Box>
            <Box textAlign={'center'}>
              <img
                width={'50px'}
                height={'50px'}
                src='./img/firebase.png'
              ></img>
              <Typography fontSize={'0.9rem'}>Firebase</Typography>
            </Box>
            <Box textAlign={'center'}>
              <img
                width={'100px'}
                height={'50px'}
                src='./img/express.png'
              ></img>
              <Typography fontSize={'0.9rem'}>Express.js</Typography>
            </Box>
            <Box textAlign={'center'}>
              <img
                width={'50px'}
                height={'50px'}
                src='./img/postgres.png'
              ></img>
              <Typography fontSize={'0.9rem'}>PostgreSql</Typography>
            </Box>
            <Box textAlign={'center'}>
              <img width={'50px'} height={'50px'} src='./img/tail.svg'></img>
              <Typography fontSize={'0.9rem'}>Tailwind</Typography>
            </Box>
          </Box>
        </Box>
        <SwipeableTextMobileStepper />
      </Box>
    </Box>
  );
}

export default ProjectTwo;
