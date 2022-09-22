import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className='justify-content-center'>
        <div className='container' >
      <Container fluid>
       

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

    
            
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
 
    
             <Navbar.Brand href="#">
            <img alt='logo' src={logo} width="150" />
        </Navbar.Brand>



            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Team</Nav.Link>
            <Nav.Link href="#action2"
            className='rounded text-white primary-bg-color'
            >WHATSAPP</Nav.Link>



          </Nav>
 
        </Navbar.Collapse>
      </Container>
      </div>
    </Navbar>
  );
}

export default NavScrollExample;