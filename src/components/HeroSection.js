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
    <Container>
      <Row>    

    <Col>
          <h2 className='primary-font-color'>Being A Father Is Everyone’s Right</h2>
          <h4 className='secondary-font-color'>Reach for your dreams in experienced hands</h4>
          
      <Form>
        <Form.Group className="mb-3 w-50" >
          <Form.Control type="text" placeholder="Name Surname" />
        </Form.Group>

        <Form.Group className="mb-3">
          <PhoneInputGfg />      
        </Form.Group>

        <Button className='red-btn-color rounded' type="submit">
          Send Now
        </Button>
      </Form>
      </Col>
      
      <Col>
          <img alt='hero' src={hero} className='rounded' width="300"/>
      </Col>

      </Row>
    </Container>
  )
}

export default HeroSection