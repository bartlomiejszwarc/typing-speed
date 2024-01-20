import './App.css';
import LettersBox from './components/LettersBox/LettersBox';
import LetterInput from './components/LettersInput/LettersInput';
import Stopwatch from './components/Stopwatch/Stopwatch';

function App() {
  return (
    <div className='container'>
      <Stopwatch />
      <LettersBox />
      <LetterInput />
    </div>
  );
}

export default App;
