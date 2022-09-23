import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import image_5  from '../assets/image_5.png';
import image_6  from '../assets/image_6.png';

function Treatments() {
  return (
    <Container className='my-5 py-5'>
        <h1>Treatments & Services</h1>
        <Row className='my-5'>
            <Col>
                <h5 className='card_header_1'>
                Male Fertility Problems
                </h5>
                <div className='card_body_1'>
                    <h6>Azoospermia</h6>
                    <h6>Varicocele</h6>
                    <h6>Hydrocele</h6>
                    <h6>Undescended Testis</h6>
                    <h6>Kh6nefelter Syndrome</h6>
                </div>
            </Col>

            <Col>
                <h5 className='card_header_2'>
                Male Fertility Problems
                </h5>
                <div className='card_body_2'>
                    <h6>Azoospermia</h6>
                    <h6>Varicocele</h6>
                    <h6>Hydrocele</h6>
                    <h6>Undescended Testis</h6>
                    <h6>Kh6nefelter Syndrome</h6>
                </div>    
            </Col>

            <Col>
                <img alt='#' src={image_5} width= '300' />
            </Col>
        </Row>

        <Row className='my-5'>
            <Col>
                <img alt='#' src={image_6} width= '300' />
            </Col>

            <Col>
                <h5 className='card_header_1'>
                Male Fertility Problems
                </h5>
                <div className='card_body_1'>
                    <h6>Azoospermia</h6>
                    <h6>Varicocele</h6>
                    <h6>Hydrocele</h6>
                    <h6>Undescended Testis</h6>
                    <h6>Kh6nefelter Syndrome</h6>
                </div>     
            </Col>

            <Col>
                <h5 className='card_header_2'>
                Male Fertility Problems
                </h5>
                <div className='card_body_2'>
                    <h6>Azoospermia</h6>
                    <h6>Varicocele</h6>
                    <h6>Hydrocele</h6>
                    <h6>Undescended Testis</h6>
                    <h6>Kh6nefelter Syndrome</h6>
                </div>         
            </Col>
        </Row>
        <Row className='background_2 my-5 py-5'>
            <Col>
                <h2>Reach for your dreams in experienced hands.</h2>
            </Col>
            <Col>
                <Button>Call Us</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Treatments