import { Image,Text } from "@chakra-ui/react";

export default function FeatureCardlist({src,text,width,heading}){
    return(
        <div >
         <center>
         <Image
           style={{padding:"20px",width:`${width}`}}
  
      src={src}
      alt='Dan Abramov'
    />
         </center>
        <center> <Text fontSize='xl'>{heading}</Text></center>
    <center><Text fontSize='sm'>{text}</Text></center>
  
        </div>
      )
}