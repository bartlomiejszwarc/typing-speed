import './LettersBox.scss';
import { useInputContext } from '../../hooks/useInputContext';
import { useEffect, useState } from 'react';

function LettersBox() {
  const { currentLetter, input, dispatch, isGameStarted } = useInputContext();
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [currentLetterNumber, setCurrentLetterNumber] = useState<number>(0);
  const [testLetters, setTestLetters] = useState<string[]>([]);
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
    if (input.length === 0) setCorrectLetters([]);
  }, [input]);

  useEffect(() => {
    if (!isGameStarted) {
      setTimeout(() => {
        setCorrectLetters([]);
      }, 200);
    }
  }, [isGameStarted]);

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

  useEffect(() => {
    setTestLetters(letters);
  }, []);

  useEffect(() => {
    if (testLetters.length > 0) dispatch({ type: 'SET_TEST_LENGTH', payload: letters?.length });
  }, [testLetters]);

  const checkLetter = (index: number) => {
    if (currentLetter && currentLetterNumber === index) {
      if (currentLetter === letters[index]) {
        correctLetters.push(currentLetter);
        return 'correct';
      }
      if (currentLetter !== letters[currentLetterNumber - 1] && isGameStarted) {
        return 'mistake';
      }
      if (currentLetterNumber === input.length) {
        return 'active';
      }
    }
  };

  useEffect(() => {
    if (input?.length > 0) setCurrentLetterNumber(input?.length);
    else setCurrentLetterNumber(0);
  }, [input]);

  return (
    <div className='letters-container'>
      {letters.map((letter, index) => (
        <div
          className={`${
            checkLetter(index) === 'correct' || correctLetters.includes(letter)
              ? 'letter-correct'
              : checkLetter(index) === 'mistake'
              ? 'letter-mistake'
              : checkLetter(index) === 'active'
              ? 'letter-active'
              : 'letter-default'
          }`}
          key={index}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
export default LettersBox;
