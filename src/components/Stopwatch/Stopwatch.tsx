import { useInputContext } from './../../hooks/useInputContext';
import CachedIcon from '@mui/icons-material/Cached';
import { useMeasureTime } from './../../hooks/useMeasureTime';
import './Stopwatch.css';
function Stopwatch() {
  const { measureTime, seconds, minutes, milliseconds } = useMeasureTime();
  const { dispatch } = useInputContext();

  measureTime();

  const handleOnClick = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className='timer-wrapper'>
      <div className='container-button-position-wrapper'>
        <div className='timer-container'>
          <div className='timer-field'>
            <span className='timer-field-time'>{Math.round(minutes)}</span>
            <span className='timer-field-title'>minutes</span>
          </div>
          <div className='timer-field'>
            <span className='timer-field-time'>{Math.round(seconds)}</span>
            <span className='timer-field-title'>seconds</span>
          </div>
          <div className='timer-field'>
            <span className='timer-field-time'>{Math.round(milliseconds)}</span>
            <span className='timer-field-title'>milliseconds</span>
          </div>
        </div>
        <div className='restart-button' onClick={handleOnClick}>
          <CachedIcon sx={{ color: 'white', fontSize: 36 }} />
        </div>
      </div>
    </div>
  );
}
export default Stopwatch;
