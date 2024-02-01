import './DialogTopScore.scss';
import { useGetData } from '../../hooks/useGetData';
import { useEffect, useState } from 'react';
import FieldTopScore from './FieldTopScore';
import StatisticsAverageCard from '../Statistics/StatisticsAverage/StatisticsAverageCard';
import { useInputContext } from '../../hooks/useInputContext';
import { useDialogContext } from '../../hooks/useDialogContext';
import CloseIcon from '@mui/icons-material/Close';

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
  const { testCharsLength } = useInputContext();
  const { dispatch } = useDialogContext();
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

  const handleOnClick = () => {
    dispatch({ type: 'SET_IS_TOPSCORE_DIALOG_OPEN', payload: false });
  };

  const Titles = () => {
    const titles = ['Place', 'Minutes', 'Seconds', 'Milliseconds', 'Mistakes', 'Accuracy (%)', 'CPM'];
    return (
      <div className='titles-container'>
        {titles.map((title, index) => (
          <span key={index}>{title}</span>
        ))}
      </div>
    );
  };

  const StatisticsAverageContaier = () => {
    return (
      <div className='average-container'>
        <StatisticsAverageCard
          text={'Average mistakes'}
          value={averageStats.averageMistakes}
          percentage={averageStats.averageMistakes / testCharsLength}
        />
        <StatisticsAverageCard
          text={'Average accuracy (%)'}
          value={averageStats.averageAccuracy}
          percentage={averageStats.averageAccuracy / 100}
        />
        <StatisticsAverageCard
          text={'Average cpm'}
          value={averageStats.averageCpm}
          percentage={averageStats.averageCpm / 1000}
        />
      </div>
    );
  };

  const CloseDialogButton = () => {
    return (
      <button className='close-dialog-button' onClick={handleOnClick}>
        <CloseIcon sx={{ color: '#404040' }} />
      </button>
    );
  };

  return (
    <div className='dialog-container'>
      <StatisticsAverageContaier />
      <Titles />
      {recordsFromStorage.map((record, key) => (
        <FieldTopScore
          place={key}
          minutes={record.minutes}
          seconds={record.seconds}
          milliseconds={record.milliseconds}
          mistakes={record.mistakes}
          accuracy={Math.floor(record.accuracy * 100)}
          cpm={record.cpm}
          totalRecords={recordsFromStorage.length}
          key={key}
        />
      ))}
      <CloseDialogButton />
    </div>
  );
}
export default DialogTopScore;
