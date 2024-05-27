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
        { imgUrl: `/inventory.png`, heading: `Inventory Management System` },
        { imgUrl: `/bank.png`, heading: `Bank Management System` },
        { imgUrl: `/school.png`, heading: `School Management System` },
        { imgUrl: `/ecommerce.png`, heading: `Ecommerce` },
    ]
  return (
    <div id='latest_projects' className="w-100 py-5" style={{backgroundColor:'#f1f1f3'}}>
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
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          {sliderData?.map((val, key) => (
            <SwiperSlide key={key} style={{backgroundColor:'#f1f1f3'}}>
              <div className="p-2" style={{ height: '300px', overflow: 'hidden' }}>
                <img src={val?.imgUrl} className="w-100 zoomImg" style={{ height: '300px' }} alt={val?.imgUrl} />
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