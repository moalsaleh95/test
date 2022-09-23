import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar'
import HeroSection from './components/HeroSection';
import Sponsors from './components/Sponsors';
import Appointments from './components/Appointments';
import AboutUs from './components/AboutUs';
import SemenCover from './components/SemenCover';
import Treatments from './components/Treatments';
import Team from './components/Team';
import Prices from './components/Prices';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Sponsors />
      <Appointments />
      <AboutUs />
      <SemenCover />
      <Treatments />
      <Team />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
