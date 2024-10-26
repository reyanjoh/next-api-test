import Image from "next/image";
import styles from "./page.module.css";


const getTeam = async () =>{
  const res = await fetch(`/api/hello`)
  return res.json()  
}

export default async function Home() {


  

const team = await getTeam()

  return (
    <main className={styles.main}>

        {team.map(team =>{
          return(
            <a key={team._id} href={`/staff/${team._id}`} className={styles.teamProfileCard}>
              <div className={styles.teamProfile}>
                <img src={team.profile} alt="" />
              </div>
              <div className={styles.teamInfo}>
              <span className={styles.teamInfoSpanName}>{team.fName}, {team.lName}</span>
              <span className={styles.teamInfoSpan}>{team.branchLocation}</span>
              </div>
            </a>
          )
        })}
        {/* {{team.map(team =>{                  
          return(
            <a key={team._id} href={`/staff/${team._id}`} className={styles.teamProfileCard}>
              <div className={styles.teamProfile}>
                <img src={team.profile} alt="" />
              </div>
              <div className={styles.teamInfo}>
              <span className={styles.teamInfoSpanName}>{team.fName}, {team.lName}</span>
              <span className={styles.teamInfoSpan}>{team.branchLocation}</span>
              </div>
            </a>
          )
        })}} */}
    </main>
  );
}
