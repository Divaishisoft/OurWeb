/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SwiperCentered = ({ sliderData }) => {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={4}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {
                    sliderData?.map((val,key)=>(
                        <SwiperSlide key={key} style={{backgroundColor:'#f1f1f3'}}>
                            <div className='custom-shadow border border-dark p-2'>
                                <img src={val?.imgUrl} className='w-100' alt={val?.imgUrl} />
                            </div>
                            <h5 className='mt-4'>{val?.heading}</h5>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default SwiperCentered