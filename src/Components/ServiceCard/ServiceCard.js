import React from 'react';
import './ServiceCard.css';
import { UilExternalLinkAlt } from '@iconscout/react-unicons';
import magnifiyer from '../../Img/magnifiyer.png'

const ServiceCard = () => {
    return (
        <div className='s-card-wrap'>
            <div className='S-card'>
                <div className='card-content'>
                    <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                    <UilExternalLinkAlt/>
                </div>
                <img src={magnifiyer} alt=''/>
            </div>
            <div className='S-card'>
                <div className='card-content'>
                    <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                    <UilExternalLinkAlt/>
                </div>
                <img src={magnifiyer} alt=''/>
            </div>
            <div className='S-card'>
                <div className='card-content'>
                    <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                    <UilExternalLinkAlt/>
                </div>
                <img src={magnifiyer} alt=''/>
            </div>
            <div className='S-card'>
                <div className='card-content'>
                    <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                    <UilExternalLinkAlt/>
                </div>
                <img src={magnifiyer} alt=''/>
            </div>
            <div className='S-card'>
                <div className='card-content'>
                    <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                    <UilExternalLinkAlt/>
                </div>
                <img src={magnifiyer} alt=''/>
            </div>
            <div className='S-card'>
                <div className='card-content'>
                    <h3 style={{backgroundColor:"#B9FF66", marginBottom:"11rem"}}>Search engine <br/> Optimization</h3>
                    <UilExternalLinkAlt/>
                </div>
                <img src={magnifiyer} alt=''/>
            </div>
        </div>
    );
};

export default ServiceCard;