import './slider.css';
import { Carousel } from 'antd';
import r1 from '../../assets/Building1.png'
import r2 from '../../assets/Building2.png'
import r3 from '../../assets/Building3.png'
import r4 from '../../assets/Building4.png'

export const Slider = () => {
   
  return (
    <section>
        <div className="main-container">
       <h1 className='text-3xl font-[500] my-12'>
       Новостройки
       </h1>
        <Carousel autoplay>
    <div>
      <h3 className='slider_content flex justify-between gap-5'>
        <img src={r1} alt="" />
        <img src={r2} alt="" />
        <img src={r3} alt="" />
        <img src={r4} alt="" />
      </h3>
    </div>
    <div>
    <h3 className='slider_content flex justify-between  gap-5'>
        <img src={r3} alt="" />
        <img src={r2} alt="" />
        <img src={r1} alt="" />
        <img src={r4} alt="" />
      </h3>
    </div>
    <div>
    <h3 className='slider_content flex justify-between  gap-5'>
        <img src={r4} alt="" />
        <img src={r3} alt="" />
        <img src={r2} alt="" />
        <img src={r1} alt="" />
      </h3>
    </div>
    <div>
    <h3 className=' slider_content flex justify-between gap-5 '>
        <img src={r1} alt="" />
        <img src={r3} alt="" />
        <img src={r2} alt="" />
        <img src={r4} alt="" />
      </h3>
    </div>
  </Carousel>
 <div className="text-center">
 <button className='btn_Content bg-custom my-12 '>Смотреть все</button>
 </div>
        </div>
    </section>
  )
}
