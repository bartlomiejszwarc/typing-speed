import { useInputContext } from '../../hooks/useInputContext';
import CachedIcon from '@mui/icons-material/Cached';
import { useMeasureTime } from './../../hooks/useMeasureTime';
import { useEffect, useState } from 'react';
import './Stopwatch.scss';
function Stopwatch() {
  const { measureTime, seconds, minutes, milliseconds } = useMeasureTime();
  const { dispatch } = useInputContext();
  const [buttonStyle, setButtonStyle] = useState<string>('restart-button');

  measureTime();

  const handleOnClick = () => {
    setButtonStyle('restart-button-rotate');

    dispatch({
      type: 'RESET',
      payload: undefined,
    });
    setTimeout(() => {
      setButtonStyle('restart-button');
    }, 1000);
  };
  useEffect(() => {
    dispatch({ type: 'SET_SECONDS', payload: seconds });
  }, [seconds]);

  return (
    <div className='container-button-position-wrapper'>
      <div className='timer-container'>
        <div className='timer-field'>
          <span className='timer-field-time'>
            {Array.from({ length: 2 - minutes.toString().length }, () => 0)}
            {Math.round(minutes)}
          </span>
          <span className='timer-field-title'>minutes</span>
        </div>
        <div className='timer-field'>
          <span className='timer-field-time'>
            {Array.from({ length: 2 - seconds.toString().length }, () => 0)}
            {Math.round(seconds)}
          </span>
          <span className='timer-field-title'>seconds</span>
        </div>
        <div className='timer-field'>
          <span className='timer-field-time'>
            {Array.from({ length: 3 - milliseconds.toString().length }, () => 0)}
            {Math.round(milliseconds)}
          </span>
          <span className='timer-field-title'>milliseconds</span>
        </div>
      </div>
      <div className={`${buttonStyle}`} onClick={handleOnClick}>
        <CachedIcon sx={{ color: 'white', fontSize: 36 }} />
      </div>
    </div>
  );
}
export default Stopwatch;
