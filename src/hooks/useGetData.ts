import { useState } from 'react';
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

  const getData = () => {
    const recordsFromLocalStorage = localStorage.getItem('records');
    if (recordsFromLocalStorage) {
      const parsedRecordsFromLocalStorage = JSON.parse(recordsFromLocalStorage) as IRecord[];
      setRecords(parsedRecordsFromLocalStorage);
    }
  };
  return { getData, records };
};
