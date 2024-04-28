"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="flex flex-row justify-center items-center bg-stone-200 m-24 pr-12 pl-2 py-12 rounded-3xl ">
          <div >
            <img 
            src="/images/tinker2023.jpg" 
            alt=""
            className='h-64 w-64 rounded-2xl shadow-2xl shadow-gray-900'
             />
          </div>
          <div className=" ml-12">
            <span>26 December 2019</span>
            <div className=" font-bold text-2xl my-3">Lorem Ipsum Dolor</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <br />
            <a href="#" className=" bg-orange-400 rounded-md p-2">READ MORE</a>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-row justify-center items-center bg-stone-200 m-24 pr-12 pl-2 py-12 rounded-3xl ">
          <div>
            <img 
            src="/images/tinker2023.jpg" 
            alt=""
            className='h-64 w-64 rounded-2xl shadow-2xl shadow-gray-900'
             />
          </div>
          <div className=" ml-12">
            <span >26 December 2019</span>
            <div className=" font-bold text-2xl my-3">Lorem Ipsum Dolor</div>
            <div >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <br />
            <a href="#" className=" bg-orange-400 rounded-md p-2">READ MORE</a>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-row justify-center items-center bg-stone-200 m-24 pr-12 pl-2 py-12 rounded-3xl ">
          <div>
            <img 
            src="/images/tinker2023.jpg" 
            alt=""
            className='h-64 w-64 rounded-2xl shadow-2xl shadow-gray-900'
             />
          </div>
          <div className=" ml-12">
            <span>26 December 2019</span>
            <div className="font-bold text-2xl my-3">Lorem Ipsum Dolor</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <br />
            <a href="#" className=" bg-orange-400 rounded-md p-2">READ MORE</a>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex flex-row justify-center items-center bg-stone-200 m-24 pr-12 pl-2 py-12 rounded-3xl ">
          <div>
            <img 
            src="/images/tinker2023.jpg" 
            alt=""
            className='h-64 w-64 rounded-2xl shadow-2xl shadow-gray-900'
             />
          </div>
          <div className=" ml-12">
            <span >26 December 2019</span>
            <div className=" font-bold text-2xl my-3">Lorem Ipsum Dolor</div>
            <div >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <br />
            <a href="#" className=" bg-orange-400 rounded-md p-2">READ MORE</a>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
