import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <Container>
        <Row>
            <Col>
            <img alt='' src={logo} width='300' />
            <p>Being A Father Is Everyone’s Right!</p>
            </Col>

            <Col>
            <h4>CONTACT US</h4>
            <h6>Merkez Mahallesi, Abide-i Hürriyet Cad. No:171/8, 34384 Sisli Istanbul/Turkey</h6>
            <h6>info@arpanumedical.com</h6>
            <h6>+90 541 760 10 26</h6>
            </Col>

            <Col>
                <h4>NEWSLETTER</h4>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Footer