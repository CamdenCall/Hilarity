"use client"
import React, { useState, useEffect } from 'react';

interface CounterProps {
  start: number;
  end: number;
  duration: number;
}

const Counter: React.FC<CounterProps> = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = (end - start) / (duration / 10); // Update every 10ms
    const interval = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if ((increment > 0 && nextValue >= end) || (increment < 0 && nextValue <= end)) {
          clearInterval(interval);
          return end;
        }
        return nextValue;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  return <div className="-s32 -w600 -italic number">{formatNumber(count)}</div>;
};

export default Counter;
