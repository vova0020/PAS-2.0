import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Drawer } from '@mui/material'
import React, { useState } from 'react'

import RouteList from '../../../components/routeList';


interface PaddonsTableProps {
  name: string; // Указываем, что name — строка
}

export default function PaddonsTable({ name }: PaddonsTableProps) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    // Опционально можно обработать клавишу Esc или Tab
    if (event.type === "keydown" && (event as React.KeyboardEvent).key === "Tab") {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div style={{ width: '100%', display:'flex', flexDirection:'column', alignItems:'center', padding:'10px'}}>
      <h1>{name}</h1>
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
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Поддон №</TableCell>
              {/* <TableCell align="center">Заказ</TableCell> */}
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Адрес</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black', fontSize: '17px', fontWeight: "bold" }}>Кол-во</TableCell>

              <TableCell align="center" style={{ wordWrap: 'break-word', fontSize: '17px', fontWeight: "bold" }}></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', fontSize: '17px', fontWeight: "bold" }}></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', fontSize: '17px', fontWeight: "bold" }}></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', fontSize: '17px', fontWeight: "bold" }}></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word' }}></TableCell>

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
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>А -2.0.1</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word', border: '1px solid black' }}>100</TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word',  }}> <Button variant="contained" color="secondary" onClick={toggleDrawer(true)}>
                Открыть МЛ
              </Button></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word',  }}><Button variant="contained" sx={{backgroundColor:'#ff9400', color:'black'}}>В работу</Button></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word',  }}><Button variant="contained">Частичное выполнение</Button></TableCell>
              <TableCell align="center" style={{ wordWrap: 'break-word',  }}><Button variant="contained" color="success">
                Готово
              </Button></TableCell>
              {/* <TableCell align="center" style={{ wordWrap: 'break-word',  }}><Button><ForwardIcon fontSize='large' /></Button></TableCell> */}
            </TableRow>
            {/*    ))} */}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        anchor="left" // Выезжает с правой стороны
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "45%", // Ширина бокового меню
          },
        }}
      >
        <RouteList />
      </Drawer>
    </div>
  )
}

