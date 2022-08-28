import { Tabs, TabList, TabPanels, Tab, TabPanel,Image,Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <Box mt={-10} style={{display:"flex",justifyContent:"space-around",alignContent:"space-around"}}>
<Image
boxSize='250px'
// objectFit='cover'
mt={-5}
src='https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg'
alt='Dan Abramov'
/>

<Button  size='md'
height='48px'
width='130px'
mt={65}
colorScheme='orange'> <Link to="/login">Login</Link></Button>

        </Box>
       
    )
}


