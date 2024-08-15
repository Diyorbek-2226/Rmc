import Iconka from '../../assets/icon.svg'
import {InstagramOutlined, WhatsAppOutlined ,FacebookOutlined } from '@ant-design/icons'
import { FaTelegramPlane } from "react-icons/fa"
import foooters from '../../assets/footer.svg'

export const Footer = () => {
  return (
   <footer className='mt-36 bg-footer'>
    <div className="main-container ">
       <div className='flex items-center justify-between'>
       <div className="footer_icon">
            <img src={Iconka} alt="" />
        </div>
        <div className="icon flex items-center gap-4">
          <p><InstagramOutlined /></p> 
          <p><FaTelegramPlane /></p>
          <p><WhatsAppOutlined /></p>
          <p><FacebookOutlined /></p>
        </div>
       </div>
       <hr className='text-red-500 my-8' />
       <ul className="footer_lists flex gap-36">
        <li className="footer_list">
            <h1 className="text-xl font-[500]">
            Услуги
            </h1>
            <p>Купить</p>
            <p>Арендовать</p>
            <p>Продать</p>
            <p>Оценить</p>
        </li>
        <li className="footer_list">
        <h1 className="text-xl font-[500]">
        Недвижимость
            </h1>
            <p>Квартиры</p>
            <p>Новостройки</p>
            <p>Дома и участки</p>
            <p>Коммерческая</p>
        </li>
        <li className="footer_list">
        <h1 className="text-xl font-[500]">
        Компания
            </h1>
            <p>О нас</p>
            <p>Блог</p>
            <p>Контакты</p>
            <p>Связаться</p>
        </li>
        <li className="footer_list">
        <h1 className="text-xl font-[500]">
        Другое
            </h1>
            <p>Ипотечный калькулятор</p>
            <p>Инвестиции в недвижимость в Дубае</p>
            <p> Дубае</p>
            
        </li>
       </ul>
       <hr  className='max-w-full mt-12 mb-4'/>
       <div className='flex items-center justify-between'>
        <small>2024 © RMC De Luxe real estate LLC. Все права защищены</small>
<div className="imges">
    <img src={foooters} alt="" />
</div>
       </div>
    </div>
   </footer>
  )
}
