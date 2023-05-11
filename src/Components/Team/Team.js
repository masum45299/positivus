import React from 'react';
import { Container } from 'react-bootstrap';
import './Team.css';
import tpic1 from '../../Img/tpic1.png';
import social from '../../Img/Social icon.png'

const Team = () => {
    return (
        <div>
            <Container>
                <div className='S-content-f'>
                        <button className='m-btn s-btn'>Team</button>
                        <p style={{marginLeft:"3rem", fontSize:"1.6rem"}}>Meet the skilled and experienced team behind our <br/> successful digital marketing strategies</p>
                </div>

                <div className='t-grid' style={{marginBottom:"14rem"}}>
                    <div className='t-box'>
                        <div className='t-content'>
                            <img src={tpic1} alt=''/>
                            <div className='t-details'>
                                <p>John Smith</p>
                                <p>CEO and Founder</p>
                            </div>
                        </div>
                        <img className='social-i' src={social} alt=''/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Team;