import Carousel, { CarouselItem } from "./Courosel.js";
import { Image,Text,Button } from "@chakra-ui/react";
import Card from "../Othercourosel/Card.jsx";
import Card1 from "../Othercourosel/Card1.jsx";
import Card2 from "../Othercourosel/Card2.jsx";
import styles from "./Courosel.css"
import { PhoneIcon, AddIcon, WarningIcon,ChevronLeftIcon } from '@chakra-ui/icons'

export default function Application() {

  function data(src,text){
   
  }

  return (
   <div>



     {/* <div style={{width:"85%",margin:"auto",display:"flex",alignContent:"center",alignItems:"center",gap:"-20px"}}>
    
    
    </div> */}
<br />
<Text style={{textAlign:"center",fontSize: "2em",color: "#183962"}}>A Balanced Approach to Weight Loss</Text>
<Text fontSize='3xl' style={{textAlign:"center",fontSize:"20px",color: "#808284"}}>Get motivated with these nutrition and wellness tips and user success stories!</Text>

      <Carousel>
      
        <CarouselItem 
        children={<Card />}
        width={"20px"}
        />
    
        
        <CarouselItem 
        children={<Card2 />}
        width={"20px"}
        />
        
      
        <CarouselItem 
        children={<Card2 />}
        width={"20px"}
        />
         
       
      </Carousel>

     
    <center>  <Button colorScheme='facebook' >Grt Weight Lost Tips</Button></center>
      
    </div>
  
  );
}
