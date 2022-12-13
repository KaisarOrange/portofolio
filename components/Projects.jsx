import React from 'react';
import styles from '../styles/Projects.module.scss';
import Link from 'next/link';
import uniqid from 'uniqid';
import Image from 'next/image';
function Projects({ image, deskripsi, title, stack, linkTo, git }) {
  return (
    <div>
      <div className={styles.bangkit}>
        <Image className={styles.image} src={image} />
        <h1 className={styles.text}>{title}</h1>
        <h3 className={styles.text}>{deskripsi}</h3>
        <div className={styles.buttonDiv}>
          <Link className={styles.links} href={linkTo}>
            <button className={styles.btn}>Live Demo</button>
          </Link>

          <Link className={styles.links} href={git}>
            <button className={styles.btn}>
              <div>
                GitHub <Image src='/img/github.png' />
              </div>
            </button>
          </Link>
        </div>
        <div className={styles.footer}>
          {stack.map((e) => {
            console.log(e);
            return (
              <p key={uniqid()} className={styles.text}>
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
