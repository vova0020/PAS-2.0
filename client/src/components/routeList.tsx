import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// type Props = {}  {}: Props 

export default function RouteList() {
  return (
    <div style={{ width: '100%', border: '1px solid black', padding: ' 20px' }}>
      <div style={{ marginBottom: '20px' }}>

        <div>
          <h1>Название детали</h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5px' }}>Артикул детали</h3>
          <h3 style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5px' }}>Полуфабрикат</h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', width: '100%' }}>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom: '20px', width: '65%' }}>

            <div style={{ border: '1px solid black', padding: ' 10px', borderRadius: '5px', marginBottom: '20px' }}>
              <h3>Модель:</h3>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ border: '1px solid black', padding: ' 10px', borderRadius: '5px', width: '150px', marginRight: '5px' }}>Поддон №:
                <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                  1
                </span>
              </div>
              <div style={{ border: '1px solid black', padding: ' 10px', borderRadius: '5px', width: '150px', marginRight: '5px' }}>Дата:
                <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                  15.11.2024
                </span>
              </div>
              <div style={{ border: '1px solid black', padding: ' 10px', borderRadius: '5px', width: '150px' }}>Кол-во:
                <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
                  100
                </span>
              </div>
            </div>

            <div style={{ border: '1px solid black', padding: ' 10px', borderRadius: '5px' }}>
              <h3>Материал: </h3>
            </div>

          </div>

          <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5px', width: '30%', height: '30%' }} >
            {/* <h2>
              QR код
            </h2> */}
            <img style={{ width: '100%', height: '100%' }} src="https://avatars.mds.yandex.net/i?id=4db0bb030753bb8510d0967e006ede91_l-5234784-images-thumbs&n=13" alt="" />
          </div>

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5px' }}>Размер по раскрою:
            <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
            400x222
            </span>
          </div>
          <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5px' }}>Размер готовой детали:
            <span style={{ fontWeight: 'bold', marginLeft: '5px' }}>
            400x222
            </span>
          </div>
        </div>
      </div>

      <div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>

          <div style={{ width: '55%', height: '400px' }}>

            <div>
              <h4>Деталей в заказе: </h4>
            </div>

            <div style={{ width: '100%', border: '1px solid black', borderRadius: '5px', padding: ' 20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Верхняя область */}
                <div style={{ width: '200px', height: '40px', border: '1px dashed black', marginBottom: '5px', textAlign: 'center' }}>
                  Название кромки
                </div>

                {/* Основной контейнер */}

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {/* Левая боковая часть */}
                  <div style={{ width: '40px', height: '200px', border: '1px dashed black', marginRight: '20px', writingMode: 'vertical-rl', textAlign: 'center', transform: ' rotate(180deg)', padding: '5px' }}>
                    Название кромки
                  </div>

                  {/* Центральный прямоугольник */}
                  <div>
                    <div style={{ width: '200px', height: '100px', border: '1px solid black', position: 'relative', top: '25%', textAlign: 'center' }}>
                      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        400 мм x 222 мм
                      </span>
                      <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px' }}>
                        2 мм
                      </div>
                      <div style={{ position: 'absolute', bottom: '-15px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px' }}>
                        0.8 мм
                      </div>
                      <div style={{ position: 'absolute', top: '50%', left: '-15px', transform: 'translateY(-50%) rotate(180deg)', fontSize: '12px', writingMode: 'vertical-lr' }}>
                        0.4 мм
                      </div>
                      <div style={{ position: 'absolute', top: '50%', right: '-15px', transform: 'translateY(-50%) rotate(180deg)', fontSize: '12px', writingMode: 'vertical-lr' }}>
                        0.4 мм
                      </div>
                    </div>
                  </div>


                  {/* Правая боковая часть */}
                  <div style={{ width: '40px', height: '200px', border: '1px dashed black', marginLeft: '20px', writingMode: 'vertical-rl', textAlign: 'center', transform: 'translateY(0%) rotate(180deg)', padding: '5px' }}>
                    Название кромки
                  </div>
                </div>

                {/* Нижняя область */}
                <div style={{ width: '200px', height: '40px', border: '1px dashed black', marginTop: '5px', textAlign: 'center' }}>
                  Название кромки
                </div>

                {/* Поле "Паз" */}
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  Паз: _______________________
                </div>
                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                  <Button variant="contained">Открыть чертеж</Button>
                </div>

              </div>
            </div>
          </div>

          <div style={{ width: '40%' }}>
            <div>
              <h4 style={{ textAlign: 'center' }}>Маршрутная таблица </h4>
            </div>
            <div style={{ border: '1px solid black', padding: ' 20px', borderRadius: '5px', width: '100%', height: '400px' }}>
              <div style={{ display: 'flex' }}>
                <p>Раскрой</p>
                <Checkbox
                  defaultChecked
                  disabled
                  sx={{
                    color: 'green', // Цвет чекбокса
                    '&.Mui-disabled': {
                      color: 'green', // Цвет для неактивного состояния
                    },
                  }}
                />
              </div>
              <div style={{ display: 'flex' }}>
                <p>Присадка</p>
                <Checkbox disabled />

              </div>
            </div>

          </div>

        </div>
        <div style={{ width: '90%', textAlign: 'center', border: '1px solid black', padding: ' 5px', borderRadius: '10px' }}>
          <h2>Название и номер заказа </h2>
        </div>

      </div>

    </div>
  )
}