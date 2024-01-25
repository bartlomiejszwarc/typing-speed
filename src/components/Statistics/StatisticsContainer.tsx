import StatisticsCard from './StatisticsCard';
import './Statistics.scss';
import { useInputContext } from '../../hooks/useInputContext';
import { useState, useEffect } from 'react';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SpeedIcon from '@mui/icons-material/Speed';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
function StatisticsContainer() {
  const { mistakes, input, seconds } = useInputContext();
  const [accuracy, setAccuracy] = useState<number>(0);
  const [charsPerMinute, setCharsPerMinute] = useState<number>(0);

  const iconSize: any = 'large';
  useEffect(() => {
    setAccuracy(input.length / (input.length + mistakes));
  }, [input, mistakes]);

  useEffect(() => {
    const cpm = (input.length / seconds) * 60;
    if (seconds > 0) {
      setCharsPerMinute(cpm);
    }
  }, [input, seconds]);

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
