import './DialogTopScore.scss';
import { useState, useEffect } from 'react';
import StatisticsAverageCard from '../Statistics/StatisticsAverage/StatisticsAverageCard';
interface IFieldProps {
  place: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  mistakes: number;
  accuracy: number;
  cpm: number;
  totalRecords: number;
}
function FieldTopScore({ place, minutes, seconds, milliseconds, mistakes, accuracy, cpm, totalRecords }: IFieldProps) {
  const [placeClass, setPlaceClass] = useState<string>('');
  useEffect(() => {
    switch (place) {
      case 0:
        setPlaceClass('score-field-first-place');
        return;
      case 1:
        setPlaceClass('score-field-second-place');
        return;
      case 2:
        setPlaceClass('score-field-third-place');
        return;
      default:
        break;
    }
  }, []);

  const ScoreFields = () => {
    return (
      <>
        <div className='score-field-container'>
          <span className='score-title'>{place + 1}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
          <span>{milliseconds}</span>
          <span>{mistakes}</span>
          <span>{accuracy}</span>
          <span>{cpm > 0 ? cpm : 'N/A'}</span>
        </div>
        {place !== totalRecords - 1 && (
          <div
            style={{
              height: '1px',
              width: '100%',
              backgroundColor: '#d4d4d4',
              marginTop: '3px',
              marginBottom: '3px',
            }}
          ></div>
        )}
      </>
    );
  };
  return (
    <>
      <ScoreFields />
    </>
  );
}
export default FieldTopScore;
