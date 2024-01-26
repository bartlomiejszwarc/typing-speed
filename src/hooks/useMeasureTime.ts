import { useState, useEffect } from 'react';
import { useInputContext } from './useInputContext';

export const useMeasureTime = () => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [milliseconds, setMilliseconds] = useState<number>(0);
  const [millisecondsTotal, setMillisecondsTotal] = useState<number>(0);
  const [startTime, setStartTime] = useState<any>(0);

  const { isGameStarted, isGameEnded, input, dispatch } = useInputContext();

  const measureTime = () => {
    useEffect(() => {
      if (isGameStarted) {
        setStartTime(performance.now());
      }
    }, [isGameStarted]);

    useEffect(() => {
      let timer: NodeJS.Timeout | undefined;
      if (!isGameEnded && startTime) {
        timer = setInterval(() => {
          var millis = performance.now() - startTime;
          setSeconds(Math.floor((millis / 1000) % 60));
          setMinutes(Math.floor((millis / 1000 / 60) % 60));
          setMilliseconds(Math.floor(millis % 1000));
          setMillisecondsTotal(Math.floor(millis));
        }, 1);
      }

      if (isGameEnded) {
        dispatch({ type: 'SET_MINUTES', payload: minutes });
        dispatch({ type: 'SET_SECONDS', payload: seconds });
        dispatch({ type: 'SET_MILLISECONDS', payload: milliseconds });
        dispatch({ type: 'SET_MILLISECONDS_TOTAL', payload: millisecondsTotal });
        if (timer !== undefined) {
          clearInterval(timer);
        }
      }

      if (input?.length === 0) {
        setSeconds(0);
        setMinutes(0);
        setMilliseconds(0);
        setMillisecondsTotal(0);
        if (timer !== undefined) {
          clearInterval(timer);
        }
      }

      return () => {
        if (timer !== undefined) {
          clearInterval(timer);
        }
      };
    }, [startTime, isGameEnded, input]);
  };

  return { measureTime, minutes, seconds, milliseconds, millisecondsTotal };
};
