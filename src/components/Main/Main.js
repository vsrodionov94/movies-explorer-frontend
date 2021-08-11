import Promo from './../Promo/Promo';
import AboutProject from './../AboutProject/AboutProject';
import Techs from './../Techs/Techs';
import AboutMe from './../AboutMe/AboutMe';
import Portfolio from './../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import Navigation from './../Navigation/Navigation';
import './Main.css';

const Main = ({ loggedIn }) => {
  return (
    <section className = "main">
      {
        loggedIn ? <Navigation /> : <Header />
      }
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </section>
  )
};

export default Main;
