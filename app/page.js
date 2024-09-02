import Image from "next/image";
import styles from "./page.module.css";
import Page from "./dashboard/page.js"

export default function Home() {
  return (
    <main className={styles.main}>

     <Page/>

    </main>
  );
}
