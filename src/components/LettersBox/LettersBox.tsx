import './LettersBox.css';
import { useInputContext } from '../../hooks/useInputContext';
import { useEffect } from 'react';
function LettersBox() {
  const { currentLetter, input, dispatch } = useInputContext();
  useEffect(() => {
    if (currentLetter?.length > 0 && currentLetter === letters[input.length])
      dispatch({ type: 'ADD_LETTER_TO_INPUT', payload: currentLetter });
    if (currentLetter?.length > 0 && currentLetter !== letters[input.length] && input.length > 0)
      dispatch({ type: 'INCREASE_MISTAKES' });
  }, [currentLetter]);

  useEffect(() => {
    if (input.length === letters.length) {
      dispatch({ type: 'END_GAME' });
    }
  }, [input]);

  const letters: Array<string> = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  // const letters: Array<string> = ['a', 'b', 'c'];
  return (
    <div className='letters-container'>
      {letters.map((letter, index) => (
        <p className='letter-default' key={index}>
          {letter}
        </p>
      ))}
    </div>
  );
}
export default LettersBox;
