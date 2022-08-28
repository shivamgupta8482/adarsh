import { Text,Button } from "@chakra-ui/react";
import UncontrolledExample12 from "./Othercourosel/Courosel";

export default function Blog(){
    return(
        <div>
    <br />
    <br />
    <br />

  <center>
    <div>
    <Text fontSize='3xl' color="#183962">A Balanced Approach to Weight Loss</Text>
    <Text fontSize='xl' color="#808284">Get motivated with these nutrition and wellness tips and user success stories!</Text>
    </div>
  </center>
<br />


  <UncontrolledExample12 />
   <br />
   <br />
   <center><Button colorScheme='facebook'>Get Weight Loss Tips</Button></center>
   <br />
        </div>
    )
}