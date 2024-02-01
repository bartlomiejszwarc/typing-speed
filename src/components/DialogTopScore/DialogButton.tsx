import './DialogTopScore.scss';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useDialogContext } from '../../hooks/useDialogContext';
function DialogButton() {
  const { dispatch } = useDialogContext();

  const handleOnClick = () => {
    dispatch({ type: 'SET_IS_TOPSCORE_DIALOG_OPEN', payload: true });
  };
  return (
    <button className='open-dialog-button' onClick={handleOnClick}>
      <LeaderboardIcon sx={{ color: '#e5e5e5' }} />
    </button>
  );
}
export default DialogButton;
