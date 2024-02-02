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
export const useSaveData = () => {
  const [records, setRecords] = useState<IRecord[]>([]);
  const { clearScores, dispatch } = useDialogContext();

  useEffect(() => {
    if (clearScores) {
      localStorage.removeItem('records');
      setRecords([]);
      dispatch({ type: 'CLEAR_SCORES', payload: false });
    }
  }, [clearScores]);

  useEffect(() => {
    setRecords([]);
    const recordsFromLocalStorage = localStorage.getItem('records');
    if (recordsFromLocalStorage) {
      const parsedRecordsFromLocalStorage = JSON.parse(recordsFromLocalStorage) as IRecord[];
      setRecords(parsedRecordsFromLocalStorage);
    }
  }, []);
  const saveData = (
    minutes: number,
    seconds: number,
    milliseconds: number,
    millisecondsTotal: number,
    mistakes: number,
    accuracy: number,
    cpm: number,
  ) => {
    const newRecord: IRecord = {
      minutes,
      seconds,
      milliseconds,
      millisecondsTotal,
      mistakes,
      accuracy,
      cpm,
    };
    setRecords((prevRecords) => {
      const updatedRecords = [...prevRecords, newRecord];
      localStorage.setItem('records', JSON.stringify(updatedRecords));
      return updatedRecords;
    });
  };
  return { saveData, records };
};
