import Link from 'next/link';
import React from 'react';
import styles from '../styles/Contact.module.scss';
function Contact() {
  return (
    <div id='contact' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Contact</h1>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.contactContentContainer}>
          <Link
            className={styles.link}
            href='https://www.linkedin.com/in/alif-ayodya22/'
          >
            <img src='/img/link.svg' />
          </Link>
          <div className={styles.zyzz}>
            <img src='/img/zyzz.png' />
          </div>
          <Link className={styles.link} href='https://github.com/KaisarOrange/'>
            <img src='/img/github.png' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
