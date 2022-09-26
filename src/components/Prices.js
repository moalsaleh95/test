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
    <Container className='py-5 '>
        <Row style={{"margin":"0 70px"}}>
            <Col lg={6} style={{"position":"relative", "border-radius": "25px", "background-color":"#EAF5FC"}}>
                
                <img style={{"position":"absolute", "left":"220px", "bottom":"475px"}} alt='' src={image_12} width='140' />
                <br></br>
                
                <img alt='' src={turkey} width='50' style={{"margin-bottom":"0.5rem"}} />
                <h2>Turkey</h2>
                <h6>Save up to %30 by getting your</h6>
                <h1 className='my-3'>Urology in Turkey</h1>
                <hr/>
                <h6>✔️ Lorem ipsum dolor</h6>
                <hr/>
                <h6>✔️ Consectetuer adipiscing</h6>
                <hr/>
                <h6>✔️ Rhoncus mattis</h6>

                <Button className='primary-bg-color' style={{"padding":"1rem 7rem","margin":"2rem" , "border-radius":"50px"}}>GET STARTED NOW</Button>
            </Col>

          
            <Col lg={6} className=' border-rad-25 shadow h-50' style={{"padding":"3rem", "margin-top":"4.5rem"}}>
            <img alt='' src={uk} width='50' style={{"margin-bottom":"0.5rem"}} />
            <br></br>
            <h2>UK</h2>
            <h6>Duis feugiat rutrum lectus, non condimentum enim condimentum sed.</h6>
            <h1>$59.99</h1>
            <h6 className='text-secondary'>per month</h6>
            </Col>
 
        </Row>
    </Container>
  )
}

export default Prices