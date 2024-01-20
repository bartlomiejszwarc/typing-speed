import StatisticsCard from './StatisticsCard';
import './Statistics.css';
import { useInputContext } from '../../hooks/useInputContext';
import { useState, useEffect } from 'react';

function StatisticsContainer() {
  const { mistakes, input } = useInputContext();
  const [accuracy, setAccuracy] = useState<number>(0);

  useEffect(() => {
    setAccuracy(input.length / (input.length + mistakes));
  }, [input, mistakes]);
  return (
    <div className='statistics-container'>
      <StatisticsCard title='Mistakes' value={mistakes || null} />
      <StatisticsCard title='Accuracy (%)' value={accuracy * 100 || null} />
      <StatisticsCard title='CPM' value={10} />
    </div>
  );
}
export default StatisticsContainer;
