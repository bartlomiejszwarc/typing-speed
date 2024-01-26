import './DialogTopScore.scss';
import { useGetData } from '../../hooks/useGetData';
import { useEffect, useState } from 'react';
import FieldTopScore from './FieldTopScore';
interface IRecord {
  minutes: number;
  seconds: number;
  milliseconds: number;
  millisecondsTotal: number;
  mistakes: number;
  accuracy: number;
  cpm: number;
}

interface IAverageStats {
  averageMistakes: number;
  averageAccuracy: number;
  averageCpm: number;
}

interface IStats {
  mistakes: number[];
  accuracy: number[];
  cpm: number[];
}

function DialogTopScore() {
  const { records, getData } = useGetData();
  const [recordsFromStorage, setRecordsFromStorage] = useState<IRecord[]>([]);
  const [averageStats, setAverageStats] = useState<IAverageStats>({
    averageMistakes: 0,
    averageAccuracy: 0,
    averageCpm: 0,
  });
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const sortedRecords = records.sort((a, b) => {
      return a.millisecondsTotal - b.millisecondsTotal;
    });
    setRecordsFromStorage(sortedRecords.slice(0, 5));
  }, [records]);

  const getTotalStats = (stats: IStats) => {
    const mistakesSum = stats.mistakes.reduce((sum, mistake) => sum + mistake, 0);
    const mistakesTotal = stats.mistakes.reduce((sum, _) => sum + 1, 0);
    const accuracySum = stats.accuracy.reduce((sum, accuracy) => sum + accuracy, 0);
    const accuracyTotal = stats.accuracy.reduce((sum, _) => sum + 1, 0);
    const cpmSum = stats.cpm.reduce((sum, cpm) => sum + cpm, 0);
    const cpmTotal = stats.cpm.reduce((sum, _) => sum + 1, 0);

    calculateAverageStats(mistakesSum, mistakesTotal, accuracySum, accuracyTotal, cpmSum, cpmTotal);
  };

  const calculateAverageStats = (
    mistakesSum: number,
    mistakesTotal: number,
    accuracySum: number,
    accuracyTotal: number,
    cpmSum: number,
    cpmTotal: number,
  ) => {
    const mistakesAvg = mistakesSum / mistakesTotal;
    const accuracyAvg = (accuracySum * 100) / accuracyTotal;
    const cpmAvg = cpmSum / cpmTotal;

    const stats: IAverageStats = {
      averageMistakes: Math.floor(mistakesAvg),
      averageAccuracy: Math.floor(accuracyAvg),
      averageCpm: Math.floor(cpmAvg),
    };
    setAverageStats(stats);
  };

  useEffect(() => {
    const mistakesArray = records.map((record: IRecord) => record.mistakes);
    const accuracyArray = records.map((record: IRecord) => record.accuracy);
    const cpmArray = records.map((record: IRecord) => record.cpm);

    const stats: IStats = {
      mistakes: mistakesArray,
      accuracy: accuracyArray,
      cpm: cpmArray,
    };
    getTotalStats(stats);
  }, [records]);

  const Titles = () => {
    return (
      <div className='titles-container'>
        <span>Place</span>
        <span>Minutes</span>
        <span>Seconds</span>
        <span>Milliseconds</span>
        <span>Mistakes</span>
        <span>Accuracy (%)</span>
        <span>CPM</span>
      </div>
    );
  };

  return (
    <div className='dialog-container'>
      <Titles />
      {recordsFromStorage.map((record, key) => (
        <FieldTopScore
          place={key}
          minutes={record.minutes}
          seconds={record.seconds}
          milliseconds={record.milliseconds}
          mistakes={record.mistakes}
          accuracy={record.accuracy * 100}
          cpm={record.cpm}
        />
      ))}
    </div>
  );
}
export default DialogTopScore;
