import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import image_12 from '../assets/image_12.png';
import turkey from '../assets/turkey.png';
import uk from '../assets/uk.png';
import Button from 'react-bootstrap/Button';

function Prices() {
  return (
    <Container className='py-5'>
        <Row>
            <Col>
                <img alt='' src={image_12} width='190' />
                <br></br>
                <h2>Turkey</h2>
                <img alt='' src={turkey} width='60' />
                <h6>Save up to %30 by getting your</h6>
                <h1>Urology in Turkey</h1>

                <h6>Lorem ipsum dolor</h6>
                <h6>Consectetuer adipiscing</h6>
                <h6>Rhoncus mattis</h6>

                <Button>GET STARTED NOW</Button>
            </Col>

            <Col>
            <img alt='' src={uk} width='60' />
            <br></br>
            <h2>UK</h2>
            <h6>Duis feugiat rutrum lectus, non condimentum enim condimentum sed.</h6>
            <h1>$59.99</h1>
            <h6>per month</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default Prices