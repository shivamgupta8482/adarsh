import Advice from "../Components/HomPageComponents/Advice";
import Banner from "../Components/HomPageComponents/Banner";
import Blog from "../Components/HomPageComponents/Blog";
import Features from "../Components/HomPageComponents/Features";
import Footer from "../Components/HomPageComponents/Footer";
import GetStarted from "../Components/HomPageComponents/Getstarted";
import Header from "../Components/HomPageComponents/Header";
import Navbar from "../Components/HomPageComponents/Navbar";
import Numbers from "../Components/HomPageComponents/Numbers";
import Steps from "../Components/HomPageComponents/Steps";

export default function HomePage(){



    
    return(
        <div>
            <Banner />
            <Navbar />
            <Header />
            <Steps />
            <br />
    <br />
    <br />
            <Features />
            <br />
    
            <Numbers />
            <Advice />
            <Blog />
            <br />
            <GetStarted />
            <Footer />

         

        </div>
    )
} 