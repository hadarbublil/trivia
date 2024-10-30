import { useState, useEffect } from 'react';

export const useTimer = (initialTime, onTimeUp) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    if (timer < 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer, onTimeUp]);

  const resetTimer = () => {
    setTimer(initialTime);
  };

  return { timer, resetTimer };
};

export default useTimer