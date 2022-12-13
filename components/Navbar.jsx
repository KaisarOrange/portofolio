import React from 'react';
import styles from '../styles/Navbar.module.scss';
function Navbar() {
  return (
    <div className={styles.container}>
      <a className={styles.a}>Home</a>
      <a className={styles.a} href='#project'>
        Projects
      </a>
      <a className={styles.a} href='#contact'>
        Contact
      </a>
    </div>
  );
}

export default Navbar;
