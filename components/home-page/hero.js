import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/mesayp.png'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>


  <h1>Hello, I&apos;m Mesay</h1>
<p>
  I craft in-depth guides, best practices, and practical solutions on building high-performance, scalable web applications using <strong>React</strong>, <strong>Angular</strong>, and <strong>Node.js</strong>.
</p>



    </section>
  );
}

export default Hero;
