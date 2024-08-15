import rasm1 from '../../assets/katta.svg'
import rasm2 from '../../assets/kichik.svg'
import Chec from '../../assets/Checkmark.svg'
import './Section.css'



export const Section = () => {
    const headerStyle = {
        backgroundColor: '#f2f2f2',
        padding: '10px 20px',
        border: '0.5px solid #ddd',
        textAlign: 'center',
        fontSize: '18px',
      };
      
      const cellStyle = {
        padding: '20px 35px',
        border: '0.5px solid #ddd',
        textAlign: 'center',
        fontSize: '16px',
      };

  return (<>
    <section className='my-8 bg-create py-28'>
        <div className="main-container">
            
                <div className="section_title flex justify-between items-center ">
                    <div className="section_left">
                    <h2  className='text-[30px] font-[500] '>Инвестиции в <br />
                        
                        недвижимость в Дубае</h2>
                      <p className='my-4'>Недвижимость в Дубае предоставляет отличные возможности для <br /> получения стабильного дохода и увеличения капитала</p>
                      <p  className='my-4'>Полный цикл инвестиций: От анализа рынка и подбора объектов до управления <br /> инвестициями и их реализации.</p>
                      <p  className='my-4'>Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая <br /> высокое качество обслуживания и надежность.</p>
                      <button className='btn_Content bg-custom my-6'>
                      Подробнее
                      </button>
                    </div>
                    <div className="section_right flex items-center ">
                       <img className='absolute top-56 right-80 ' src={rasm2} alt="" />
                    </div>
                </div>
            </div>
    </section>
    <div>
        <div className="main-container">
            
                <h1 className='text-[30px] font-[500] '>Что входит в услугу <br /> управления недвижимостью</h1>
               <div className="my-8">
               <table className='' style={{ borderCollapse: 'collapse', width: '100%', margin: '0 auto' }}>
        <tbody>
          <tr className='flex'>
          
            <td className='flex items-center gap-2 w-full ' style={cellStyle}>
                <img src={Chec} alt="" />
                <p>Проверка арендаторов (кредитная история, рекомендации)</p>
            </td>
            <td className='flex items-center gap-2 w-full' style={cellStyle}>
                <img src={Chec} alt="" />
                <p>Регулярное техническое обслуживание</p>
            </td>
          </tr>
          <tr className='flex '>
          
          <td className='flex items-center gap-2 w-full' style={cellStyle}>
              <img src={Chec} alt="" />
              <p>Подготовка и подписание договоров аренды</p>
          </td>
          <td className='flex items-center gap-2 w-full' style={cellStyle}>
              <img src={Chec} alt="" />
              <p>Организация и проведение ремонтных работ</p>
          </td>
        </tr>
        <tr className='flex '>
          
          <td className='flex items-center gap-2 w-full' style={cellStyle}>
              <img src={Chec} alt="" />
              <p>Сбор арендной платы</p>
          </td>
          <td className='flex items-center gap-2 w-full' style={cellStyle}>
              <img src={Chec} alt="" />
              <p>Контроль за состоянием недвижимости</p>
          </td>
        </tr>
        <tr className='flex '>
          
          <td className='flex items-center gap-2 w-full' style={cellStyle}>
              <img src={Chec} alt="" />
              <p>Обработка запросов и жалоб арендаторов</p>
          </td>
          <td className='flex items-center gap-2 w-full' style={cellStyle}>
              <img src={Chec} alt="" />
              <p>Подбор надежных арендаторов</p>
          </td>
        </tr>
        <tr className='flex '>
          
          <td className='flex items-center gap-2 w-full' style={cellStyle}>
              <img src={Chec} alt="" />
              <p>Контроль соблюдения условий аренды</p>
          </td>
          
        </tr>
          
        </tbody>
      </table>
               </div>

            </div>
        </div>
    
    </>
  )
}
