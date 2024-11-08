"use client";
import styles from './about.module.css';  // Importing the CSS module

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>About Me</h1>
            <div className={styles.intro}>
                <p className={styles.introText}>
                    🚀 As an aspiring Full-Stack Developer, Im passionate about crafting innovative web applications that tackle real-world challenges. My skills span a variety of modern technologies, including HTML, CSS, TypeScript, Angular, SQL, JDBC, Spring Boot, and Bootstrap. Im dedicated to creating responsive, user-friendly interfaces and robust, secure backends.
                </p>
            </div>

            <div className={styles.section}>
                <h2 className={styles.subHeader}>🎯 Professional Highlights:</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}><strong className={styles.boldText}>Full-Stack Development:</strong> Proficient in both frontend and backend development, ensuring seamless integration across the entire stack.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Frontend Excellence:</strong> Leveraging Angular and TypeScript to create dynamic, interactive interfaces, complemented by Bootstrap for responsive design.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Backend Proficiency:</strong> Utilizing Spring Boot and SQL to build scalable, secure server-side applications, with efficient database management using JDBC.</li>
                </ul>
            </div>

            <div className={styles.section}>
                <h2 className={styles.subHeader}>💡 Personal Attributes:</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}><strong className={styles.boldText}>Detail-Oriented:</strong> I meticulously attend to every detail, ensuring projects are executed to the highest standards.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Problem Solver:</strong> I thrive on tackling complex challenges and discovering innovative solutions to enhance functionality and user experience.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Lifelong Learner:</strong> Constantly updating my skills and knowledge to keep pace with the rapidly evolving field of web development.</li>
                </ul>
            </div>

            {/* Skills Section */}
            <div className={styles.section}>
                <h2 className={styles.subHeader}>🛠️ Skills:</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}><strong className={styles.boldText}>React.js & React Hooks:</strong> Building interactive UIs with React, leveraging hooks for state and side-effect management.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Prisma ORM:</strong> Using Prisma for efficient database management and query building.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>JavaScript & TypeScript:</strong> Proficient in modern JavaScript (ES6+) and TypeScript for type-safe development.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>MERN Stack:</strong> Skilled in MongoDB, Express.js, React.js, and Node.js for building full-stack web applications.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Spring Boot & Java:</strong> Building secure and scalable backend services with Java and Spring Boot.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Angular:</strong> Building dynamic, scalable front-end applications using Angular.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Prisma & Mongoose:</strong> Using Prisma and Mongoose for database modeling and data manipulation in web applications.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Redux & Redux Thunk:</strong> Managing application state with Redux and handling asynchronous actions with Redux Thunk.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Git & GitHub:</strong> Version control with Git and collaborating on projects using GitHub.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Responsive Web Design:</strong> Designing mobile-first, responsive websites using CSS, Bootstrap, and Flexbox.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Database Management:</strong> Experience with SQL, MongoDB, and NoSQL databases for data storage and retrieval.</li>
                    <li className={styles.listItem}><strong className={styles.boldText}>Problem-Solving & Algorithm Design:</strong> Strong analytical skills in problem-solving and designing efficient algorithms for better performance.</li>
                </ul>
            </div>

            <div className={styles.contact}>
                <h2 className={styles.contactText}>🤝 Lets connect and explore how we can work together to create amazing digital experiences!</h2>
            </div>
        </div>
    );
}
