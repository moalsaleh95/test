import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';

function NavScrollExample() {
  return (
    <Navbar style={{"background":"white"}} className="border border-danger" expand="lg">

      <Container  className="d-flex justify-content-between">
        <Row >
          <Col >
            <Navbar.Brand href="#">
              <img alt='logo' src={logo} width="300" />
            </Navbar.Brand>
          </Col>
          
          <Col>
            <Nav.Link href="#action2" style={{"border-radius":"25px", "font-size": "18px", "margin":"1rem 1em", "padding":"6px 1.5em"}} className='d-lg-none text-white primary-bg-color'>WHATSAPP</Nav.Link>
          </Col>

          <Col> 
            <Navbar.Collapse id="navbarScroll">
            {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Nav className="my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll> 
            <Nav.Link style={{"color":"#005B8B"}} href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#action2">Team</Nav.Link>
            <Nav.Link href="#action2" style={{"border-radius":"25px", "font-size": "20px", "margin":"0 1em"}} className='px-4 text-white primary-bg-color'>WHATSAPP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col> 

      </Row>

      </Container>

    </Navbar>
  );
}

export default NavScrollExample;