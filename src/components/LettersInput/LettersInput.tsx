import { ChangeEvent } from 'react';
import { useInputContext } from '../../hooks/useInputContext';
import { useEffect } from 'react';
import './LettersInput.css';

function LetterInput() {
  const { input, mistakes, dispatch, isGameEnded, isGameStarted } = useInputContext();

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
      <input
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
