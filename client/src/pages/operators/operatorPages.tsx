import React, { useState } from 'react'
import TableOperators from './components/tableOperators';
import StatInfo from './components/statInfo';
import PaddonsTable from './components/paddonsTable';
import RouteList from '../../components/routeList';
import { Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CancelIcon from '@mui/icons-material/Cancel';



export default function OperatorPages() {


    return (
        <div style={{ width: '100%', padding: '10px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding:'10px' }}>
                    {/* <div> */}
                    <div style={{  padding:'10px', marginRight:'50px' }}>
                        <Button
                            variant="contained"
                            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
                            color="error"
                        >
                            Открыть журнал
                            {"\n"}заказа отбракованных  {"\n"} деталей
                        </Button>
                    </div>
                    <div style={{  padding:'10px' }}>
                        <Button
                            variant="contained"
                            style={{ whiteSpace: 'pre-line', textAlign: 'center' }}
                            color="success"
                        >
                            <PlayCircleIcon />
                            Запустить
                        </Button>
                    </div>
                    <div style={{  padding:'10px' }}>
                        <Button
                            variant="contained"
                            color="error"
                        >
                            Сломался <CancelIcon/> 
                        </Button>
                    </div>
                    {/* </div> */}
                </div>
                <div style={{ width: '35%' }}><StatInfo /></div>
            </div>
            <div style={{ width: '100%', marginTop: '10px', }}>
                <TableOperators />
            </div>

            {/* <div style={{ width: '100%', marginTop: '10px', }}>
                
            </div> */}
            {/* <div style={{ width: '100%', marginTop: '10px', }}>
                <RouteList />
            </div> */}
        </div>
    );
}