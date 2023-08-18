//import React from 'react';
import { Slider } from "@mui/material";


export const Sliders = ({ min, max, step, value, onChange, disabled }: any) => {
  return (
    <div>
    <Slider
      valueLabelDisplay="auto"
      aria-label="Small"
      min={min}
      max={max}
      color='secondary'
      step={step}
      value={value}
      onChange={(e: any): any => onChange(parseInt(e.target.value))}
      disabled={disabled}
    />
    </div>
  );
};

