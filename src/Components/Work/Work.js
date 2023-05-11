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
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{marginBottom:"14rem"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>

            </Container>
        </div>
    );
};

export default Work;