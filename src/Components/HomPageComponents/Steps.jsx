import { Text,Box,Container,Image } from "@chakra-ui/react"
export default function Steps(){
    return(
        <div style={{textAlign:"center"}}>
            <br />
                <br />
            <Text fontSize='4xl' style={{textAlign:"center"}}>Weight Loss Made Easy</Text>
       <Box  style={{display:"flex",width:"65%",margin:"auto",marginTop:"20px"}} >
        <Container >
            <Text fontSize='2xl' color='tomato'>Set Your Goals</Text>
            <Image
            style={{marginLeft:"70px"}}
    boxSize='150px'
    objectFit='cover'
    src='https://assets.loseit.com/website/home/Home_SetGoal.svg'
    alt='Dan Abramov'
  />
  <Text fontSize='md'>Tell us what you want to acheive and receive personalized goals.</Text>
        </Container>
        <Container>
        <Text color='tomato' fontSize='2xl' >Track Your Food</Text>
            <Image
            style={{marginLeft:"70px"}}
    boxSize='150px'
    objectFit='cover'
    src='https://assets.loseit.com/website/home/Home_TrackFoods.svg'
    alt='Dan Abramov'
  />
  <Text fontSize='md'>Learn about the foods you’re eating and keep your calories within your daily budget.</Text>
        </Container>
        
        <Container>
        <Text fontSize='2xl' color='tomato'>Lose Weight</Text>
            <Image
            style={{marginLeft:"70px"}}
    boxSize='150px'
    objectFit='cover'
    src='https://assets.loseit.com/website/home/Home_LoseWeight.svg'
    alt='Dan Abramov'
  />
  <Text fontSize='md'>Reach your goals and continue to set new ones for a happier, healthier you!</Text>
        </Container>
        
        

       </Box>
        </div>
    )
}