import React from 'react'
import hero from '../assets/hero.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PhoneInputGfg from './PhoneNum';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function HeroSection() {
  return (
    <Container className=' border-danger' style={{ "position":"relative"}}>

      <Row >    

    <Col className=' border-primary' xs={7} style={{"margin":"5rem 3rem", "text-align":"left"}}>
          <h2 className='primary-font-color'>Being A</h2>
          <h2 className='primary-font-color'>Father Is</h2>
          <h2 className='primary-font-color'>Everyone’s Right</h2>
          <h6 className='secondary-font-color'>Reach for your dreams in experienced hands</h6>
          
      <Form style={{"position":"absolute", "left":"4rem"}}>
        <Row style={{"padding":"3rem 0rem"}}>
          <Col>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Name Surname" style={{'border-radius':'25px', "width":"17rem", "background":"#F2F2F2", "color":"#D1D1D1"}} className='py-3 px-3' />
        </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3">
          {/* <PhoneInputGfg  />       */}
          <Form.Control type="tel" placeholder="+90" style={{'border-radius':'25px', "width":"17rem", "background":"#F2F2F2", "color":"#D1D1D1"}} className='py-3 px-3' />
        </Form.Group>
        </Col>

        <Col>
        <Button type="submit" style={{'border-radius':'25px', "width":"17rem"}} className='py-3 px-3 red-btn-color' >
          Send Now
        </Button>
        </Col>
        </Row>
      </Form>
      </Col>
      
      <Col className=' border-danger' style={{"position":"relative"}} >

        <div className='hero_bg hero_bg_big' >
        <img alt='hero' src={hero} style={{"position":"absolute", "border-radius":"1445px", "display":"block" , "z-index":"5", "left":"3em"}} width="350" height="auto" />
        </div>


      </Col>

      </Row>
    </Container>
  )
}

export default HeroSection