import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import im_1 from '../assets/1.png';
import im_2 from '../assets/2.png';
import im_3 from '../assets/3.png';
import im_4 from '../assets/4.png';
import im_5 from '../assets/5.png';

function BasicExample() {
  return (
    // <Container className=''>
    //   <Row className='' >
    //     <Col sm className='p-3 mx-3  border secondary-font-color shadow-sm' style={{"border-radius":"20px" , "background-color":"white"}} >
    //       <img alt='' src={im_1} width='50%' />
    //       <p className='pt-2'>Micro Tese</p>
    //     </Col>

    //     <Col sm className='p-3 mx-3  border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
    //       <img alt='' src={im_2} width='50%' />
    //       <p className='pt-2'>IMSI-Sperm Selection</p>
    //     </Col>

    //     <Col sm className='p-3 mx-3  border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
    //       <img alt='' src={im_3} width='50%' />
    //       <p className='pt-2'>Sperm DNA Damage</p>
    //     </Col>

    //     <Col sm className='p-3 mx-3  border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
    //       <img alt='' src={im_4} width='50%' />
    //       <p className='pt-2'>Genetic Evaluation</p>
    //     </Col>

    //     <Col sm className='p-3 mx-3  border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
    //       <img alt='' src={im_5} width='50%' />
    //       <p className='pt-2'>Sperm Freezing</p>
    //     </Col> 
    //   </Row>

      <div className='d-flex flex-wrap'>
        <div className='p-2 mx-2  border secondary-font-color shadow-sm' style={{"border-radius":"20px" , "background-color":"white"}}>
          <img alt='' src={im_1} width='30%' className='flex-grow-1'/>
          <p className='pt-2'>Micro Tese</p>
        </div>

        <div className='p-2 mx-2  border secondary-font-color shadow-sm' style={{"border-radius":"20px" , "background-color":"white"}}>
          <img alt='' src={im_2} width='30%'  className='flex-grow-1'/>
          <p className='pt-2'>IMSI-Sperm Selection</p>
        </div>
        
        <div className='p-2 mx-2  border secondary-font-color shadow-sm' style={{"border-radius":"20px" , "background-color":"white"}}>
          <img alt='' src={im_3} width='30%'  className='flex-grow-1'/>
          <p className='pt-2'>Sperm DNA Damage</p>
        </div>

        <div className='p-2 mx-2  border secondary-font-color shadow-sm' style={{"border-radius":"20px" , "background-color":"white"}}>
          <img alt='' src={im_4} width='30%'  className='flex-grow-1'/>
          <p className='pt-2'>Genetic Evaluation</p>
        </div>

        <div className='p-2 mx-2  border secondary-font-color shadow-sm' style={{"border-radius":"20px" , "background-color":"white"}}>
          <img alt='' src={im_5} width='30%'  className='flex-grow-1'/>
          <p className='pt-2'>Sperm Freezing</p>
        </div>
      </div>
        
    // </Container>
  );
}

export default BasicExample;