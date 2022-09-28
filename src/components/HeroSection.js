import React from 'react'
import hero from '../assets/hero.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import PhoneInputGfg from './PhoneNum';
import Container from 'react-bootstrap/Container';

function HeroSection() {
  return (
    <Container className=' border-danger' 
    // style={{ "position":"relative"}}
    >

      <div className='d-flex mx-auto justify-content-between align-content-center'>

        <div>
          <div className='border d-flex flex-wrap flex-col align-items-center text-left '>
            <div >
              <h2 className='primary-font-color text-start mt-5' style={{"font-size":"clamp(14px, 3.5vw, 3rem)"}}>Being A</h2>
              <h2 className='primary-font-color text-start' style={{"font-size":"clamp(14px, 3.5vw, 5rem)"}}>Father Is</h2>
              <h2 className='primary-font-color text-start' style={{"font-size":"clamp(14px, 3.5vw, 5rem)"}}>Everyone’s Right</h2>
              <h6 className='secondary-font-color text-start' style={{"font-size":"clamp(7px, 1.6vw, 5rem)"}}>Reach for your dreams in experienced hands</h6>
            </div>
          </div>

          <div className='mt-4 '>
            <div className='border d-flex flex-wrap'>
              <Form.Group className="mb-3 me-2">
                <Form.Control type="text" placeholder="Name Surname" style={{"display":"inline",'border-radius':'25px', "width":"48vw","height":"2.6rem", "background":"#F2F2F2", "color":"#D1D1D1"}} className='flex-fill py-3 px-3' />
              </Form.Group>

              <Form.Group className="mb-3 me-2">
                <Form.Control type="tel" placeholder="+90" style={{"display":"inline", 'border-radius':'25px', "width":"48vw","height":"2.6rem", "background":"#F2F2F2", "color":"#D1D1D1"}} className='flex-fill py-3 px-3' />
              </Form.Group>

              <Button type="submit" style={{"display":"inline", 'border-radius':'25px', "width":"48vw", "height":"2.6rem"}} className='py-2 px-3 red-btn-color ' >
                Send Now
              </Button>
            </div>
          </div>

        </div>

        <div>
          <div className='float-end border' style={{"overflow":"hidden"}}>
            <img alt='hero' src={hero} 
            className='img-fluid navbar-image'
              style={{
                // "width": "100%",
                "max-width": "210px", 
                "height": "auto",
                "border-radius":"1445px",
                // "position":"absolute",
                "z-index":"5",
                "transform":"translateX(7%)",
              }}
            // style={{"position":"absolute", "border-radius":"1445px", "z-index":"5", "left":"3em"}} width="350vw" max-width='100%' height="auto" 
            />
            </div>
        </div>
      </div>
    </Container>
  )
}

export default HeroSection