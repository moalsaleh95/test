import Card from 'react-bootstrap/Card';
import image_2 from '../assets/image_2.png';

function BasicExample() {
  return (
    <div className='my-5 d-flex justify-content-center mx-auto'>
        <Card className='mx-5' style={{ "display":"inline-block"}}>
        <Card.Img className='p-3' src={image_2} />
        
            <Card.Text className='secondary-font-color'>Micro Tese</Card.Text>
        
        </Card>

        <Card className='mx-5' style={{ "display":"inline-block" }}>
      <Card.Img className='p-3' src={image_2} />
      
        <Card.Text className='secondary-font-color'>IMSI-Sperm Selection</Card.Text>
      
    </Card>

    <Card className='mx-5' style={{ "display":"inline-block" }}>
      <Card.Img className='p-3' src={image_2} />
      
        <Card.Text className='secondary-font-color'>Sperm DNA Damage</Card.Text>
      
    </Card>

    <Card className='mx-5' style={{ "display":"inline-block" }}>
      <Card.Img className='p-3' src={image_2} />
      
        <Card.Text className='secondary-font-color'>Genetic Evaluation</Card.Text>
      
    </Card>

    <Card className='mx-5' style={{ "display":"inline-block" }}>
      <Card.Img className='p-3' src={image_2} />
      
        <Card.Text className='secondary-font-color'>Sperm Freezing</Card.Text>
      
    </Card>
    </div>
  );
}

export default BasicExample;