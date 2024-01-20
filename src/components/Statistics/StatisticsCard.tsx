import './Statistics.css';
interface StatisticsProps {
  title: string | null;
  value: number | null;
}
function StatisticsCard({ title, value }: StatisticsProps) {
  return (
    <div className='statistics-card'>
      <span className='statistics-title'>{title}</span>
      {value && <span className='statistics-value'>{Math.round(value * 100) / 100}</span>}
      {!value && <span className='statistics-value'>--</span>}
    </div>
  );
}
export default StatisticsCard;
