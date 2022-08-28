import Carousel from 'react-bootstrap/Carousel';

import Cardlist from './Cardlist';
import FeatureCardlist from './FeatureCard';

export default function Cardslot({src1,heading1,text1,src2,heading2,text2}){
    return(
        
     
      <div style={{display:"flex",width:"70%",margin:"auto",gap:"40px",padding:"20px",borderRadius:"10px",paddingTop:"30px",paddingBottom:"100px"}}>
<div style={{backgroundColor:"white",padding:"20px",borderRadius:"10px",height:"275px"}}>
<FeatureCardlist 
heading={heading1}
width="40%"
src={src1}
text={text1}
/>
</div >
<div style={{backgroundColor:"white",padding:"20px",borderRadius:"10px",height:"275px"}}>
<FeatureCardlist 
heading={heading2}
width="35%"
src={src2}
text={text2}
/>
</div >



       </div>
   
    )
}