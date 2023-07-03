import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import FCS from './FlipClock.module.css';

const Completed = () => {
  return <h2>Скоро будет новый набор</h2>;
};

const FlipClock = () => {
  const endTime = new Date('2023-07-17T19:00:00').getTime();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <section className={FCS.FlipClock}>
      <h1 className={`textC ${isMobile ? 'textC-mobile' : ''}`}>
        {isCompleted ? <p>Вы не успели</p> : <span>НАЧАЛО КУРСОВ ЧЕРЕЗ</span>}
      </h1>
      <div className={FCS.center}>
        {isCompleted && <Completed />}
        <FlipClockCountdown onComplete={handleComplete} to={endTime} />
      </div>
    </section>
  );
};

export default FlipClock;