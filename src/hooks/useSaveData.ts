import { useState, useEffect } from 'react';

interface IRecord {
  minutes: number;
  seconds: number;
  milliseconds: number;
  mistakes: number;
  accuracy: number;
  cpm: number;
}
export const useSaveData = () => {
  const [records, setRecords] = useState<IRecord[]>([]);

  useEffect(() => {
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
    mistakes: number,
    accuracy: number,
    cpm: number,
  ) => {
    const newRecord: IRecord = {
      minutes,
      seconds,
      milliseconds,
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
  return { saveData };
};
