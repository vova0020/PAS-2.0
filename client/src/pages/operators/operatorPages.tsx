import React from 'react'
import TableOperators from './components/tableOperators';
import StatInfo from './components/statInfo';





export default function OperatorPages() {




    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <div></div>
                <div><StatInfo/></div>
            </div>
            <div style={{width: '100%'}}>
                <TableOperators/>
            </div>
        </div>
    );
}