import React from 'react'
import { Carousel } from 'antd';
import Images1 from '../../assets/image.png'

export const Main = () => {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
   <main  className='my-20 '>
    <div id='abaout' className="main-container">
        <div className="main_titles flex justify-between ">
            <div className="main_left ">
                <h3 className='text-3xl'>
                О компании <br /> <span className='text-custom'>RMC DE LUXE</span>
                </h3>
            </div>
            <div className="main_right">
                <ul className="main_lists flex items-center justify-between">
                    <li className="main_list hover:text-custom duration-500 text-xl cursor-pointer">
                    Аренда
                    </li>
                    <li className="main_list hover:text-custom duration-500 text-xl  cursor-pointer">
                    Купля - продажа
                    </li>
                    <li className="main_list hover:text-custom duration-500 text-xl cursor-pointer">
                    Управление
                    </li>
                </ul>
                <hr  className='max-w-full h-[2px] bg-custom my-2'/>
                <p className='my-8'>Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – <br /> от квартир и домов до коммерческих помещений, удовлетворяющие любые <br /> потребности</p>
                <p>Надежные арендаторы: Проведение тщательной проверки и отбора <br /> арендаторов для обеспечения стабильного дохода и минимизации рисков</p>
            </div>
        </div>
<div className='my-10 '>
    <Carousel className='text-custom' arrows dotPosition="left" infinite={false}>
      <div>
       <img className='h-[auto]' src={Images1} alt="" />
      </div>
      <div>
      <img className='h-[auto]' src={Images1} alt="" />
      </div>
      <div>
      <img className='h-[auto]' src={Images1} alt="" />
      </div>
      <div>
      <img className='h-[auto]' src={Images1} alt="" />
      </div>
    </Carousel>

</div>
    </div>
   </main>
  )
}
