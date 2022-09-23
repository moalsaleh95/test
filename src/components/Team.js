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
    <Container  className='team_background my-5 py-5'>
        <Row><h2 className='mb-5'>Meet Our Great Team</h2></Row>
        <Row>
            <Col>
                <img alt='' src={image_8} width='300' className='mb-4' />
                <h6>PROF. DR. MEHMET MURAD BAŞAR</h6>
                <p>Urology & Andrology & Senior Infertility Specialist</p>
            </Col>

            <Col>
                <img alt='' src={image_9} width='300' className='mb-4' />
                <h6>AHMET ÇOBAN</h6>
                <p>International Patient Coordinator</p>
            </Col>

            <Col>
                <img alt='' src={image_10} width='300' className='mb-4' />
                <h6>EMİNE COŞKUN</h6>
                <p>Patient Relations Manager</p>
            </Col>

            <Col>
                <img alt='' src={image_11} width='300' className='mb-4' />
                <h6>Jenna Doe</h6>
                <p>Nurse</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Team