import Image from 'next/legacy/image';

import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/Arie.jpeg'
          alt='An image showing site owner: Arie'
          width={400}
          height={400}
          priority={true}
        />
      </div>
      <h1>Hi, I am Arie</h1>
      <p>
        I blog about web development, especially about the MERN-framework. I also blog about language editing,
        especially for academic clients.
      </p>
    </section>
  );
}

export default Hero;
