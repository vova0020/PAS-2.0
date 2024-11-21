
import React from 'react'
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));

export default function StatInfo() {
    return (
        <div style={{backgroundColor:'#dcdcdc', padding:'10px', width:'100%'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{border:'1px solid black', borderRadius:'40px', padding:'15px'}}>
                    <h5 style={{color:'black'}}>Норма выработки</h5>
                    <p style={{color:'black'}}>8000</p>
                </div>
                <div style={{border:'1px solid black', borderRadius:'40px', padding:'15px'}}>
                    <h5 style={{color:'black'}}>Выработка за смену</h5>
                    <p style={{color:'black'}}>4685</p>
                </div>
                <div style={{border:'1px solid black', borderRadius:'40px', padding:'15px'}}>
                    <h5 style={{color:'black'}}>Сдельная 3п</h5>
                    <p style={{color:'black'}}>1000 р</p>
                </div>
            </div>
            <div style={{ padding:'15px'}}>
            <BorderLinearProgress variant="determinate" value={50} />
            </div>
        </div>
    )
}