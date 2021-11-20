import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

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
}

export default Home;
