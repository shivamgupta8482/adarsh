import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardlist from './Othercourosel/Cardlist';
import FeatureCardlist from './Othercourosel/FeatureCard';
import Cardslot from './Othercourosel/Featurecardslot';

function Features() {
  return (
 <div style={{backgroundColor:"#f1f1f1"}}>
   


<Carousel variant='dark'  visibility="hidden" style={{width:"80%",margin:"auto"}}>
<Carousel.Item>
     
   <Cardslot
   src1="https://assets.loseit.com/website/home/Features_DeviceIntegration.svg"
   src2="https://assets.loseit.com/website/home/Features_PatternsReports.svg"
   text1="Connect Apple Health and Google Fit for easy exercise tracking."
   text2="Get reports on your behaviors and progress straight to your inbox."
   heading1="Device Integration"
   heading2="ddddddddd"
   
   
   
   />

</Carousel.Item>
     

   <Carousel.Item>
   <Cardslot
   src1="https://assets.loseit.com/website/home/Features_Barcode.svg"
   src2="https://assets.loseit.com/website/home/Features_SnapIt.svg"
   text1="Use your camera to scan package barcodes for quick tracking or create new foods with the nutrition label auto-fill."
   text2="Use your camera to take a picture of your food and allow Lose It! technology to help you log it."
   heading1="Scanner Feature"
   heading2="Smart Camera"
   
   
   
   />

   </Carousel.Item>

<Carousel.Item>
<Cardslot
   src1="https://assets.loseit.com/website/home/Features_WaterTracking.svg"
   src2="https://assets.loseit.com/website/home/Features_Macros.svg"
   text1="Track your water intake to make sure you're getting the recommended amount daily."
   text2="Set personalized macronutrient goals to ensure you’re getting enough protein, carbs, and more."
   heading1="Water Tracking"
   heading2="Macro Tracking"
   
   
   
   />

</Carousel.Item>

  
 
     
   </Carousel>

 </div>
  );
}

export default Features;