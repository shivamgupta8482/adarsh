import { Box,Image,Heading,Text,Button, Container } from "@chakra-ui/react"
import styles from "./Header.module.css"

export default function Header(){



    return(
<Box className={styles.header} style={{display:"flex"}} mt={-20} >
<Container maxW='850px' style={{display:"flex",justifyContent:"center"}}>
<Image
    
    style={{width:"31%",marginLeft:"100px"}}
    src='https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png'
    alt='Dan Abramov'
  />
</Container>
<Container maxW='850px'  style={{marginLeft:"-200px"}}>
<Heading size='lg' fontSize='50px' >
   Top Rated 
  </Heading>
  <Heading size='lg' fontSize='50px'>
    Weight Loss Plan
  </Heading>
  <Text fontSize='xl'>
   Track the foods you love and lose weight
  </Text>
  <Button size='lg' colorScheme='facebook' mt='24px'>
    Sign Up for free
  </Button>


</Container>

</Box>
    )
}