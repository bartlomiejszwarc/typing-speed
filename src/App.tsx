import './App.scss';
import LettersBox from './components/LettersBox/LettersBox';
import LetterInput from './components/LettersInput/LettersInput';
import Stopwatch from './components/Stopwatch/Stopwatch';
import StatisticsContainer from './components/Statistics/StatisticsContainer';
import DialogTopScore from './components/DialogTopScore/DialogTopScore';

function App() {
  return (
    <div className='container'>
      <Stopwatch />
      <LettersBox />
      <LetterInput />
      <StatisticsContainer />
      {/* <DialogTopScore /> */}
    </div>
  );
}

export default App;
