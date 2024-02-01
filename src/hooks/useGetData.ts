import { useState, useEffect } from 'react';
import useDialogContext from './useDialogContext';
interface IRecord {
  minutes: number;
  seconds: number;
  milliseconds: number;
  millisecondsTotal: number;
  mistakes: number;
  accuracy: number;
  cpm: number;
}
export const useGetData = () => {
  const [records, setRecords] = useState<IRecord[]>([]);
  const { clearScores, dispatch } = useDialogContext();

  useEffect(() => {
    if (clearScores) {
      localStorage.removeItem('records');
      setRecords([]);
      dispatch({ type: 'CLEAR_SCORES', payload: false });
    }
  }, [clearScores]);

  const getData = () => {
    const recordsFromLocalStorage = localStorage.getItem('records');
    if (recordsFromLocalStorage) {
      const parsedRecordsFromLocalStorage = JSON.parse(recordsFromLocalStorage) as IRecord[];
      setRecords(parsedRecordsFromLocalStorage);
    }
  };
  return { getData, records };
};
