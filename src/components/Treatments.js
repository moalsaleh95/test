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

        <Row className='my-3 d-flex flex-wrap gy-3'  >
            <Col lg='4' xs='6' className='card_body_1 border-rad-25' >
                <h5 className='card_header_1 border-primary text-center py-3'>
                Male Fertility Problems
                </h5>
                <div className='px-5 '>
                    <h6 className='lh-lg font-control'>Azoospermia</h6>
                    <h6 className='lh-lg font-control'>Varicocele</h6>
                    <h6 className='lh-lg font-control'>Hydrocele</h6>
                    <h6 className='lh-lg font-control'>Undescended Testis</h6>
                    <h6 className='lh-lg font-control'>Klinefelter Syndrome</h6>
                </div>
            </Col>

            <Col  lg="4" xs='6' className='card_body_2 border-rad-25'>
                <h5 className='card_header_2 text-center py-3'>
                Male Fertility Treatments
                </h5>
                <div className='px-5'>
                    <h6 className='lh-lg font-control'>Micro-TESE</h6>
                    <h6 className='lh-lg font-control'>Tesa / Pesa</h6>
                    <h6 className='lh-lg font-control'>Microsurgical Varicocele Op.</h6>
                    <h6 className='lh-lg font-control'>Tur Ed</h6>
                    <h6 className='lh-lg font-control'>Vasectomy</h6>
                    <h6 className='lh-lg font-control'>Vasovasostomy</h6>
                </div>    
            </Col>

            <Col lg='4' xs='12' className=''>
                <img className='border-rad-25 img-fluid' alt='#' src={image_5} 
                // style={{"width": "auto", "max-width": "450px"}}
                // width= 'auto'
                 />
            </Col>
        </Row>
        

        <Row className='my-2 gy-3 '>
            <Col lg='4' xs='12' className=''>
                <img className='border-rad-25 img-fluid' alt='#' src={image_6} 
                // width= 'auto'
                // style={{"width": "auto", "max-width": "450px"}}
                 />
            </Col>

            <Col lg='4' xs='6' className='card_body_1 border-rad-25 '>
                <h5 className='card_header_1 text-center py-3'>
                Sexual Dyfunction & Disorders
                </h5>
                <div className='px-5'>
                    <h6 className='lh-lg font-control'>Erectile Dysfunction</h6>
                    <h6 className='lh-lg font-control'>Penile Curvature</h6>
                </div>     
            </Col>

            <Col md='4' xs='6'  className='card_body_2 border-rad-25 '>
                <h5 className='card_header_2 text-center py-3'>
                Treatments For Sexual Dyfunction & Disorders
                </h5>
                <div className='px-5'>
                    <h6 className='lh-lg font-control'>Penile Prosthesis</h6>
                    <h6 className='lh-lg font-control'>Low-intensity Extracorporeal Shock Wave Therapy</h6>
                    <h6 className='lh-lg font-control'>İntracavernosal Injection Therapy</h6>
                    <h6 className='lh-lg font-control'>Penile Curvature Surgery</h6>
                    <h6 className='lh-lg font-control'>Vacuum Device</h6>
                </div>         
            </Col>
        </Row>
        </Container>


        <Container className='text-center'>
        <Row style={{"background-color":"#4799C4"}} className='border-rad-25 my-5 py-5 text-white'>
            
            <Col>
                <h2 style={{"text-align":"left", "margin-left":"5vw", "margin-b":"5vw"}} >Reach for your dreams in experienced hands.</h2>
            </Col>
            <Col>
                <Button className='' style={{"background-color":"white", "color":"#4799C4", "border-color":"white" ,"border-radius":"50px", "padding":"1rem 6rem","margin-top":"1.5rem", "font-size":"1.5rem", "font-weight": "600","white-space": "nowrap"}}>Call Us</Button>
            </Col>
        </Row>
        </Container>
    </Container>
    
  )
}

export default Treatments