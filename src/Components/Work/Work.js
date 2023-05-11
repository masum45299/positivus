import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Work.css';

const Work = () => {
    return (
        <div style={{marginTop:"14rem"}}>
            <Container>
                <div className='S-content-f' style={{marginBottom:"8rem"}}>
                    <button className='m-btn s-btn'>Our Working Process </button>
                    <p style={{marginLeft:"3rem", fontSize:"1.6rem"}}>Explore Real-Life Examples of Our Proven Digital Marketing <br/> Success through Our Case Studies</p>
                </div>

                {/* Accordion part */}
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{marginTop:"2rem"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>01 Consultation</Accordion.Header>
                        <Accordion.Body>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{marginTop:"2rem"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>02 Research and Strategy Development</Accordion.Header>
                        <Accordion.Body>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{marginTop:"2rem"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>03 Implementation</Accordion.Header>
                        <Accordion.Body>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{marginTop:"2rem"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>04 Monitoring and Optimization</Accordion.Header>
                        <Accordion.Body>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{marginTop:"2rem"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>05 Reporting and Communication</Accordion.Header>
                        <Accordion.Body>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{marginTop:"2rem", marginBottom:"14rem"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>06 Continual Improvement</Accordion.Header>
                        <Accordion.Body>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>
        </div>
    );
};

export default Work;