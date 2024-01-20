import './App.css';
import LettersBox from './components/LettersBox/LettersBox';
import LetterInput from './components/LettersInput/LettersInput';
import Stopwatch from './components/Stopwatch/Stopwatch';
import StatisticsContainer from './components/Statistics/StatisticsContainer';

function App() {
  return (
    <div className='container'>
      <Stopwatch />
      <LettersBox />
      <LetterInput />
      <StatisticsContainer />
    </div>
  );
}

export default App;
