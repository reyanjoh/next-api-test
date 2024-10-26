import Image from "next/image";
import styles from "./page.module.css";


const getTeam = async () =>{
  const res = await fetch(`https://next-api-test-1da.pages.dev/api/hello`)
  return res.json()  
}

export default async function Home() {


  

const team = await getTeam()

  return (
    <main className={styles.main}>
      {console.log(team)}
    </main>
  );
}
