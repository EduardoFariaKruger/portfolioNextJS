import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <html className={styles.container}>
      <Navbar />
      <div>
        <h1 className={styles.title}>
          <strong>
            Hello! My name is Eduardo Faria Krüger
            <br />
            Im a Junior Developer
            <br />
            Im sixteen years old
            <br />
          </strong>
        </h1>
      </div>
    </html>
  );
};

export default Home;
