import React from 'react';
import styles from '../styles/Home.module.scss';
import { useInView } from 'react-intersection-observer';
function Heading() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <div
      className={`${styles.container} ${inView ? styles.show : ''}`}
      ref={ref}
    >
      <div className={styles.title}>
        <h1>Alif Ayodya</h1>
        <h3>Front End Engineer</h3>
      </div>
      <div className={styles.image}>
        <div>
          <img className={styles.profile} src='./img/alip.png'></img>
        </div>
        <div className={styles.about}>
          <h2>Hello, World!</h2>
          <p>
            Web developer student from University of Brawijaya I like to learn
            new things and seek challenges. Specialising in Javascript language,
            framework, and libraries. Mainly React.js, but open to learn beyond
            it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
{
  /* <h2>Stacks i've used</h2>
          <div className={styles.stack}>
            <img className={styles.svgg} src='./img/js.svg'></img>
            <img className={styles.svgg} src='./img/react.svg'></img>
            <img className={styles.svgg} src='./img/tail.svg'></img>
            <img className={styles.svgg} src='./img/sass.svg'></img>
            <img className={`${styles.svgg}`} src='./img/rq.png' />
            <img
              className={`${styles.svgg}  ${styles.png}`}
              src='./img/firebase.png'
            />
            <img className={`${styles.svgg}  `} src='./img/chakra.png' />
          </div> */
}
