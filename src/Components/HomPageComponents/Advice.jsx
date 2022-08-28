import styles from "./Header.module.css"
import {Heading,Button} from "@chakra-ui/react"

export default function Advice(){
    return(
        <div >
            <br />
            <br />
             <section className={styles.advice}>
       
        <Heading  className={styles.adviceh2}>Advice from Successful Members</Heading>
        <div className={styles.adviceflex}>
            <div className={styles.adviceflexElement}>
                <center><img className={styles.adviceimg} src="https://assets.loseit.com/website/home/Advice_Carla.png" alt="Carla"/></center>
                <p className={styles.advicep}>Track every single bite you take. You need to know how you’re doing before dinner. If you don’t,
                    things can get away from you fast."</p>
                <span className={styles.adviceflexElement}>- Carla, 65 lbs lost without giving up pizza.</span>
            </div>
            <div className={styles.adviceflexElement}>
                <center><img className={styles.adviceimg} src="https://assets.loseit.com/website/home/Advice_Alex.png" alt="alex"/></center>
                <p className={styles.advicep}>Everyday is a battle, and you have to make the choice each morning to fight for your health and
                    wellness"</p>
                <span className={styles.adviceflexElement}>- Alex, lost 85 lbs for his wedding.</span>
            </div>

        </div>
        {/* <a href="/memberstories/" target="_blank" class="button">Share Your Story</a> */}
        <br />

        <Button  size='md'
  height='48px'
  width='200px'
  border='2px' colorScheme='orange'  color="white">Share Your Story</Button>
    </section>
        </div>
    )
}