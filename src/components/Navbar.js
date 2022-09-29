import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
      <Navbar bg="white" expand="lg">
      <Container className=''>
        <Navbar.Brand href="#">

          <img alt='logo' src={logo} 
          // width="50%" 
          className='img-fluid navbar-image' 
          style={{"width": "100%", "max-width": "150px", "height": "auto"}} 
          />

          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Nav.Link href="#action2" style={{"border-radius":"25px", "font-size": "13px", "margin":"1rem 1em", "padding":"6px 1.5em"}} className='d-lg-none navbar-whatsapp-button text-white primary-bg-color'>WHATSAPP</Nav.Link>

          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="ms-auto">
            <Nav.Link style={{"color":"#005B8B"}} href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Services</Nav.Link>
                <Nav.Link href="#action2">Team</Nav.Link>
                <Nav.Link href="#action2" style={{"border-radius":"25px", "font-size": "20px", "margin":"0 1em"}} className='px-4 text-white primary-bg-color'>WHATSAPP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
  );
}

export default NavScrollExample;