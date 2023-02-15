import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Projects.module.scss';
import Projects from './Projects';
import { useInView } from 'react-intersection-observer';
function Project() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const [selected, setSelect] = useState(0);
  const image = [
    '/img/bangkitT.mp4',
    '/img/boi.mp4',
    '/img/pasta.mp4',
    '/img/calc.mp4',
    '/img/tic.mp4',
  ];
  const title = ['  '];
  const link = [
    'https://kaisarorange.github.io/bangkit-app/',
    'https://kaisarorange.github.io/order-app',
    'https://pastaboyss.web.app/',
    'https://kaisarorange.github.io/calculator/',
    'https://kaisarorange.github.io/tic-tac-toe/',
    'https://kaisarorange.github.io/tic-tac-toe/',
  ];
  const deskripti = [
    'University final project web application',
    'Order App',
    'Landing page for a food pre order business',
    'Web application based calculator',
    'Tic Tac Toe game project',
  ];
  const git = [
    'https://github.com/KaisarOrange/bangkit-app',
    'https://github.com/KaisarOrange/order-app',
    '',
    'https://github.com/KaisarOrange/calculator',
    'https://github.com/KaisarOrange/tic-tac-toe',
  ];
  const stack = [
    ['React.js', 'Chakra UI', 'Javascript', 'React Query', 'Firebase'],
    ['Angular', 'Tailwind', 'Typescript'],
    ['React', 'Tailwind', 'Javascript'],
    ['HTML', 'CSS', 'Javascript'],
    ['HTML', 'CSS', 'Javascript'],
  ];
  return (
    <div
      id='project'
      className={`${styles.container} ${inView ? styles.show : ''}`}
      ref={ref}
    >
      <div className={styles.realSideBar}>
        <div>
          <div>
            <Projects
              image={image[selected]}
              linkTo={link[selected]}
              title={title[selected]}
              deskripsi={deskripti[selected]}
              stack={stack[selected]}
              git={git[selected]}
            />
          </div>
          <div className={styles.sidebarBarBar}>
            <div onClick={() => setSelect(0)} className={styles.sidebar}>
              {' '}
              <div
                className={`${styles.sidebarBar} ${
                  selected === 0 ? styles.selected : ''
                }`}
              ></div>
              <div className={styles.text}>UMKM crowdfunding app</div>
            </div>
            <div onClick={() => setSelect(1)} className={styles.sidebar}>
              {' '}
              <div
                className={`${styles.sidebarBar} ${
                  selected === 1 ? styles.selected : ''
                }`}
              ></div>
              <div className={styles.text}>Order App</div>
            </div>
            <div onClick={() => setSelect(2)} className={styles.sidebar}>
              {' '}
              <div
                className={`${styles.sidebarBar} ${
                  selected === 2 ? styles.selected : ''
                }`}
              ></div>
              <div className={styles.text}>Food business landing page</div>
            </div>
            <div onClick={() => setSelect(3)} className={styles.sidebar}>
              {' '}
              <div
                className={`${styles.sidebarBar} ${
                  selected === 3 ? styles.selected : ''
                }`}
              ></div>
              <div className={styles.text}>Calculator</div>
            </div>
            <div onClick={() => setSelect(4)} className={styles.sidebar}>
              {' '}
              <div
                className={`${styles.sidebarBar} ${
                  selected === 4 ? styles.selected : ''
                }`}
              ></div>
              <div className={styles.text}>Tic Tac Toe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
