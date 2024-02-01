import './Statistics.scss';
import { SvgIconProps } from '@mui/material';
import { ReactElement } from 'react';
interface IStatisticsProps {
  title: string | null;
  value: number | null;
  icon: ReactElement<SvgIconProps> | null;
}
function StatisticsCard({ title, value, icon }: IStatisticsProps) {
  return (
    <div className='statistics-card'>
      <div>{icon}</div>
      <span className='statistics-title'>{title}</span>
      {value && <span className='statistics-value'>{Math.round(value * 100) / 100}</span>}
      {!value && <span className='statistics-value'>--</span>}
    </div>
  );
}
export default StatisticsCard;
