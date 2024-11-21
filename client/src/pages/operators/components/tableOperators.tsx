import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import React from 'react'

type Props = {}

export default function TableOperators({}: Props) {
  return (
    <div>
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Приоритет</TableCell>
                <TableCell align="right">Заказ</TableCell>
                <TableCell align="right">Артикул детали</TableCell>
                <TableCell align="right">Название детали</TableCell>
                <TableCell align="right">Размер</TableCell>
                <TableCell align="right">Количество</TableCell>
                <TableCell align="right">Адрес</TableCell>
                <TableCell align="right">Техническая Информация</TableCell>
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
                  <TableCell align="right">1</TableCell>
                  <TableCell align="right">ЗНП№ 1234</TableCell>
                  <TableCell align="right">f1d1z</TableCell>
                  <TableCell align="right">Полка Шкаф</TableCell>
                  <TableCell align="right">302х864</TableCell>
                  <TableCell align="right">400</TableCell>
                </TableRow>
            {/*    ))} */}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

