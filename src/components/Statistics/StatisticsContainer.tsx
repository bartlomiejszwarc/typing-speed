import StatisticsCard from './StatisticsCard';
import './Statistics.css';
import { useInputContext } from '../../hooks/useInputContext';
import { useState, useEffect } from 'react';

function StatisticsContainer() {
  const { mistakes, input, seconds } = useInputContext();
  const [accuracy, setAccuracy] = useState<number>(0);
  const [charsPerMinute, setCharsPerMinute] = useState<number>(0);

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
      <StatisticsCard title='Mistakes' value={mistakes || null} />
      <StatisticsCard title='Accuracy (%)' value={accuracy * 100 || null} />
      <StatisticsCard title='CPM' value={Math.round(charsPerMinute) || null} />
    </div>
  );
}
export default StatisticsContainer;
