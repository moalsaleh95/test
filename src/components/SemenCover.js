import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function SemenCover() {
  return (
    // <Container className='d-flex justify-content-center my-5' 
    // style={{"background-color":"#AED9ED", "padding":"2.5rem 0"}}>
    //     <Row className=''>
    //         <Col lg={4} className='' style={{"padding":"0 5rem", "margin-top":"1rem"}}>
    //             <h1 className='ps-2 circle' >25+</h1>
    //             <p className='ps-2 text '>Years of On-going Experience</p>
    //         </Col>
    //         <Col lg={4} className='' style={{"padding":"0 5rem", "margin-top":"1rem"}}>
    //             <h1 className='ps-2 circle'>70+</h1>
    //             <p className='ps-2 text'>Countries Worldwide</p>
    //         </Col>
    //         <Col lg={4} className='' style={{"padding":"0 5rem", "margin-top":"1rem"}}>
    //             <h1 className='ps-2 circle'>1600+</h1>
    //             <p className='ps-2 text'>MicroTESE Performed</p>
    //         </Col>
    //     </Row>
    // </Container>


    <Container fluid style={{"background-color":"#AED9ED", "padding":"2.5rem 0"}} className='mx-auto'>
    <Row className='screen-width mx-auto border gy-3 d-flex flex-row' style={{"align-items":"baseline"}}>
        <Col  className='border ' >
            <h1 className='ps-2 circle mx-auto' >25+</h1>
            <p className='ps-2 text  text-center' style={{"transform": "translateX(20%)"}}>Years of On-going Experience</p>
        </Col>
        <Col  className='border ' >
            <h1 className='ps-2 circle mx-auto'>70+</h1>
            <p className='ps-2 text text-center' style={{"transform": "translateX(12%)"}}>Countries Worldwide</p>
        </Col>
        <Col  className='border ' >
            <h1 className='ps-2 circle mx-auto'>1600+</h1>
            <p className='border text-center ps-2 text' style={{"transform": "translateX(8%)"}}>MicroTESE Performed</p>
        </Col>

    </Row>
    </Container>    
  )
}

export default SemenCover