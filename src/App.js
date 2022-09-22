import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar'
import HeroSection from './components/HeroSection';
import Sponsors from './components/Sponsors';
import Appointments from './components/Appointments';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Sponsors />
      <Appointments />
    </div>
  );
}

export default App;
