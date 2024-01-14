import "./css/Home.css";
import Header from "../../components/Header";
import Hero from "./Hero";
import Jtex from "./Jtex";
import TxtSect from "./TxtSect";
import GridLayout from "./GridLayout";
import TextSlider from "./TextSlider";
import DarkSect from "./DarkSect";
import BtmTxtSect from "./BtmTxtSect";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Jtex />
      <TxtSect />
      <GridLayout />
      <TextSlider />
      <DarkSect />
      <BtmTxtSect />
      <Footer />
    </div>
  );
}

export default Home;
