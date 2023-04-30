import Link from "next/link";
import styles from "src/styles/Ninja.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(typeof(response));
  const data = await response.json();
  return {
    props: {
      ninjas: data
    },
  };
};
const NinjaIndex = ({ ninjas }) => {
  return (
    <div className={styles.body}>
      <br />
      <h1>All Ninjas:</h1>
      <br />
        {ninjas.map((ninja) => (
          <Link  className= {styles.single} href={'/ninjas/'+ninja.id} key={ninja.id}>
          {ninja.name}
          </Link>
        ))}
    </div>
  );
};

export default NinjaIndex;
