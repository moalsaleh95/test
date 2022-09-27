import React from 'react'
import Button from 'react-bootstrap/Button'
import Cards from './Cards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Appointments() {
  return (
    // <Container style={{"background-color":"#F4FBFF","height":"15rem", "display": "block", "border-radius":"25px", "padding":"3rem 11rem", "margin":"3rem auto"}} >
    //     <Row className='mx-5 pb-5'>

    //       {/* <div className='d-flex justify-content-between py-4'  >
    //           <h3 className=' primary-font-color'>Most Advanced Technology</h3>
    //           <Button style={{"border-radius":"25px" , "padding":"0.8rem"}} className='primary-bg-color'>Make An Appointment</Button>
    //       </div> */}

    //       <Col xs={6}><h3 className=' primary-font-color'>Most Advanced Technology</h3></Col>
    //       <Col xs={6}><Button style={{"border-radius":"25px" , "padding":"0.8rem"}} className='primary-bg-color'>Make An Appointment</Button></Col>

    //     </Row>

    //     {/* <Row className='d-flex justify-content-between' style={{"position":"absolute", "clear":"both"}}>
           
    //     </Row> */}
    //     <Cards />


        <div 
        style={{"background-color":"#F4FBFF","min-height":"15rem", "display": "block", "border-radius":"25px", "padding":"3rem 11rem", "margin":"3rem auto"}}>
          <div className='d-flex flex-row justify-content-around'>
            <h3 className='primary-font-color'>Most Advanced Technology</h3>
            <Button style={{"border-radius":"25px" , "padding":"0.8rem"}} className='primary-bg-color'>Make An Appointment</Button>
          </div>

          <div className='my-5'>
            <Cards />
          </div>
        </div>
    // </Container>
  )
}

export default Appointments