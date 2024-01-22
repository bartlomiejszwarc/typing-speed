import { ChangeEvent } from 'react';
import { useInputContext } from '../../hooks/useInputContext';
import { useEffect } from 'react';
import './LettersInput.css';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

function LetterInput() {
  const { input, dispatch, isGameEnded, isGameStarted } = useInputContext();

  useEffect(() => {
    if (input.length > 0 && !isGameEnded && !isGameStarted) {
      dispatch({ type: 'START_GAME' });
    }
  }, [input]);

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_CURRENT_LETTER', payload: e.target.value[e.target.value.length - 1] });
  };
  return (
    <div style={{ marginBottom: '4rem' }}>
      <TextareaAutosize
        minRows={3}
        spellCheck={false}
        onChange={(e) => handleInputOnChange(e)}
        value={input}
        className='letters-input'
        autoFocus
        placeholder='Type here'
      />
    </div>
  );
}
export default LetterInput;
