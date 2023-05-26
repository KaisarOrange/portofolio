import React from 'react';
import SwipeableTextMobileStepper from './Carousel';
import { Box, Typography } from '@mui/material';

import styles from '../../styles/Projects.module.scss';
import { useInView } from 'react-intersection-observer';
import Pastaboys from './components/Pastaboys';
import Admin from './components/Admin';

function ProjectTwo() {
  const items = [
    { name: 'Angular', image: './img/angular.png' },
    { name: 'Firebase', image: './img/firebase.png' },
    { name: 'Express.js', image: './img/express.png' },
    { name: 'PostgreSql', image: './img/postgres.png' },
    { name: 'Tailwind', image: './img/tail.svg' },
  ];
  const itemsAdmin = [
    { name: 'React', image: './img/react.svg' },
    { name: 'React query', image: './img/rq.png' },
    { name: 'Express.js', image: './img/express.png' },
    { name: 'PostgreSql', image: './img/postgres.png' },
    { name: 'Material UI', image: './img/mui.png' },
    { name: 'Passport.js', image: './img/ps.webp' },
  ];
  const imagesAdmin = [
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
  const imagesPasta = [
    {
      label: 'Welcome Page',
      imgPath: '/img/cc.png',
    },
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
  ];

  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      ref={ref}
      className={`${styles.container} ${inView ? styles.show : ''}`}
    >
      <Typography sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Projects
      </Typography>
      <Pastaboys
        title={'Pastaboys'}
        images={imagesPasta}
        width={300}
        heigth={600}
        items={items}
      />
      <Pastaboys
        title={'Admin Dashboard'}
        images={imagesAdmin}
        width={700}
        heigth={350}
        items={itemsAdmin}
      />
    </Box>
  );
}

export default ProjectTwo;
