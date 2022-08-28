import {Image,Heading} from "@chakra-ui/react"
import styles from "./Header.module.css"

export default function Numbers(){
    return(
        <center>
            <div style={{alignContent:"center"}}>
                <br />
                <br />
           <Image
    boxSize='250px'
    
    
    src='https://assets.loseit.com/website/home/Ticker_Celebratory.svg'
    alt='Dan Abramov'
  />
   <Heading as='h1'color="orange" size='4xl' noOfLines={1} className={styles.numbers}>
   122,714,526
  </Heading>
  <br />
                
  <Heading as='h2' size='lg' className={styles.pounds}>
   POUNDS LOST
  </Heading>
  <br />
  <hr className={styles.hr1}/>


  <Heading>As Seen On</Heading>

  <div className={styles.seenonLogos}>
            <img className={styles.image} src="https://assets.loseit.com/website/home/Feature_TodayShow.png" alt="today show" />
            <img className={styles.image} src="https://assets.loseit.com/website/home/Feature_People.png" alt="People magazine" />
            <img className={styles.image} src="https://assets.loseit.com/website/home/Feature_GoodMorningAmerica.png" alt="good morning america" />
            <img className={styles.image} src="https://assets.loseit.com/website/home/Feature_WomensHealth.png" alt="women's health" />
        </div>

        


           
        </div>
        </center>
    )
}