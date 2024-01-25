import './DialogTopScore.scss';
import { useGetData } from '../../hooks/useGetData';
import { useEffect } from 'react';
function DialogTopScore() {
  const { records, getData } = useGetData();
  useEffect(() => {
    getData();
  }, []);

  return <></>;
}
export default DialogTopScore;
