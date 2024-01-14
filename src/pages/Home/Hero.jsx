import AnimateGlobe from "./AnimateGlobe";
import "./css/Hero.css"
import HeroTxt from "./HeroTxt";

function Hero() {
    return(
            <div className="Hero">
            
            <HeroTxt/>
            <AnimateGlobe/>
            </div>
    )
}

export default Hero;