import React from 'react'

// type Props = {}  {}: Props 

export default function RouteList() {
  return (
    <div style={{ width: '100%', border: '1px solid black', padding: ' 20px' }}>
      <div style={{ marginBottom: '20px' }}>

        <div>
          <h1>Название детали</h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%' }}>Артикул детали</h3>
          <h3 style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%' }}>Полуфабрикат</h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '20px', width: '65%' }}>

            <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%', marginBottom: '20px' }}>
              <h3>Модель___</h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%', width: '150px' }}>Поддон №</div>
              <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%', width: '150px' }}>Дата</div>
              <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%', width: '150px' }}>Кол-во</div>
            </div>

            <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%' }}>
              <h3>Материал</h3>
            </div>

          </div>

          <div >
            <h2>
              QR код
            </h2>
          </div>

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%' }}>Размер по раскрою</div>
          <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%' }}>Размер готовой детали</div>
        </div>
      </div>

      <div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>

          <div style={{ width: '45%', height:'400px' }}>

            <div>
              <h4>Деталей в заказе</h4>
            </div>

            <div>
              <div style={{ border: '1px solid black', padding: ' 20px',  width: '60%', height:'100px' }}>

              </div>
            </div>
          </div>

          <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5%', width: '35%', height:'400px' }}>
            Маршрутная таблица
          </div>

        </div>

      </div>

    </div>
  )
}