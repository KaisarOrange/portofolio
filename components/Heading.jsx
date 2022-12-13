import React from 'react';
import styles from '../styles/Home.module.scss';
function Heading() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Alif Ayodya Test</h1>
        <h3>Front End Engineer</h3>
      </div>
      <div className={styles.image}>
        <div>
          <img className={styles.profile} src='./img/alip.png'></img>
        </div>
        <div>
          <h2>Hello, World!</h2>
          <p>Web developer student from University of Brawijaya</p>
          <p>I like to learn new things and seek challenges</p>
          <h2>Stacks i've used</h2>
          <div className={styles.stack}>
            <img className={styles.svgg} src='./img/js.svg'></img>
            <img className={styles.svgg} src='./img/react.svg'></img>
            <img className={styles.svgg} src='./img/next.svg'></img>
            <img className={styles.svgg} src='./img/tail.svg'></img>
            <img className={styles.svgg} src='./img/sass.svg'></img>
            <img className={`${styles.svgg}`} src='./img/rq.png' />
            <img
              className={`${styles.svgg}  ${styles.png}`}
              src='./img/firebase.png'
            />
            <img className={`${styles.svgg}  `} src='./img/chakra.png' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
