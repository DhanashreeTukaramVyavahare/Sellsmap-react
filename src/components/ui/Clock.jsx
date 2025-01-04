import React, { useState } from 'react';
import {useState, useEffect} from 'react';

const Clock = () => {
  const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    let interval;
    const countDown = ()=>{
      const destination = new Date('Nov 25, 2024').getTime();
      interval = setInterval(() => {
        const now =new Date().getTime();
        const diffreence =destination-now ;
        const days = Math.floor(diffreence/(1000*60*60*24));
        const hours = Math.floor(diffreence%(1000*60*60*24)/(1000*60*60));
        const minutes = Math.floor(diffreence%(1000*60*60)/(1000*60));
        const second = Math.floor(diffreence%(1000*60)/(1000));
        if(destination < 0){
          clearInterval(interval.current())
        }
        else{
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(second);

        }
        
      });
    }
useEffect(() =>{countDown()});

  return (

    <div className='clock_wrapper d-flex align-items-center gap-3'>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center '>
          <h1 className='text-white fs-3 mb-2 '>{days}</h1>
          <h5 className='text-white fs-5 '>days</h5>
          </div>
          <span className='text-white fs-1'>:</span>
      </div>
      
      <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center '>
          <h1 className='text-white fs-3 mb-2 '>{hours}</h1>
          <h5 className='text-white fs-5 '>hours</h5>
          </div>
          <span className='text-white fs-1'>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center '>
          <h1 className='text-white fs-4 mb-2 '>{minutes}</h1>
          <h5 className='text-white fs-5 '>minutes</h5>
          </div>
          <span className='text-white fs-1'>:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className='text-center '>
          <h1 className='text-white fs-3 mb-2 '>{seconds}</h1>
          <h5 className='text-white fs-5 '>seconds</h5>
          </div>
      </div>
    </div>
    
  )
}

export default Clock;