import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo_1 from '../assets/logo_1.png';
import logo_2 from '../assets/logo_2.png';
import logo_3 from '../assets/logo_3.png';
import logo_4 from '../assets/logo_4.png';
import logo_5 from '../assets/logo_5.png';
import logo_6 from '../assets/logo_6.png';
import logo_7 from '../assets/logo_7.png';
import logo_8 from '../assets/logo_8.png';

function Sponsors() {
  return (
    <Container>
    <Row className='mt-5 ' style={{"display":"flex", "align-items":"baseline"}}>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_1} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >American Urological Association</p>
        </Col>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_2} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >Turk Andraloji Dernegi</p>
        </Col>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_3} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >European Association of Urology</p>
        </Col>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_4} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >European Society of Human Reproduction and Embyology</p>
        </Col>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_5} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >Internation Continence Sociey</p>
        </Col>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_6} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >International Society for Sexual and Impotence Research</p>
        </Col>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_7} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >Turkish Association of Urology</p>
        </Col>
        <Col style={{"display":"block"}}>
            <img alt='' src={logo_8} width='70' />
            <p style={{"font-size":"13px", "color": "#70BBEA", "padding-top":"1em"}} >Society for the Study of Male Reproduction</p>
        </Col>
    </Row>
    </Container>
  )
}

export default Sponsors