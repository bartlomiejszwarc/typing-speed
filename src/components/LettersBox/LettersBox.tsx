import './LettersBox.css';
import { useInputContext } from '../../hooks/useInputContext';
import { useEffect, useState } from 'react';

function LettersBox() {
  const { currentLetter, input, dispatch } = useInputContext();
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [currentLetterNumber, setCurrentLetterNumber] = useState<number>(0);
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

  //const letters: Array<string> = ['a', 'b', 'c'];

  const checkLetter = (index: number) => {
    if (currentLetter && currentLetterNumber === index) {
      if (currentLetter === letters[index]) {
        correctLetters.push(currentLetter);
        return 'correct';
      }
      if (currentLetter !== letters[currentLetterNumber - 1]) {
        return 'mistake';
      }
    }
    return 'default';
  };

  useEffect(() => {
    setCurrentLetterNumber(input?.length);
  }, [input, currentLetter]);

  return (
    <div className='letters-container'>
      {letters.map((letter, index) => (
        <p
          className={`${
            checkLetter(index) === 'correct' || correctLetters.includes(letter)
              ? 'letter-correct'
              : checkLetter(index) === 'mistake'
              ? 'letter-mistake'
              : 'letter-default'
          }`}
          key={index}
        >
          {letter}
        </p>
      ))}
    </div>
  );
}
export default LettersBox;
