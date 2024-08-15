import React from 'react'
import image1 from '../../assets/card.svg'
import image2 from '../../assets/card2.svg'
import image3 from '../../assets/card3.svg'
import './block.css'
export const Block = () => {
  return (
   <section id='block'>
    <div className="main-container">
        <h1 className='text-3xl font-[500]'>Блог</h1>
<ul className="cards flex items-center justify-between  gap-4 my-8">
    <li className=" card max-w-full">
        <img src={image1} alt="" />
        <h1 className="text-xl">
        Тенденции и прогнозы рынка <br /> недвижимости на 2024 год
        </h1>
        <small className='my-5 text-custom'>Подробнее</small>
    </li>
    <li className="card max-w-full">
        <img src={image2} alt="" />
        <h1 className="text-xl">
        Лучшие районы для инвестиций <br /> в недвижимость
        </h1>
        <small className='py-5  text-custom'>Подробнее</small>
    </li>
    <li className="card max-w-full">
        <img src={image3} alt="" />
        <h1 className="text-xl">
        Топ-10 новых <br />
        жилых комплексов
        </h1>
        <small className='my-5 text-custom'>Подробнее</small>
    </li>
</ul>
<div className="text-center">
    <button className='btn_Content bg-custom'>
    Все статьи
    </button>
</div>
    </div>
   </section>
  )
}
