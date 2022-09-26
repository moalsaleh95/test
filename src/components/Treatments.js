import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import image_5  from '../assets/image_5.png';
import image_6  from '../assets/image_6.png';
import Card from 'react-bootstrap/Card';

function Treatments() {
  return (
    <Container className='my-5 py-2 '>
        <h3 className='primary-font-color' style={{"text-align":"left"}}>Treatments & Services</h3>
        <Container className='d-flex justify-content-center'>
        <Row className='my-5 '>
            <Col lg={3} className='card_body_1 border-rad-25 border-dark' >
                <h5 className='card_header_1 border-primary text-center py-3'>
                Male Fertility Problems
                </h5>
                <div className='px-5'>
                    <h6 className='lh-base'>Azoospermia</h6>
                    <h6 className='lh-base'>Varicocele</h6>
                    <h6 className='lh-base'>Hydrocele</h6>
                    <h6 className='lh-base'>Undescended Testis</h6>
                    <h6 className='lh-base'>Klinefelter Syndrome</h6>
                </div>
            </Col>

            <Col lg={3} className='card_body_2 border-rad-25'>
                <h5 className='card_header_2 text-center py-3'>
                Male Fertility Treatments
                </h5>
                <div className='px-5'>
                    <h6 className='lh-base'>Micro-TESE</h6>
                    <h6 className='lh-base'>Tesa / Pesa</h6>
                    <h6 className='lh-base'>Microsurgical Varicocele Op.</h6>
                    <h6 className='lh-base'>Tur Ed</h6>
                    <h6 className='lh-base'>Vasectomy</h6>
                    <h6 className='lh-base'>Vasovasostomy</h6>
                </div>    
            </Col>

            <Col lg={5} className='border'>
                <img className='border-rad-25 border' alt='#' src={image_5} 
                // style={{"width": "auto", "height": "100%", "max-width": "100%"}}
                width= '250'
                 />
            </Col>
        </Row>
        </Container>

        <Row className='my-2'>
            <Col lg={5}  className='border'>
                <img className='border-rad-25 border' alt='#' src={image_6} 
                width= '250'
                // style={{"width": "auto", "height": "100%", "max-width": "100%"}}
                 />
            </Col>

            <Col lg={3} className='card_body_1 border-rad-25 '>
                <h5 className='card_header_1 text-center py-3'>
                Sexual Dyfunction & Disorders
                </h5>
                <div className='px-5'>
                    <h6 className='lh-base'>Erectile Dysfunction</h6>
                    <h6 className='lh-base'>Penile Curvature</h6>
                </div>     
            </Col>

            <Col lg={3}  className='card_body_2 border-rad-25 '>
                <h5 className='card_header_2 text-center py-3'>
                Treatments For Sexual Dyfunction & Disorders
                </h5>
                <div className='px-5'>
                    <h6 className='lh-base'>Penile Prosthesis</h6>
                    <h6 className='lh-base'>Low-intensity Extracorporeal Shock Wave Therapy</h6>
                    <h6 className='lh-base'>İntracavernosal Injection Therapy</h6>
                    <h6 className='lh-base'>Penile Curvature Surgery</h6>
                    <h6 className='lh-base'>Vacuum Device</h6>
                </div>         
            </Col>
        </Row>

        <Container className='text-center'>
        <Row style={{"background-color":"#4799C4"}} className='border-rad-25 my-5 py-5 text-white'>
            
            <Col>
                <h2 style={{"text-align":"left"}} >Reach for your dreams in experienced hands.</h2>
            </Col>
            <Col>
                <Button className='' style={{"background-color":"white", "color":"#4799C4", "border-color":"white" ,"border-radius":"50px", "padding":"1rem 7rem", "font-size":"1.5rem", "font-weight": "600"}}>Call Us</Button>
            </Col>
        </Row>
        </Container>
    </Container>

//     <div class="grid-container">
//         <div class="item1">
//         <div lg={3} className='card_body_1 border-rad-25 border-dark' >
//                 <h5 className='card_header_1 border-primary text-center py-3'>
//                 Male Fertility Problems
//                 </h5>
//                 <div className='px-5'>
//                     <h6 className='lh-base'>Azoospermia</h6>
//                     <h6 className='lh-base'>Varicocele</h6>
//                     <h6 className='lh-base'>Hydrocele</h6>
//                     <h6 className='lh-base'>Undescended Testis</h6>
//                     <h6 className='lh-base'>Klinefelter Syndrome</h6>
//                 </div>
//             </div>
//         </div>
//         <div class="item2"><div  className='card_body_2 border-rad-25'>
//                 <h5 className='card_header_2 text-center py-3'>
//                 Male Fertility Treatments
//                 </h5>
//                 <div className='px-5'>
//                     <h6 className='lh-base'>Micro-TESE</h6>
//                     <h6 className='lh-base'>Tesa / Pesa</h6>
//                     <h6 className='lh-base'>Microsurgical Varicocele Op.</h6>
//                     <h6 className='lh-base'>Tur Ed</h6>
//                     <h6 className='lh-base'>Vasectomy</h6>
//                     <h6 className='lh-base'>Vasovasostomy</h6>
//                 </div>    
//             </div></div>
//         <div class="item3">
//             <div  className='border'>
//                 <img className='border-rad-25 border' alt='#' src={image_5} 
//                 // style={{"width": "auto", "height": "100%", "max-width": "100%"}}
//                 width= '250'
//                  />
//             </div></div>  
//         <div class="item4"> <div  className='border'>
//                 <img className='border-rad-25 border' alt='#' src={image_6} 
//                 // style={{"width": "auto", "height": "100%", "max-width": "100%"}}
//                 width= '250'
//                  />
//             </div>
//         </div>
//         <div class="item5">
//         <div className='card_body_1 border-rad-25 '>
//             <h5 className='card_header_1 text-center py-3'>
//             Sexual Dyfunction & Disorders
//             </h5>
//             <div className='px-5'>
//                 <h6 className='lh-base'>Erectile Dysfunction</h6>
//                 <h6 className='lh-base'>Penile Curvature</h6>
//             </div>     
//         </div>
//         </div>
//         <div class="item6">
//         <div  className='card_body_2 border-rad-25 '>
//              <h5 className='card_header_2 text-center py-3'>
//              Treatments For Sexual Dyfunction & Disorders
//              </h5>
//              <div className='px-5'>
//                  <h6 className='lh-base'>Penile Prosthesis</h6>
//                  <h6 className='lh-base'>Low-intensity Extracorporeal Shock Wave Therapy</h6>
//                  <h6 className='lh-base'>İntracavernosal Injection Therapy</h6>
//                  <h6 className='lh-base'>Penile Curvature Surgery</h6>
//                  <h6 className='lh-base'>Vacuum Device</h6>
//              </div>         
//         </div>
//         </div>
// </div>

   
    
  )
}

export default Treatments