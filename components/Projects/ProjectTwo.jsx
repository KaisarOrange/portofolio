import React from 'react';
import SwipeableTextMobileStepper from './Carousel';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/Projects.module.scss';
import { useInView } from 'react-intersection-observer';
import Pastaboys from './components/Pastaboys';
import Admin from './components/Admin';

function ProjectTwo() {
  const items = [
    { name: 'Angular', image: './img/angular.png' },
    { name: 'Express.js', image: './img/express.png' },
    { name: 'PostgreSql', image: './img/postgres.png' },
    { name: 'Tailwind', image: './img/tail.svg' },
  ];
  const parasatuPasta = [
    'Pastaboys is a small business located in Malang, Indonesia. Being run by dormary students, Pastaboys hold dearly products quality and customer satistfaction.',
  ];

  const parasatuSmart = ["Bachelore's degree final project"];

  const parasatuAdmin = [
    'To handle orders, pastaboys uses a sophisticated admin dashboard. node js with express.js framework for backend and passport.js with Session strategy to authenticate its api routes and to access  the application.',
  ];
  const parasatuBangkit = [
    'Bangkit is a final semester university project, Bangkit main ambition was to help small business who were affected by covid 19. Bangkit is built with the idea of gotong royong, Investors who are interested are able to invest their money in great businesses',
  ];

  const paraDuaPasta = [''];

  const paraDuaAdmin = [''];
  const paraTigaPasta = [
    'Switching from using SaaS to a standalone robust Node Express backend server with PostgreSql as database',
  ];
  const itemsAdmin = [
    { name: 'React', image: './img/react.svg' },
    { name: 'React query', image: './img/rq.png' },
    { name: 'Express.js', image: './img/express.png' },
    { name: 'PostgreSql', image: './img/postgres.png' },
    { name: 'Material UI', image: './img/mui.png' },
    { name: 'Passport.js', image: './img/ps.webp' },
  ];

  const itemsSmart = [
    { name: 'Svelte', image: './img/Smart/svelte.png' },
    { name: 'Go', image: './img/Smart/go.png' },
    { name: 'Go-fiber', image: './img/Smart/fiber.svg' },
    { name: 'PostgreSql', image: './img/postgres.png' },
    { name: 'Google cloud', image: './img/Smart/gcp.png' },
    { name: 'Docker', image: './img/Smart/docker.png' },
  ];
  const itemsBangkit = [
    { name: 'React', image: './img/react.svg' },
    { name: 'React query', image: './img/rq.png' },
    { name: 'Chakra UI', image: './img/chakra.png' },
    { name: 'Firebase', image: './img/firebase.png' },
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
  const imagesSmart = [
    { label: 'Welcome Page1', imgPath: './img/Smart/smart2.png' },
    { label: '2', imgPath: './img/Smart/smart1.png' },
    { label: '3', imgPath: './img/Smart/smart3.png' },
    { label: '4', imgPath: './img/Smart/smart4.png' },
    { label: '5', imgPath: './img/Smart/smart5.png' },
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
  const imagesBangkit = [
    {
      label: 'Finish Page',
      imgPath: '/img/Bangkit/5.png',
    },
    {
      label: 'Menu Page',
      imgPath: '/img/Bangkit/1.png',
    },
    {
      label: 'OrderPage',
      imgPath: '/img/Bangkit/2.png',
    },
    {
      label: 'Finish Page',
      imgPath: '/img/Bangkit/3.png',
    },
    {
      label: 'Finish Page',
      imgPath: '/img/Bangkit/4.png',
    },
    {
      label: 'Finish Page',
      imgPath: '/img/Bangkit/6.png',
    },
  ];

  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <Box
      padding={1}
      ref={ref}
      className={`${styles.container} ${inView ? styles.show : ''}`}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', md: '1.8rem' },
          marginBottom: 12,
        }}
      >
        Projects
      </Typography>
      <Pastaboys
        title={'Smart Office'}
        parasatu={parasatuSmart}
        paradua={paraDuaAdmin}
        paratiga={''}
        indev={false}
        images={imagesSmart}
        width={700}
        heigth={350}
        items={itemsSmart}
        liveEnabled={false}
        live={''}
        github={'https://github.com/KaisarOrange'}
      />
      <Pastaboys
        title={'Pastaboys'}
        images={imagesPasta}
        parasatu={parasatuPasta}
        indev={true}
        paradua={paraDuaPasta}
        paratiga={paraTigaPasta}
        isPhone={true}
        width={300}
        heigth={600}
        items={items}
        live={'https://pastaboys.shop'}
        github={'https://github.com/KaisarOrange/order-app'}
        liveEnabled={true}
      />
      <Box sx={{ margin: { xs: 15, md: 15 } }}></Box>
      <Pastaboys
        title={'Admin Dashboard'}
        parasatu={parasatuAdmin}
        paradua={paraDuaAdmin}
        paratiga={''}
        indev={false}
        images={imagesAdmin}
        width={700}
        heigth={350}
        items={itemsAdmin}
        liveEnabled={false}
        live={''}
        github={'https://github.com/KaisarOrange/admin'}
      />
      <Box sx={{ margin: { xs: 15, md: 15 } }}></Box>
      <Pastaboys
        title={'Bangkit'}
        parasatu={parasatuBangkit}
        paradua={paraDuaAdmin}
        paratiga={''}
        indev={false}
        images={imagesBangkit}
        width={700}
        heigth={350}
        liveEnabled={true}
        items={itemsBangkit}
        live={'https://kaisarorange.github.io/bangkit-app/'}
        github={'https://github.com/KaisarOrange/bangkit-app'}
      />
    </Box>
  );
}

export default ProjectTwo;
