
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

  const castBoxShadow = '-5px -5px 5px rgba(255, 255, 255, 0.4), 5px 5px 10px rgba(174, 174, 192, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF'
  // const castBoxShadow = '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.5)'


  return (
    <div style={{ padding: '10px', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            border: '1px solid black',
            borderRadius: '40px',
            padding: '10px',
            boxShadow: castBoxShadow, // Более глубокая тень
            marginRight: '10px'
            // backgroundColor: '#e0e0e1'
          }}
        >
          <h5 style={{ color: 'black' }}>Норма выработки</h5>
          <p style={{ color: 'black' }}>8000</p>
        </div>
        <div
          style={{
            border: '1px solid black',
            borderRadius: '40px',
            padding: '10px',
            boxShadow: castBoxShadow, // Более глубокая тень
            marginRight: '10px'
            // backgroundColor: '#e0e0e1'
          }}
        >
          <h5 style={{ color: 'black' }}>Выработка за смену</h5>
          <p style={{ color: 'black' }}>4685</p>
        </div>
        <div
          style={{
            border: '1px solid black',
            borderRadius: '40px',
            padding: '10px',
            boxShadow: castBoxShadow, // Более глубокая тень
            marginRight: '10px'
            // backgroundColor: '#e0e0e1'
          }}
        >
          <h5 style={{ color: 'black' }}>Сдельная 3п</h5>
          <p style={{ color: 'black' }}>1000 р</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '50px',
          border: '1px solid black',
          borderRadius: '40px',
          marginTop: '10px',
          padding: '1px 20px',
          boxShadow: castBoxShadow, // Более глубокая тень
          // backgroundColor: '#e0e0e1'
        }}
      >
        <p>0%</p>
        <div style={{ flexGrow: 1, margin: '0 10px' }}>
          <BorderLinearProgress variant="determinate" value={50} />
        </div>
        <p>100%</p>
      </div>
    </div>
  );

}