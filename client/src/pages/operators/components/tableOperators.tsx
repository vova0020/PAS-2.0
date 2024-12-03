import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Drawer } from '@mui/material'
import React, { useState } from 'react'
import ForwardIcon from '@mui/icons-material/Forward';
import PaddonsTable from './paddonsTable';
import RouteList from '../../../components/routeList';

type Props = {}

export default function TableOperators({ }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    // Опционально можно обработать клавишу Esc или Tab
    if (event.type === "keydown" && (event as React.KeyboardEvent).key === "Tab") {
      return;
    }
    setIsDrawerOpen(open);
  };
  

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
            {/* {rows.map((row) => ( */}
            <TableRow
              //   key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell> */}
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>1</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>f1d1z</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>Полка Шкаф</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>302х864</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}><Button>Открыть чертеж</Button></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>400</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>0</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}><Button onClick={toggleDrawer(true)}><ForwardIcon fontSize='large' /></Button></TableCell>
            </TableRow>
            {/*    ))} */}
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

