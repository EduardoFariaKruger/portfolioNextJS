import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <html className={styles.container}>
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
    </>
  );
}
