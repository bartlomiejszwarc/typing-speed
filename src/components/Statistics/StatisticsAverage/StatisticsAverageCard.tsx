import GaugeChart from 'react-gauge-chart';
import './../Statistics.scss';
interface IProps {
  text: string;
  value: number;
  percentage: number;
}

function StatisticsAverageCard({ text, value, percentage }: IProps) {
  return (
    <div className='average-statistic-container'>
      <GaugeChart
        id='gauge-chart3'
        nrOfLevels={1}
        colors={['#ea580c']}
        arcWidth={0.1}
        percent={percentage || 0}
        formatTextValue={() => ''}
        animDelay={100}
        animateDuration={3500}
      />
      <span className='average-statistic-text-value'>{value || '--'}</span>
      <span className='average-statistic-text-title'>{text}</span>
    </div>
  );
}
export default StatisticsAverageCard;
