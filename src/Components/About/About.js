import React from 'react';
import './About.css'
import { Container } from 'react-bootstrap';
import a_img from '../../Img/a_img.png'


const About = () => {
    return (
        <div>
            <Container>
                <div className='a-wrap'>
                <div className='a-left'>
                    <h1>Navigating the digital landscape for success</h1>
                    <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <button className='m-btn'>Book a consultation</button>
                    </div>
                    <div className='a-right'>
                        <img src={a_img} alt=''/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;