import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
const Index = () => {
  return (
    <>
    <Head>
      <title>NinjaList | Home</title>
    </Head>
    <div className={styles.title}>
      <br />
      <h1>Main Index, welcome to my site</h1>
      <p className={styles.text}>lorem ipsum dolor sit amet</p>
      <Link href="../ninjas" className={styles.btn}>
        View listing
      </Link>
      <br />
    </div>
    </>
  );
};

export default Index;
