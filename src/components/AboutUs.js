import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import aboutUs from '../assets/image_3.png';
import Button from 'react-bootstrap/Button';

function AboutUs() {
  return (
    <Container>
        <Row className='my-5 py-5'>
            <Col>
                <img alt='aboutUs' src={aboutUs} width='500' />
            </Col>
            <Col>
                <h3 className='primary-font-color'>About Us</h3>
                <p>We are a private Andrology & Fertility Center in Istanbul
                    providing comprehensive care in every aspect
                    of fertility-related problems such as azoospermia and
                    varicocele as well as male sexual health conditions
                    including erectile dysfunction
                    (ED) ejaculation disorders, and more.
                    <br></br>
                    <Button className='primary-bg-color'>Contact Us</Button>
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutUs