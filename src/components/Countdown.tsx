// import React from 'react';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
// import boopSfx from '/Users/artemlysenko/it/countDown/app/public/sounds/boop.wav'
import { Sliders } from './Sliders';
import { Progress } from './Progress';
import { Stack, TextField } from '@mui/material';
import { Buttons } from './Buttons';
import { Inputs } from './Inputs';


export const Countdown = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [play, { stop }] = useSound('./sounds/boop.wav');


    useEffect(() => {
        if (isRunning) {
            const timer = setInterval(() => {
                if (minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    play();
                    return;
                }

                if (seconds === 0) {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [isRunning, minutes, seconds]);

    const handleSliderChange = (value: any): any => {
        setInitialTime(value);
        setMinutes(Math.floor(value / 60));
        setSeconds((value % 60));
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'minutes') {
            setMinutes(parseInt(value));
        } else if (name === 'seconds') {
            setSeconds(parseInt(value));
        }
        setInitialTime(minutes * 60 + seconds);
    };

    const handleStartPause = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
        stop();
    };

    const handleReset = () => {

        setIsRunning(false);
        setMinutes(0);
        setSeconds(0);
        setInitialTime(0);
        setProgress(0);
        stop();
    };

    useEffect(() => {
        setProgress(((minutes * 60 + seconds) * 100) / initialTime);
    });

    return (
        <Stack direction='column' spacing={2} sx={{ margin: 5 }}>
            <Stack direction='column' spacing={4}>
                Minutes:
                <Inputs
                    value={minutes}
                    onChange={handleInputChange}
                    disabled={isRunning}
                />
            </Stack>
            <Stack direction='column' spacing={4}>
                Seconds:
                <Inputs
                    value={seconds}
                    onChange={handleInputChange}
                    disabled={isRunning}
                />
            </Stack>
            <div>
                <Sliders
                    min={0}
                    max={60}
                    step={15}
                    value={initialTime}
                    onChange={handleSliderChange}
                    disabled={isRunning}
                />
            </div>
            <div>
                {progress+'%'}
                <Progress value={progress} />
            </div>
            <Stack direction='row' spacing={2}>
                <Buttons variant='contained' color='success' text={isRunning ? 'Pause' : 'Start'} onClick={handleStartPause} />
                <Buttons variant='contained' color='error' text='Reset' onClick={handleReset} />
            </Stack>
        </Stack>
    );
};

