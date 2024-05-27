/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SwiperCentered from '../Swiper/SwiperCentered'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import './styles.css'; 
const LatestProject = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const sliderData = [
        { imgUrl: `/AI.jpg`, heading: `Revolutionizing Industries with AI Technology` },
        { imgUrl: `/brain.jpg`, heading: `Unleashing the Power of the Intelligent Mind: Exploring the Boundaries of Human Potential` },
        { imgUrl: `/slider1.jpg`, heading: `Mastering the Art of Software Development: Crafting Tomorrow's Digital Solutions Today` },
        { imgUrl: `/slider2.jpg`, heading: `Igniting Creativity: Unveiling the Power of Innovative Ideas` },
        { imgUrl: `/slider3.jpg`, heading: `Pioneering Mobile Experiences: Crafting the Future of App Development` },
        { imgUrl: `/slider4.jpg`, heading: `Gateway to Tomorrow: Exploring Advanced Portals for the Digital Age` },
        { imgUrl: `/slider5.jpg`, heading: `Elevating Data: Unveiling the Potential of Cloud Database Services` },
        { imgUrl: `/slider6.jpeg`, heading: `Fortifying Digital Fortresses: Prioritizing Authentication and Security in the Cloud` },
        { imgUrl: `/slider7.jpg`, heading: `Intelligent Solutions: Empowering Industries with Smart Software Innovations` },
    ]
  return (
    <div className="w-100 py-5" style={{backgroundColor:'#f1f1f3'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <h1 className="pb-5">Latest Project</h1>
          </div>
        </div>
      </div>
      {/* <SwiperCentered sliderData={sliderData} /> */}

      <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          {sliderData?.map((val, key) => (
            <SwiperSlide key={key} style={{backgroundColor:'#f1f1f3'}}>
              <div className="custom-shadow border border-dark p-2">
                <img src={val?.imgUrl} className="w-100" alt={val?.imgUrl} />
              </div>
              <h5 className="mt-4" >{val?.heading}</h5>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}

export default LatestProject