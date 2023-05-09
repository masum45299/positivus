import React from 'react';
import { Container } from 'react-bootstrap';
import clogo1 from '../../Img/Company logo.png';
import clogo2 from '../../Img/Company logo 2.png';
import clogo3 from '../../Img/Company logo3.png';
import clogo4 from '../../Img/Company logo4.png';
import clogo5 from '../../Img/Company logo5.png';
import clogo6 from '../../Img/Company logo 6.png';
import './Service.css';

const Service = () => {
    return (
        <div>
            <Container>
                <div className='S-menu-wrap'>
                    <div className='S-menu-left'>
                        <ul>
                            <li><img style={{width:"12.3rem"}} src={clogo1} alt=''/></li>
                            <li><img style={{width:"12.3rem"}}  src={clogo2} alt=''/></li>
                            <li><img style={{width:"12.3rem"}}  src={clogo3} alt=''/></li>
                        </ul>
                    </div>
                    <div className='S-menu-right'>
                        <ul>
                            <li><img style={{width:"12.3rem"}} src={clogo4} alt=''/></li>
                            <li><img style={{width:"12.3rem"}} src={clogo5} alt=''/></li>
                            <li><img style={{width:"12.3rem"}} src={clogo6} alt=''/></li>
                        </ul>
                    </div> 
                </div>
            </Container>
        </div>
    );
};

export default Service;