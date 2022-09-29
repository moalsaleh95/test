HeroSection 29/9

import React from 'react'
import hero from '../assets/hero.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import PhoneInputGfg from './PhoneNum';
import Container from 'react-bootstrap/Container';
import bg_colored_image from '../assets/442x593.png';

function HeroSection() {
  return (
    <Container className=' border-danger' 
    // style={{ "position":"relative"}}
    >

      <div className='d-flex mx-auto justify-content-between align-content-center hero-wrapper'>

        <div className='hero-container'>

          <div className='border d-flex flex-wrap flex-col align-items-center text-left '>
            <div >
              <h2 className='primary-font-color text-start mt-5' style={{"font-size":"clamp(14px, 3.5vw, 3rem)"}}>Being A</h2>
              <h2 className='primary-font-color text-start' style={{"font-size":"clamp(14px, 3.5vw, 3rem)"}}>Father Is</h2>
              <h2 className='primary-font-color text-start' style={{"font-size":"clamp(14px, 3.5vw, 3rem)"}}>Everyone’s Right</h2>
              <h6 className='secondary-font-color text-start' style={{"font-size":"clamp(7px, 1.6vw, 3rem)"}}>Reach for your dreams in experienced hands</h6>
            </div>
          </div>

          <div className='mt-4 buttons-wrapper'>
            <div className='border d-flex flex-wrap'>
              <Form.Group className="mb-3 me-2">
                <Form.Control type="text" placeholder="Name Surname" style={{"display":"inline",'border-radius':'25px', "width":"48vw","height":"2.6rem", "background":"#F2F2F2", "color":"#D1D1D1"}} className='flex-fill py-3 px-3 hero-buttons' />
              </Form.Group>

              <Form.Group className="mb-3 me-2">
                <Form.Control type="tel" placeholder="+90" style={{"display":"inline", 'border-radius':'25px', "width":"48vw","height":"2.6rem", "background":"#F2F2F2", "color":"#D1D1D1"}} className='flex-fill py-3 px-3 hero-buttons' />
              </Form.Group>

              <Button type="submit" style={{"display":"inline", 'border-radius':'25px', "width":"48vw", "height":"2.6rem"}} className='py-2 px-3 red-btn-color hero-buttons' >
                Send Now
              </Button>
            </div>
          </div>
        </div>
{/* ********************************************************************** */}
        {/* <div>
          <div className='float-end border hero_bg-image' style={{"overflow":"hidden"}}>
            <img alt='hero' src={hero} 
              className='img-fluid hero-image'
              style={{
                // "width": "100%",
                "max-width": "210px", 
                "height": "auto",
                "border-radius":"1445px",
                // "position":"absolute",
                "z-index":"5",
                "transform":"translateX(7%)",
              }}
            />
          </div>
        </div> */}

{/* ********************************************************************** */}
        {/* <div>
          <div className='float-end border' style={{"overflow":"hidden"}}>

          <img alt='hero' src={bg_colored_image} 
              className='img-fluid hero-bg-image border'
              style={{
                "border-radius":"1445px",
                "display":"none",
              }}
            />
          </div>

          <img alt='hero' src={hero} 
              className='img-fluid hero-image'
              style={{
                // "width": "100%",
                "max-width": "210px", 
                "height": "auto",
                "border-radius":"1445px",
                // "position":"absolute",
                // "z-index":"5",
                "transform":"translateX(7%)",
              }}
            />
        </div>
      </div> */}

    {/* ********************************************************************** */}


        <div className='border' style={{}}>
          <div className='float-end border' style={{"overflow":"hidden","position":"relative"}}>

                {/* doctors photos */}
            <img alt='hero' src={hero} 
                className='img-fluid hero-image'
                style={{
                  "max-width": "210px", 
                  "height": "auto",
                  "border-radius":"1445px",
                  "position":"absolute",
                  "z-index":"5",
                  "transform":"translateX(7%)",
                }}
              />

              <div style={{
                    "position":"relative",
                    "z-index":"-1",
                  }}> 

                  <img alt='hero' src={bg_colored_image} 
                        className='img-fluid hero-bg-image border'
                        style={{
                          "border-radius":"1445px",
                          // "right":"15rem",
                          // "display":"none",
                        }}
                        />
              </div>
          </div>       
      </div>

    </div>
    </Container>
  )
}

export default HeroSection
00000000000000000000000000000000000000000000000000000000000000000000000000000000
App.css 29/9

.App {
  text-align: center;
  margin: auto;
}

.primary-font-color {
  color: #005B8B
}

