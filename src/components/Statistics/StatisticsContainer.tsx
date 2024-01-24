import StatisticsCard from './StatisticsCard';
import './Statistics.css';
import { useInputContext } from '../../hooks/useInputContext';
import { useState, useEffect } from 'react';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SpeedIcon from '@mui/icons-material/Speed';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

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
        icon={<SentimentDissatisfiedIcon fontSize={iconSize} />}
      />
      <StatisticsCard
        title='Accuracy (%)'
        value={accuracy * 100 || null}
        icon={<PrecisionManufacturingIcon fontSize={iconSize} />}
      />
      <StatisticsCard title='CPM' value={Math.round(charsPerMinute) || null} icon={<SpeedIcon fontSize={iconSize} />} />
    </div>
  );
}
export default StatisticsContainer;
