import React, { useState } from 'react'
import TableOperators from './components/tableOperators';
import StatInfo from './components/statInfo';
import PaddonsTable from './components/paddonsTable';
import RouteList from '../../components/routeList';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';





export default function OperatorPages() {
   

    return (
        <div style={{ width: '100%', padding: '10px' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div></div>
                <div style={{ width: '35%' }}><StatInfo /></div>
            </div>
            <div style={{ width: '100%', marginTop: '10px', }}>
                <TableOperators />
            </div>
            
            <div style={{ width: '100%', marginTop: '10px', }}>
                
            </div>
            <div style={{ width: '100%', marginTop: '10px', }}>
                {/* <RouteList /> */}
            </div>
        </div>
    );
}