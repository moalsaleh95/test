import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import aboutUs from '../assets/image_3.png';
import Button from 'react-bootstrap/Button';

function AboutUs() {
  return (
    <Container className='py-5 about-translate'>
        <Row className=''>
            <Col lg={6}>
                <img alt='aboutUs' src={aboutUs} 
                // width='600vw' 
                // style={{"border-radius":"25px"}}
                style={{"border-radius":"25px","width": "100%","max-width": "800px", "height": "auto"}}
                />
            </Col>
            <Col style={{"text-align":"right"}}>
                <h3 className='primary-font-color pt-3'>About Us</h3>
                <p className='text-secondary'>We are a private Andrology & Fertility Center in Istanbul
                    providing comprehensive care in every aspect
                    of fertility-related problems such as azoospermia and
                    varicocele as well as male sexual health conditions
                    including erectile dysfunction
                    (ED) ejaculation disorders, and more.
                    <br></br>
                    <Button className='primary-bg-color' style={{"border-radius":"25px", "padding":"11px 65px", "margin-top":"3rem"}}>Contact Us</Button>
                </p>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutUs