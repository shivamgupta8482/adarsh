import { HStack,Button,Image,Text } from "@chakra-ui/react"
import styles from "./Header.module.css"


export default function GetStarted(){
   
    return(
       <div>
        
             <section className={styles.getStarted}>
             <Text fontSize='2xl' color="orange">Get Started on Mobile</Text>
             <br />
             <br />
            
      <div style={{display:"flex",justifyContent:"center"}}>
      <a href="/get/apple/" className={styles.getStarteda}>
            <img className={styles.getStartedimg} src="https://assets.loseit.com/website/home/Download_Apple.svg" alt="App Store"/>
        </a>
        <a href="/get/android/" className={styles.getStarteda}>
            <img className={styles.getStartedimg} src="https://assets.loseit.com/website/home/Download_GooglePlay.svg" alt="google play store"/>
        </a>
      </div>
    </section>
       </div>
        
    )
}