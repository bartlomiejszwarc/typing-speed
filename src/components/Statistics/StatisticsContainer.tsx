import StatisticsCard from './StatisticsCard';
import './Statistics.scss';
import { useInputContext } from '../../hooks/useInputContext';
import { useState, useEffect } from 'react';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SpeedIcon from '@mui/icons-material/Speed';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { useSaveData } from '../../hooks/useSaveData';
function StatisticsContainer() {
  const { mistakes, input, minutes, seconds, milliseconds, millisecondsTotal, isGameEnded } = useInputContext();
  const [accuracy, setAccuracy] = useState<number>(0);
  const [charsPerMinute, setCharsPerMinute] = useState<number>(0);
  const { saveData } = useSaveData();

  const iconSize: any = 'large';
  useEffect(() => {
    setAccuracy(input.length / (input.length + mistakes));
  }, [input, mistakes]);

  useEffect(() => {
    const cpm = Math.floor((input.length / seconds) * 60);
    if (seconds > 0) {
      setCharsPerMinute(cpm);
    }
  }, [input, seconds]);

  useEffect(() => {
    if (isGameEnded && milliseconds > 0) {
      saveData(minutes, seconds, milliseconds, millisecondsTotal, mistakes, accuracy, charsPerMinute);
    }
  }, [isGameEnded, minutes, seconds, milliseconds, mistakes, accuracy, charsPerMinute]);

  return (
    <div className='statistics-container'>
      <StatisticsCard
        title='Mistakes'
        value={mistakes || null}
        icon={<SentimentDissatisfiedIcon fontSize={iconSize} sx={{ color: '#262626' }} />}
      />
      <StatisticsCard
        title='Accuracy (%)'
        value={accuracy * 100 || null}
        icon={<GpsFixedIcon fontSize={iconSize} sx={{ color: '#262626' }} />}
      />
      <StatisticsCard
        title='CPM'
        value={Math.round(charsPerMinute) || null}
        icon={<SpeedIcon fontSize={iconSize} sx={{ color: '#262626' }} />}
      />
    </div>
  );
}
export default StatisticsContainer;
