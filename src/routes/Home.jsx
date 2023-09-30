import styles from '../styles/Home.module.css';

const Home = () => {
  const tagLine = 'Welcome to our page!';
  const homeDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, qui iure nulla voluptatem totam beatae sequi, praesentium sint nesciunt exercitationem perspiciatis corporis velit, alias reiciendis facilis veniam minima fuga error.';
  const homeDescription2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, qui iure nulla voluptatem totam beatae sequi, praesentium sint nesciunt exercitationem perspiciatis corporis velit, alias reiciendis facilis veniam minima fuga error.';

  return (
    <div className={styles.homeStyling}>
      <h1>{tagLine}</h1>
      <div className={styles.parDiv}>
        <p>{homeDescription}</p>
        <p>{homeDescription2}</p>
      </div>
    </div>
  );
};
export default Home;
