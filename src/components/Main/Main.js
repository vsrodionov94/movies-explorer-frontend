import Promo from './../Promo/Promo';
import AboutProject from './../AboutProject/AboutProject';
import Techs from './../Techs/Techs';
import AboutMe from './../AboutMe/AboutMe';
import Portfolio from './../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import './Main.css';

export default function Main(){
  return (
    <div className = "main">
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  )
}
