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
    <Container className=' border-danger' 
    // style={{ "position":"relative"}}
    >

      

      <div className='d-flex mx-auto justify-content-between'>

        <div>
          <div className='border d-flex flex-wrap flex-col align-items-center text-left mt-5'>
            <div >
              <h2 className='primary-font-color text-start mt-5'>Being A</h2>
              <h2 className='primary-font-color text-start'>Father Is</h2>
              <h2 className='primary-font-color text-start'>Everyone’s Right</h2>
              <h6 className='secondary-font-color text-start'>Reach for your dreams in experienced hands</h6>
            </div>
          </div>

          <div className='mt-4 '>
            <div className='border d-flex flex-wrap'>
              <Form.Group className="mb-3 me-2">
                <Form.Control type="text" placeholder="Name Surname" style={{"display":"inline",'border-radius':'25px', "width":"18vw", "background":"#F2F2F2", "color":"#D1D1D1"}} className='flex-fill py-3 px-3' />
              </Form.Group>

              <Form.Group className="mb-3 me-2">
                <Form.Control type="tel" placeholder="+90" style={{"display":"inline", 'border-radius':'25px', "width":"18vw", "background":"#F2F2F2", "color":"#D1D1D1"}} className='flex-fill py-3 px-3' />
              </Form.Group>

              <Button type="submit" style={{"display":"inline", 'border-radius':'25px', "width":"18vw", "height":"3.6rem"}} className='py-2 px-3 red-btn-color ' >
                Send Now
              </Button>
            </div>
          </div>

        </div>

        <div>
          <div className='hero_bg hero_bg_big float-end'>
            <img alt='hero' src={hero} 
            className=''
            style={{"position":"absolute", "border-radius":"1445px", "z-index":"5", "left":"3em"}} 
            width="350vw" max-width='100%' height="auto" />
            </div>
        </div>
      </div>



















    </Container>
  )
}

export default HeroSection