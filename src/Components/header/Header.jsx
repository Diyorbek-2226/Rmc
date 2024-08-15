import './header.css'
import  { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export const Header = () => {
    
  return (
   <header  className='headers '>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide id='img1'>
        <div className="main-container sm:block my-2 mx-2">
        <h1 className='text-header'>Найдите <br /> идеальное место <br /> для жизни</h1>
            <div className='text-divs font-[20px] text-white my-8'>
            Откройте двери в новое будущее с нами
            </div> 
            <button className='bg-custom btn_Content hover:opacity-50 hover:text-white '>
            Подробнее
            </button>
        </div>
        </SwiperSlide>
        <SwiperSlide id='img2'>
        <div className="main-container">
        <h1 className='text-header'>Найдите <br /> идеальное место <br /> для жизни</h1>
            <div className='text-divs font-[20px] text-white my-8'>
            Откройте двери в новое будущее с нами
            </div> 
            <button className='bg-custom btn_Content'>
            Подробнее
            </button>
        </div>
        </SwiperSlide>
        
      </Swiper>
      
   </header>
  )
}
