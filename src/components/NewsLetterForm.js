import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form >
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control className='border-rad-25 border-white ' style={{"padding":"1rem 5rem", "width":"18rem"}} type="email" placeholder="Email Address" />
      </Form.Group>
      
      <Button className='border-rad-25 primary-bg-color' style={{"padding":"1rem 5rem", "width":"18rem"}} type="submit">
        Subscribe
      </Button>
    </Form>
  );
}

export default BasicExample;