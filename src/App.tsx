import './App.scss';
import LettersBox from './components/LettersBox/LettersBox';
import LetterInput from './components/LettersInput/LettersInput';
import Stopwatch from './components/Stopwatch/Stopwatch';
import StatisticsContainer from './components/Statistics/StatisticsContainer';
import DialogTopScore from './components/DialogTopScore/DialogTopScore';
import DialogButton from './components/DialogTopScore/DialogButton';
import Dialog from '@mui/material/Dialog';
import { useDialogContext } from './hooks/useDialogContext';
function App() {
  const { topScoresDialogOpen } = useDialogContext();
  return (
    <div className='container'>
      <Stopwatch />
      <LettersBox />
      <LetterInput />
      <StatisticsContainer />

      <Dialog open={topScoresDialogOpen} fullWidth={true} maxWidth={'md'}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <DialogTopScore />
        </div>
      </Dialog>
      <div style={{ position: 'absolute', right: 25, top: 25 }}>
        <DialogButton />
      </div>
    </div>
  );
}

export default App;