.secondary-font-color {
  color: #70BBEA
}

.red-btn-color {
  background-color: #C40F0F !important;
  border-color: #C40F0F !important;
}

.primary-bg-color {
  background-color: #005B8B !important;
  border-color: #005B8B !important;
}

.background {
  background-image: url("./assets/image_4.png");
}

.wrapper {
  height: 100px;
  width: 100px;
  /* position: relative; */
}


.card_header_1 {
  color:#31373A;
  background-color: #D8D8D8;
  border-radius: 25px;
  font-size: 0.6rem;
}

.card_body_1 {
  color:#AEAEAE;
  background-color: #F2F2F2;
}

.card_body_2 {
  color:#5E98BB;
  background-color: #EAF5FC;
}


.card_header_2 {
  color:#30739E;
  background-color: #A5CFEA;
  border-radius: 25px;
  font-size: 0.6rem;
  max-height: 4rem;
}

.font-control {
  font-size: 0.5rem;
}
/* ******************************************************************************** */

@media screen and (min-width: 653px) {
  .font-control {
    font-size: 0.8rem;
  }
  .card_header_2 {
    font-size: 0.8rem;
  }
  .card_header_1 {
    font-size: 0.8rem;
  }
}

.background_2 {
  background-image: url("./assets/image_7.jpg");
}

.team_background {
  background-color: #005B8B;
  color: white;
  display: inline-block;
  text-align: left;
  min-width: 100vw;
}

.footer_background {
  background-color: #EAF5FC;
  color: black;
  display: inline-block;
  text-align: left;
  min-width: 100vw;
  padding-top: 5rem;
}

.circle {
  font-size: 1rem;
  width: 2.2rem;
  height: 2.2rem;
  line-height: 2.2rem;
  border-radius: 50%;
  color: #005B8B;
  text-align: center;
  background: #fff;
  z-index: auto;
  
}

.text {
  font-size: 0.5rem;
  text-align: center;
  color: #005B8B;
  margin: 0;
  text-align: left;
  white-space: nowrap;
  margin-top: -2em;
  z-index: 5;
}
/* ******************************************************************************** */

@media screen and (min-width: 653px) {
  .circle {
    width: 5.8rem;
    height: 5.8rem; 
    line-height: 5.8rem;
    font-size: 55px;
  }

  .text {
    font-size: 1rem;
  }
  .screen-width {
    max-width: 100%;
  }
}

@media screen and (min-width: 1450px) {
  .screen-width {
    max-width: 65%;
  }

}
/* ******************************************************************************** */

.text p {
  text-align: left;
  height: 100%;
  line-height: 1;
  padding: 0;
  text-align: center;
}

.border-rad-25 {
  border-radius: 25px !important;
}


.footer_text {
  font-size: 10px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
}
/* ******************************************************************************** */

@media screen and (min-width: 768px) {
  .cards-translate {
    transform:translateY(10vw);
  }

  .about-translate {
    margin-top: 10vw;
  }

  .navbar-image {
    max-width: 290px !important;
  }

  .navbar-whatsapp-button {
    font-size: 25px !important;
  }

  .hero-image {
    max-width: 300px !important;
  }
}
/* ******************************************************************************** */

@media screen and (min-width: 900px) {
  .cards-translate {
    transform:translateY(7vw);
  }

  .about-translate {
    margin-top: 10vw;
  }
  
  .navbar-image {
    max-width: 320px !important;
  }

  .hero-image {
    max-width: 500px !important;
  }
}
/* ******************************************************************************** */
@media screen and (min-width: 1024px) {
  .cards-translate {
    transform:translateY(4vw);
  }

  .about-translate {
    margin-top: 10vw;
  }

  .hero-image {
    max-width: 400px !important;
    transform:translateX(0%) !important;
    z-index: -1;
    right: 0rem; 
  }

  .buttons-wrapper {
    padding-top: 2.5rem;
    z-index: 10;
  }

  .hero-bg-image {
    display: inline !important;
    /* position: absolute; */
    /* right: 15vw; */
    z-index:-1;
    /* clear: both;  */
    height: auto;
    /* max-width: 400px,  */
    width:400px,

    /* background: #F4FBFF; */
    /* border-bottom-left-radius: 70% 52%;
    border-bottom-right-radius: 70% 52%;
    border-top-left-radius: 70% 52%;
    border-top-right-radius: 70% 52%; */
  }

  .hero-buttons {
    width: 16vw !important;
    z-index: 10;
  }

  /* .hero-wrapper {
    position: relative;
  } */

  /*.hero-container {
    position: relative;
  } */


}