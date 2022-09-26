import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function SemenCover() {
  return (
    <div className='d-flex justify-content-around my-5' style={{"background-color":"#AED9ED", "display": "inline-block", "padding":"2.5rem 0"}}>
        <Row className=''>
            <Col className='' style={{"padding":"0 5rem"}}>
                <h1 className='ps-2 circle' >25+</h1>
                <p className='ps-2 text'>Years of On-going Experience</p>
            </Col>
            <Col style={{"padding":"0 5rem"}}>
                <h1 className='ps-2 mt-n5 circle'>70+</h1>
                <p className='ps-2 text'>Countries Worldwide</p>
            </Col>
            <Col style={{"padding":"0 5rem"}}>
                <h1 className='ps-2 circle'>1600+</h1>
                <p className='ps-2 text'>MicroTESE Performed</p>
            </Col>
        </Row>
    </div>
  )
}

export default SemenCover