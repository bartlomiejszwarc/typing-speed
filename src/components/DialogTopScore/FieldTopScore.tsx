import './DialogTopScore.scss';
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
  const Divider = () => {
    return (
      <div
        style={{
          height: '1px',
          width: '100%',
          backgroundColor: '#d4d4d4',
          marginTop: '3px',
          marginBottom: '3px',
        }}
      ></div>
    );
  };
  const ScoreFields = () => {
    const fields = [place + 1, minutes, seconds, milliseconds, mistakes, accuracy, cpm > 0 ? cpm : 'N/A'];
    return (
      <>
        <div className='score-field-container'>
          {fields.map((field, index) => (
            <span key={index}>{field}</span>
          ))}
        </div>
        {place !== totalRecords - 1 && <Divider />}
      </>
    );
  };
  return <ScoreFields />;
}
export default FieldTopScore;
