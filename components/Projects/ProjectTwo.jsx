import React from 'react';
import SwipeableTextMobileStepper from './Carousel';
import { Box, Typography } from '@mui/material';

import styles from '../../styles/Projects.module.scss';
import { useInView } from 'react-intersection-observer';
import Pastaboys from './components/Pastaboys';
import Admin from './components/Admin';

function ProjectTwo() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      ref={ref}
      className={`${styles.container} ${inView ? styles.show : ''}`}
    >
      <Pastaboys />
      <Admin />
    </Box>
  );
}

export default ProjectTwo;
