import Image from 'next/image';
import Link from 'next/link';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero} aria-labelledby="home-hero">
      <div className={classes.inner}>
        <div className={classes.image}>
          <Image
            src="/images/site/mesayp.png"
            alt="Mesay Erbeto"
            width={320}
            height={320}
            priority
          />
        </div>

        <div className={classes.content}>
          <h1 id="home-hero">Hello, I&apos;m Mesay</h1>
          <p className={classes.lead}>
            I build and scale web applications with React, Angular and Node.js.
            I focus on performance, maintainability and pragmatic engineering.
          </p>

          <p className={classes.role}>Full‑Stack Developer — Dallas, TX</p>

          <div className={classes.actions}>
            <Link href="/posts" className={classes.btnPrimary}>View Posts</Link>
            <Link href="/contact" className={classes.btnGhost}>Contact</Link>
          </div>

          <div className={classes.social} aria-label="social links">
            <a href="https://github.com/mesay-d" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className={classes.separator}>·</span>
            <a href="https://www.linkedin.com/in/mesay-erbeto" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
