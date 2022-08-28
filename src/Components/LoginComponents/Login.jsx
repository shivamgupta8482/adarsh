import { Button, Container, Input, Spinner, Stack,Image,Text,Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineApple } from 'react-icons/ai';

export const Login = () => {
 
 const Apple=()=>{
    return(
      
       <AiOutlineApple size="1.5em" />
    )
 }

 

  return (
    <>

<br />
<br />
<br />

<center>
<Image
    // boxSize='150px'
    style={{width:"10%"}}
  
    src='https://my.loseit.com/LoseIt_Logo_FullColor.png'
    alt='Dan Abramov'
  />
</center>
<br />
<br />
<br />


      <Container maxW="md">
        <Stack>
            <h2>Email Address</h2>
           
          <Input
           
            placeholder="Enter email"
            focusBorderColor='orange.300'
          />
            <h2>Password</h2>
          <Input placeholder="Enter password" type="password"   focusBorderColor='orange.300'/>
          <br />
          <Button bgColor="orange" color="white">
            Log in
         
          </Button>
        </Stack>



      </Container>
      <br />
      <center><Text color="orange">Forgot your password?</Text></center>
     <center>  <Heading as='h6' size='xs'>Don't have an account? 
<span style={{color:"orange",bold:"light"}}> Create one now!</span></Heading></center>
<br />

    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
    <hr style={{border: "1px solid red",width:"200px"}} />
<Heading as='h6' size='xs' color="brown">OR</Heading>
    <hr style={{border: "1px solid red",width:"200px"}} />
    </div>
    <br />

   <center> <Button bgColor="black" color="white"  height='48px'
  width='400px' leftIcon={<Apple />}>
  Sign In With Apple
  </Button></center>

  <br />
  
  <center><Heading as='h6' size='xs'>Sign In with Facebook is no longer supported</Heading></center>
<center><h1 style={{color:"orange",padding:"10px"}}>Create a new password now!</h1></center>

    </>
  );
};
