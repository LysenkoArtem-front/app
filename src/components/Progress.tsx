//import React from 'react';
import { LinearProgress } from "@mui/material";

export const Progress = ({ value }:any) => {
  return (
    <div>
    <LinearProgress 
    color="error"
    variant='determinate'
    value={value}
    sx={{height:40}}/>
    {value+'%'}
    </div>
    );
  //   <div>
  //     <div style={{ width: '100%', height: '20px', backgroundColor: '#ccc' }}>
  //       <div
  //         style={{
  //           width: `${value}%`,
  //           height: '100%',
  //           backgroundColor: '#00bcd4',
  //         }}
  //       ></div>
  //     </div>
  //     <div>{`${value}%`}</div>
  //   </div>
}
