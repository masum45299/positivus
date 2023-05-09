import React from 'react';
import './ServiceCard.css';
import { UilExternalLinkAlt } from '@iconscout/react-unicons';
import magnifiyer from '../../Img/magnifiyer.png';
import illustration from '../../Img/Illustration.png';
import love from '../../Img/love.png';
import sending from '../../Img/sending.png';
import illustration2 from '../../Img/illustration2.png';
import volumic from '../../Img/vlomuemic.png';

const ServiceCard = () => {
    return (
       <div>
            <div className='s-card-wrap'>
                    <div className='S-card S-card1'>
                        <div className='card-content'>
                            <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                            <div className='i-flex'>
                                <div className='s-icon icon1'><UilExternalLinkAlt/></div>
                                <small>Learn more</small>
                            </div>
                        </div>
                        <img src={magnifiyer} alt=''/>
                    </div>
                    <div className='S-card S-card2'>
                        <div className='card-content'>
                            <h3 style={{backgroundColor:"#ffffff", marginBottom:"11rem"}}>Pay-per-click <br/> advertising</h3>
                            <div className='i-flex'>
                                <div className='s-icon icon2'><UilExternalLinkAlt/></div>
                                <small>Learn more</small>
                            </div>
                        </div>
                        <img src={illustration} alt=''/>
                    </div>
                    <div className='S-card S-card3'>
                        <div className='card-content'>
                            <h3 style={{backgroundColor:"#ffffff", marginBottom:"11rem"}}>Social Media<br/> Marketing</h3>
                            <div className='i-flex'>
                                <div className='s-icon icon3'><UilExternalLinkAlt/></div>
                                <small style={{color:"#ffffff"}}>Learn more</small>
                            </div>
                        </div>
                        <img src={love} alt=''/>
                    </div>
                    <div className='S-card S-card4'>
                        <div className='card-content'>
                            <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                            <div className='i-flex'>
                                <div className='s-icon icon1'><UilExternalLinkAlt/></div>
                                <small>Learn more</small>
                            </div>
                        </div>
                        <img src={sending} alt=''/>
                    </div>
                    <div className='S-card S-card5'>
                        <div className='card-content'>
                            <h3 style={{backgroundColor:"#ffffff", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                            <div className='i-flex'>
                                <div className='s-icon icon1'><UilExternalLinkAlt/></div>
                                <small>Learn more</small>
                            </div>
                        </div>
                        <img src={illustration2} alt=''/>
                    </div>
                    <div className='S-card S-card6'>
                        <div className='card-content'>
                            <h3 style={{backgroundColor:"##B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                            <div className='i-flex'>
                                <div className='s-icon icon6'><UilExternalLinkAlt/></div>
                                <small style={{color:"#ffffff"}}>Learn more</small>
                            </div>
                        </div>
                        <img src={volumic} alt=''/>
                    </div>
            </div>
            <
       </div>
    );
};

export default ServiceCard;