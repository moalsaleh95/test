<Col className='border border-primary ' xs={7} style={{"margin":"5rem 3rem", "text-align":"left"}}>
            <h2 className='primary-font-color'>Being A</h2>
            <h2 className='primary-font-color'>Father Is</h2>
            <h2 className='primary-font-color'>Everyone’s Right</h2>
            <h6 className='secondary-font-color'>Reach for your dreams in experienced hands</h6>
            
        <Form style={{"position":"absolute", "left":"4rem"}}>
          <Row className='flex-col-reverse' style={{"padding":"3rem 0rem"}}>
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
        
        <Col className='border border-danger' style={{"position":"relative"}} >

          <div className='hero_bg' >
          <img alt='hero' src={hero} style={{"position":"absolute", "border-radius":"1445px", "display":"block" , "z-index":"5", "left":"3em"}} width="350" height="480" />
          </div>


        </Col>





        *************************************************************
         <Row className='align-items-start'>  
      <Col style={{'margin-top':'4em'}}>
            <h2 className='primary-font-color'>Being A</h2>
            <h2 className='primary-font-color'>Father Is</h2>
            <h2 className='primary-font-color'>Everyone’s Right</h2>
            <h6 className='secondary-font-color'>Reach for your dreams in experienced hands</h6>

            <Form style={{"position":"absolute", "left":"0rem"}} >
          <Row className='' style={{"padding":"3rem 0rem"}}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name Surname" style={{'border-radius':'25px',"font-size":"13px", "width":"10rem", "background":"#F2F2F2", "color":"#D1D1D1"}} className='py-3 px-3' />
              </Form.Group>
            </Col>

          <Col>
            <Form.Group className="mb-3">
              {/* <PhoneInputGfg  />       */}
              <Form.Control type="tel" placeholder="+90" style={{'border-radius':'25px', "width":"10rem","font-size":"13px", "background":"#F2F2F2", "color":"#D1D1D1"}} className='py-3 px-3' />
            </Form.Group>
          </Col>

          <Col>
            <Button type="submit" style={{'border-radius':'25px', "width":"10rem","font-size":"13px"}} className='py-3 px-3 red-btn-color' >
              Send Now
            </Button>
          </Col>
        </Row>
        </Form>
            
      </Col>  

      <Col>
        
          <div className='' style={{"z-index":"-1","position": "relative"}} >
          <img alt='hero' src={hero} style={{"position":"absolute", "border-radius":"1445px", "display":"block" , "z-index":"5", "right":"-3em"}} width="350" />
          </div>
      </Col>


      

      </Row>

      **************************************
      @media screen and (min-width: 1400px) {
  .hero_bg_screen {
    background: #F4FBFF;
    /* background: #31373A; */
  
    width: 380px;   
    height: 480px; 
    border-bottom-left-radius: 70% 50%;
    border-bottom-right-radius: 70% 50%;
    border-top-left-radius: 70% 50%;
    border-top-right-radius: 70% 50%;
  
    position: relative;
    top: 0rem;
    right: 2em;
    z-index:-1;
    clear: both; 
    z-index:5; 
    left:0em;
  }
}

@media screen and (max-width:1400px){
  .hero_sm_screen {
    position: relative;
    z-index:-1;
    margin-bottom: 35rem;
  }
}

*************************************************************************************
<Row >    

    <Col className=' border-primary' xs={7} style={{"margin":"5rem 3rem", "text-align":"left"}}>
          <h2 className='primary-font-color'>Being A</h2>
          <h2 className='primary-font-color'>Father Is</h2>
          <h2 className='primary-font-color'>Everyone’s Right</h2>
          <h6 className='secondary-font-color'>Reach for your dreams in experienced hands</h6>
          
      <Form 
      // style={{"position":"absolute", "left":"4rem"}}
      >
        <Row style={{"padding":"3rem 0rem"}}>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Name Surname" style={{'border-radius':'25px', "width":"15vw", "background":"#F2F2F2", "color":"#D1D1D1"}} className='py-3 px-3' />
            </Form.Group>
          </Col>

        <Col>
          <Form.Group className="mb-3">
            {/* <PhoneInputGfg  />       */}
            <Form.Control type="tel" placeholder="+90" style={{'border-radius':'25px', "width":"15vw", "background":"#F2F2F2", "color":"#D1D1D1"}} className='py-3 px-3' />
          </Form.Group>
        </Col>

        <Col>
          <Button type="submit" style={{'border-radius':'25px', "width":"15vw"}} className='py-3 px-3 red-btn-color' >
            Send Now
          </Button>
        </Col>
        </Row>
        
      </Form>
      </Col>
      
      <Col className=' border-danger' style={{"position":"relative"}} >
        <div 
        // className='hero_bg hero_bg_big' 
        >
        <img alt='hero' src={hero} 
        style={{"position":"absolute", "border-radius":"1445px", "display":"block" , "z-index":"5", "left":"3em"}} 
        width="350" height="auto" />
        </div>
      </Col>

      </Row>