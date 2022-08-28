import { Image,Text } from "@chakra-ui/react";

export default function Cardlist({src,text,width}){
    return(
        <div >
           <Image
           style={{padding:"20px",width:`${width}`}}
  
      src={src}
      alt='Dan Abramov'
    />
    <Text fontSize='md'>{text}</Text>
  
        </div>
      )
}