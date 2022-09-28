import React from 'react'
import Button from 'react-bootstrap/Button'
import Cards from './Cards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Appointments() {
  return (
    <Container style={{"background-color":"#F4FBFF", "border-radius":"25px"}} >
        <Row className='mx-5 pb-5 g-5 mt-4'>
          
        {/* , "padding":"3rem 0rem", "margin":"3rem auto" */}
          {/* <div className='d-flex justify-content-between py-4'  >
              <h3 className=' primary-font-color'>Most Advanced Technology</h3>
              <Button style={{"border-radius":"25px" , "padding":"0.8rem"}} className='primary-bg-color'>Make An Appointment</Button>
          </div> */}

          <Col md={3} gap={3}><h3 className='general-font-adjust primary-font-color'>Most Advanced Technology</h3></Col>
          <Col md={6}></Col>
          <Col md={3}><Button style={{"border-radius":"25px" , "padding":"0.8rem"}} className='general-font-adjust primary-bg-color'><h5 className='general-font-adjust'>Make An Appointment</h5></Button></Col>

        </Row>

        {/* <Row className='d-flex justify-content-between' style={{"position":"absolute", "clear":"both"}}>
           
        </Row> */}
        <Row className='d-flex justify-content-between'><Cards /></Row>
        


       
    </Container>
  )
}

export default Appointments
