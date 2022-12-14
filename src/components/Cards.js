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
    <Container className=''>
      <Row className='cards-translate d-flex justify-content-center' style={{}} >
        <Col xs='5' sm className='p-3 mx-3 g-2 border secondary-font-color shadow-sm' style={{"border-radius":"20px" , "background-color":"white"}} >
          <img alt='' src={im_1} width='30%' className='img-fluid' />
          <p className='pt-2'>Micro Tese</p>
        </Col>

        <Col xs='5' sm className='p-3 mx-3 g-2  border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
          <img alt='' src={im_2} width='30%' className='img-fluid' />
          <p className='pt-2'>IMSI-Sperm Selection</p>
        </Col>

        <Col xs='5' sm className='p-3 mx-3 g-2 border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
          <img alt='' src={im_3} width='30%' className='img-fluid' />
          <p className='pt-2'>Sperm DNA Damage</p>
        </Col>

        <Col xs='5' sm className='p-3 mx-3 g-2 border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
          <img alt='' src={im_4} width='30%' className='img-fluid' />
          <p className='pt-2'>Genetic Evaluation</p>
        </Col>

        <Col xs='5' sm className='p-3 mx-3 g-2 border secondary-font-color shadow-sm' style={{"border-radius":"20px", "background-color":"white"}} >
          <img alt='' src={im_5} width='30%' className='img-fluid' />
          <p className='pt-2'>Sperm Freezing</p>
        </Col> 
      </Row>
    </Container>
  );
}

export default BasicExample;