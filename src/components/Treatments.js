import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import image_5  from '../assets/image_5.png';
import image_6  from '../assets/image_6.png';

function Treatments() {
  return (
    <Container className='my-5 py-2 '>
        <h3 className='primary-font-color' style={{"text-align":"left"}}>Treatments & Services</h3>

        <Container className='d-flex justify-content-between flex-wrap flex_container' style={{"gap":"1rem"}}>

        <Row className='my-3 d-flex flex-wrap'  >
            <Col className='card_body_1 border-rad-25 border-dark me-3' >
                <h5 className='card_header_1 border-primary text-center py-3'>
                Male Fertility Problems
                </h5>
                <div className='px-5 '>
                    <h6 className='lh-lg'>Azoospermia</h6>
                    <h6 className='lh-lg'>Varicocele</h6>
                    <h6 className='lh-lg'>Hydrocele</h6>
                    <h6 className='lh-lg'>Undescended Testis</h6>
                    <h6 className='lh-lg'>Klinefelter Syndrome</h6>
                </div>
            </Col>

            <Col className='card_body_2 border-rad-25'>
                <h5 className='card_header_2 text-center py-3'>
                Male Fertility Treatments
                </h5>
                <div className='px-5'>
                    <h6 className='lh-lg'>Micro-TESE</h6>
                    <h6 className='lh-lg'>Tesa / Pesa</h6>
                    <h6 className='lh-lg'>Microsurgical Varicocele Op.</h6>
                    <h6 className='lh-lg'>Tur Ed</h6>
                    <h6 className='lh-lg'>Vasectomy</h6>
                    <h6 className='lh-lg'>Vasovasostomy</h6>
                </div>    
            </Col>

            <Col className=''>
                <img className='border-rad-25 ' alt='#' src={image_5} 
                style={{"width": "auto", "max-width": "450px"}}
                // width= 'auto'
                 />
            </Col>
        </Row>
        

        <Row className='my-2'>
            <Col  className=' '>
                <img className='border-rad-25' alt='#' src={image_6} 
                // width= 'auto'
                style={{"width": "auto", "max-width": "450px"}}
                 />
            </Col>

            <Col className='card_body_1 border-rad-25 me-3'>
                <h5 className='card_header_1 text-center py-3'>
                Sexual Dyfunction & Disorders
                </h5>
                <div className='px-5'>
                    <h6 className='lh-lg'>Erectile Dysfunction</h6>
                    <h6 className='lh-lg'>Penile Curvature</h6>
                </div>     
            </Col>

            <Col  className='card_body_2 border-rad-25 '>
                <h5 className='card_header_2 text-center py-3'>
                Treatments For Sexual Dyfunction & Disorders
                </h5>
                <div className='px-5'>
                    <h6 className='lh-lg'>Penile Prosthesis</h6>
                    <h6 className='lh-lg'>Low-intensity Extracorporeal Shock Wave Therapy</h6>
                    <h6 className='lh-lg'>İntracavernosal Injection Therapy</h6>
                    <h6 className='lh-lg'>Penile Curvature Surgery</h6>
                    <h6 className='lh-lg'>Vacuum Device</h6>
                </div>         
            </Col>
        </Row>
        </Container>


        <Container className='text-center'>
        <Row style={{"background-color":"#4799C4"}} className='border-rad-25 my-5 py-5 text-white'>
            
            <Col>
                <h2 style={{"text-align":"left", "margin-left":"5vw"}} >Reach for your dreams in experienced hands.</h2>
            </Col>
            <Col>
                <Button className='' style={{"background-color":"white", "color":"#4799C4", "border-color":"white" ,"border-radius":"50px", "padding":"1rem 7rem", "font-size":"1.5rem", "font-weight": "600"}}>Call Us</Button>
            </Col>
        </Row>
        </Container>
    </Container>
    
  )
}

export default Treatments