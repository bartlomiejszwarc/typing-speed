import './DialogTopScore.scss';
import { useEffect, useState } from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useDialogContext } from '../../hooks/useDialogContext';
function DialogButton() {
  const [buttonStyle, setButtonStyle] = useState<string>('open-dialog-button ');
  const { dispatch } = useDialogContext();

  const handleOnClick = () => {
    dispatch({ type: 'SET_IS_TOPSCORE_DIALOG_OPEN', payload: true });
  };
  return (
    <button className={buttonStyle} onClick={handleOnClick}>
      <LeaderboardIcon sx={{ color: '#e5e5e5' }} />
    </button>
  );
}
export default DialogButton;
