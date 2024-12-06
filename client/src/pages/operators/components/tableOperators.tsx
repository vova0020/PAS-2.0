import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Drawer } from '@mui/material'
import React, { useState } from 'react'
import ForwardIcon from '@mui/icons-material/Forward';
import PaddonsTable from './paddonsTable';


export default function TableOperators() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    // Опционально можно обработать клавишу Esc или Tab
    if (event.type === "keydown" && (event as React.KeyboardEvent).key === "Tab") {
      return;
    }
    setIsDrawerOpen(open);
  };
  const rows = [
    {prioritet: 1, artikle: 'Afs1245', datailName:'Полкка', size:'420x300', coll:600, complite:10},
    {prioritet: 2, artikle: '#3411', datailName:'Тумбочка', size:'420x300', coll:800, complite:0},
    {prioritet: 3, artikle: '@1341', datailName:'Стол', size:'6820x700', coll:400, complite:0},
    {prioritet: 4, artikle: '!314', datailName:'Шкаф', size:'400x500', coll:100, complite:0},
    {prioritet: 5, artikle: '~3241', datailName:'Кухня', size:'1200x880', coll:300, complite:0}
  ]
  

  return (
    <div style={{ width: '100%' }}>
      <TableContainer component={Paper} style={{
        border: '1px solid black',
        borderRadius: '20px',
        // padding: '15px', 
        boxShadow: '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.5)', // Более глубокая тень
        backgroundColor: '#F0F0F3'

      }}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Приоритет</TableCell>
              {/* <TableCell align="center">Заказ</TableCell> */}
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Артикул детали</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Название детали</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Размер</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Техническая Информация</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Количество</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Выполнено</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.datailName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>{row.prioritet}</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>{row.artikle}</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>{row.datailName}</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>{row.size}</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}><Button>Открыть чертеж</Button></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>{row.coll}</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>{row.complite}</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}><Button onClick={toggleDrawer(true)}><ForwardIcon fontSize='large' /></Button></TableCell>
            </TableRow>
               ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        anchor="right" // Выезжает с правой стороны
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "55%", // Ширина бокового меню
          },
        }}
      >
        <PaddonsTable name={'Полка Шкаф'} />
      </Drawer>
      
    </div>
  )
}

