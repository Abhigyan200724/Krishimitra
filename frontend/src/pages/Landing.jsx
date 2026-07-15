import FeatureSection from "../components/landing/FreatureSection"
import HeroSection from "../components/landing/HeroSection"
import Languages from "../components/landing/Languages"
import Stats from "../components/landing/Stats"
import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"

function Landing(){
    return(
        <>
    <Navbar/>
   <br />
    <HeroSection/>
    <FeatureSection/>
    <Stats/>
    <Languages/>
    <Footer/>
        </>
    )
}

export default Landing