import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import image_8 from '../assets/image_8.png';
import image_9 from '../assets/image_9.png';
import image_10 from '../assets/image_10.png';
import image_11 from '../assets/image_11.png';

function Team() {
  return (
    <Container className='team_background my-5 py-5  mx-auto'>

        <Container className='my-5 d-flex justify-content-start'>
        <Row className='mx-2'><h2 className='mb-5'>Meet Our Great Team</h2></Row>
        </Container>

        <Container className='my-5 '>
        <Row >
            <Col lg='3' xs='6' className=''>
                <img alt='' src={image_8} max-width='270' width='240' className='mb-4 border-rad-25 img-fluid' />
                <h6 style={{"font-size":"15px"}}>PROF. DR. MEHMET MURAD BAŞAR</h6>
                <p style={{"font-size":"12px"}}>Urology & Andrology & Senior Infertility Specialist</p>
            </Col >

            <Col lg='3' xs='6' className=''>
                <img alt='' src={image_9} max-width='270' width='240' className='mb-4 border-rad-25 img-fluid' />
                <h6 style={{"font-size":"15px"}}>AHMET ÇOBAN</h6>
                <p style={{"font-size":"12px"}}>International Patient Coordinator</p>
            </Col>

            <Col lg='3' xs='6' className=''>
                <img alt='' src={image_10} max-width='270' width='240' className='mb-4 border-rad-25 img-fluid' />
                <h6 style={{"font-size":"15px"}}>EMİNE COŞKUN</h6>
                <p style={{"font-size":"12px"}}>Patient Relations Manager</p>
            </Col>

            <Col lg='3' xs='6' className=''>
                <img alt='' src={image_11} max-width='270' width='240' className='mb-4 border-rad-25 img-fluid' />
                <h6 style={{"font-size":"15px"}}>GIZEM COŞKUN</h6>
                <p style={{"font-size":"12px"}}>Nurse</p>
            </Col>
        </Row>
        </Container>
    </Container>
  )
}

export default Team