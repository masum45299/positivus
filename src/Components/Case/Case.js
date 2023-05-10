import React from 'react';
import './Case.css'
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UilExternalLinkAlt } from '@iconscout/react-unicons';
import 'swiper/css/bundle';





const Case = () => {
 

    return (
        
        <div className='case'>
            <Container>
                <div className='S-content-f'>
                    <button className='m-btn s-btn'>Case Studies</button>
                    <p style={{marginLeft:"3rem", fontSize:"1.6rem"}}>Explore Real-Life Examples of Our Proven Digital Marketing <br/> Success through Our Case Studies</p>
                </div>
                <div className='desktop'>
                <Swiper
                slidesPerView={3}
                className='slider-side'
                >
                    <SwiperSlide>
                        <p style={{fontSize:"1.6rem", color:"#ffffff"}}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <div className='swiper-icon'>
                            <p style={{marginRight:"1.5rem", marginBottom:"0rem", fontSize:"1.6rem", color:"#B9FF66"}}>Learn more</p>
                            <UilExternalLinkAlt/>
                        </div>
                        <div className='after'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{fontSize:"1.6rem", color:"#ffffff"}}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <div className='swiper-icon'>
                            <p style={{marginRight:"1.5rem", marginBottom:"0rem", fontSize:"1.6rem", color:"#B9FF66"}}>Learn more</p>
                            <UilExternalLinkAlt/>
                        </div>
                        <div className='after'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{fontSize:"1.6rem", color:"#ffffff"}}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <div className='swiper-icon'>
                            <p style={{marginRight:"1.5rem", marginBottom:"0rem", fontSize:"1.6rem", color:"#B9FF66"}}>Learn more</p>
                            <UilExternalLinkAlt/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
                
                <div className='mobile'>
                <Swiper
                slidesPerView={1}
                className='slider-side'
                >
                    <SwiperSlide>
                        <p style={{fontSize:"1.6rem", color:"#ffffff"}}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <div className='swiper-icon'>
                            <p style={{marginRight:"1.5rem", marginBottom:"0rem", fontSize:"1.6rem", color:"#B9FF66"}}>Learn more</p>
                            <UilExternalLinkAlt/>
                        </div>
                        <div className='after'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{fontSize:"1.6rem", color:"#ffffff"}}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <div className='swiper-icon'>
                            <p style={{marginRight:"1.5rem", marginBottom:"0rem", fontSize:"1.6rem", color:"#B9FF66"}}>Learn more</p>
                            <UilExternalLinkAlt/>
                        </div>
                        <div className='after'></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p style={{fontSize:"1.6rem", color:"#ffffff"}}>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <div className='swiper-icon'>
                            <p style={{marginRight:"1.5rem", marginBottom:"0rem", fontSize:"1.6rem", color:"#B9FF66"}}>Learn more</p>
                            <UilExternalLinkAlt/>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Case;