import React from 'react';
import './Testimonial.css';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

const Testimonial = () => {
    return (
        <div>
            <Container>
                <div className='S-content-f' style={{marginTop:"10rem", marginBottom:"8rem"}}>
                        <button className='m-btn s-btn'>Testimonials</button>
                        <p style={{marginLeft:"3rem", fontSize:"1.6rem"}}>Meet the skilled and experienced team behind our <br/> successful digital marketing strategies</p>
                </div>
                <div className='testimonial-swiper'>
                    <Swiper
                          spaceBetween={10}
                          slidesPerView={2}
                    >
                        <SwiperSlide>
                            <div className='t-inner'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
                            <div className='tringle'></div>
                            </SwiperSlide>
                        <SwiperSlide>
                            <div className='t-inner'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
                            <div className='tringle'></div>
                            </SwiperSlide>
                        <SwiperSlide>
                            <div className='t-inner'>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."</div>
                            <div className='tringle'></div>
                            </SwiperSlide>
                       
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default Testimonial;