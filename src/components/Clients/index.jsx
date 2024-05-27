/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './index.css'; // Import your CSS file here
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
function Clients() {
  const clientsData = [
    {
      href: 'https://www.dollarshaveclub.com',
      width: '223px',
      height: '41px',
      xlinkHref:'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1716609600&semt=sph',
    },
    {
        href: 'https://www.dollarshaveclub.com',
        width: '223px',
        height: '41px',
        xlinkHref:'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1716609600&semt=sph',
      },
      {
        href: 'https://www.dollarshaveclub.com',
        width: '223px',
        height: '41px',
        xlinkHref:'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1716609600&semt=sph',
      },
      {
        href: 'https://www.dollarshaveclub.com',
        width: '223px',
        height: '41px',
        xlinkHref:'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1716609600&semt=sph',
      },
      {
        href: 'https://www.dollarshaveclub.com',
        width: '223px',
        height: '41px',
        xlinkHref:'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.34264412.1716609600&semt=sph',
      },
  ];

  return (
    <div className="main_clients_wrap">
      <div className="clients" style={{width:"90%"}}>
        <div className="clients__list" style={{ width: "100%" }}>
          <div className="slider">
            <div className="slide1">
              {[...Array(25)].map((_, index) => (
                <img
                  key={index}
                  src="https://assets.zenn.com/blog/4240180c-a9f2-4c2f-b439-cfa200575452.jpg"
                  style={{ padding: "0 1.5rem" }}
                  height={'100%'}
                  width={190}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
