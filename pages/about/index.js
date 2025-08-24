import classes from './about.module.css';
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <section className={classes.about}>
      <h1>About Me</h1>
      
      <div className={classes.intro}>
        <Image
          src='/images/site/mesayp.png'
          alt="Mesay Erbeto"
          width={190}
          height={200}
          className={classes.profileImage}
        />
        <p>
          Hi, I’m <strong>Mesay Erbeto</strong>, a Full-Stack Developer based in Dallas, Texas,
          with 5+ years of experience building scalable web applications using 
          <strong> Angular, React.js, React Native, Node.js</strong>, and cloud platforms like <strong>AWS</strong> and <strong>Azure</strong>.  
          I also work extensively with databases such as <strong>MongoDB, SQL Server, MySQL</strong> and handle large datasets (Big Data).  
          For state management and data fetching, I use <strong>Redux</strong> and <strong>React Query</strong>, along with modern tools and libraries including <strong>TypeScript, RxJS, Express, REST & GraphQL APIs</strong>.
        </p>
      </div>

      <div className={classes.section}>
        <h2>My Journey</h2>
        <p>
          I completed my Master’s in Software Development from Maharishi International University.
          Since then, I’ve contributed to modern web applications at <strong>Home Depot (USA)</strong> and
          <strong> Simbo Software</strong>, gaining expertise in full-stack development, mobile apps, databases, and cloud solutions.
        </p>
      </div>

      <div className={classes.section}>
        <h2>Expertise & Technologies</h2>
        <ul>
          <li>Frontend: Angular, React.js, React Native, TypeScript, RxJS, HTML5, CSS3, TailwindCSS</li>
          <li>State Management & Data: Redux, React Query</li>
          <li>Backend: Node.js, Express, REST & GraphQL APIs</li>
          <li>Databases: MongoDB, SQL Server, MySQL, Big Data</li>
          <li>Cloud & DevOps: AWS, Azure, Docker, CI/CD Pipelines</li>
          <li>Testing & Tools: Jest, Cypress, Git, Agile Practices, Jira</li>
        </ul>
      </div>

      <div className={classes.section}>
        <h2>Projects & Achievements</h2>
        <ul>
          <li>Developed scalable e-commerce platforms for Home Depot using Angular and Node.js.</li>
          <li>Built mobile apps and enterprise-grade cloud applications using React Native, AWS, and Azure.</li>
          <li>Worked on database-driven projects using MongoDB, SQL Server, and MySQL, including Big Data handling.</li>
          <li>Open-source contributions: <a href="https://github.com/mesay-d/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>

      <div className={classes.section}>
        <h2>Approach & Philosophy</h2>
        <p>
          I focus on writing <strong>clean, maintainable code</strong> and building applications that
          <strong> scale efficiently</strong>. I enjoy solving complex problems, mentoring teams, and delivering high-quality software.
        </p>
      </div>

      <div className={classes.section}>
        <h2>Connect With Me</h2>
        <p>
          Explore my <Link href="/posts">posts</Link>, connect on <a href="https://www.linkedin.com/in/mesayerbeto" target="_blank" rel="noopener noreferrer">LinkedIn</a>,
          or send me an <a href="mailto:mesayerbeto2@gmail.com">email</a> to discuss opportunities.
        </p>
      </div>
    </section>
  );
}

export default About;
