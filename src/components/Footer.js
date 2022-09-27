import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo_11.png';
import NewsLetterForm from './NewsLetterForm'
function Footer() {
  return (
    <Container className='footer_background'>

      <Container className='' >
          <Row style={{"background":"#EAF5FC", "text-align":"left" }}>
              <Col className='px-5'>
              <img alt='' src={logo} width='300' className='pb-3 pt-1' />
              <p className='text-secondary'>Being A Father Is Everyone’s Right!</p>
              </Col>

              <Col className='px-5'>

              <h6 className='pb-2'>CONTACT US</h6>
              <div style={{"color":"#48A5E0"}}>
              <p>Merkez Mahallesi, Abide-i Hürriyet Cad. No:171/8, 34384 Sisli Istanbul/Turkey</p>
              <p>info@arpanumedical.com</p>
              <p>+90 541 760 10 26</p>
              </div>
              </Col>

              <Col className='px-5'>
                  <h6 className='pb-2'>NEWSLETTER</h6>
                  <NewsLetterForm />
              </Col>
          </Row>
        
          <hr style={{"border": "1px solid #005B8B "}}/>

          <Row >
            <p style={{"text-align":"left"}} className='text-secondary'>2022 © Dr. Murat Başa</p>
          </Row>


      </Container>
        
      
    </Container>
    
  )
}

export default Footer