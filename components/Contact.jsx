import Link from 'next/link';
import React from 'react';
import styles from '../styles/Contact.module.scss';
import { useInView } from 'react-intersection-observer';
function Contact() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  return (
    <div
      id='contact'
      className={`${styles.container} ${inView ? styles.show : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Contact</h1>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.contactContentContainer} ref={ref}>
          <Link
            className={styles.link}
            href='https://www.linkedin.com/in/alif-ayodya22/'
          >
            <img src='/img/link.svg' />
          </Link>
          <Link className={styles.link} href='https://github.com/KaisarOrange/'>
            <img src='/img/github.png' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
