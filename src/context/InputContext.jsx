import { createContext, useReducer } from 'react';
import { useEffect } from 'react';
export const InputContext = createContext();

export const inputReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_LETTER':
      return { ...state, currentLetter: action.payload };
    case 'ADD_LETTER_TO_INPUT':
      return { ...state, input: state.input + action.payload };
    case 'INCREASE_MISTAKES':
      return { ...state, mistakes: state.mistakes + 1 };
    case 'SET_TEST_LENGTH':
      return { ...state, testCharsLength: action.payload };
    case 'SET_MINUTES':
      return { ...state, minutes: action.payload };
    case 'SET_SECONDS':
      return { ...state, seconds: action.payload };
    case 'SET_MILLISECONDS':
      return { ...state, milliseconds: action.payload };
    case 'SET_MILLISECONDS_TOTAL':
      return { ...state, millisecondsTotal: action.payload };
    case 'START_GAME':
      return {
        ...state,
        isGameStarted: true,
        isGameEnded: false,
        mistakes: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        millisecondsTotal: 0,
      };
    case 'END_GAME':
      return { ...state, isGameStarted: false, isGameEnded: true };
    case 'RESET':
      return { ...state, isGameStarted: false, isGameEnded: false, input: '', mistakes: 0 };
  }
};

export const InputContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(inputReducer, {
    currentLetter: null,
    input: '',
    mistakes: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    millisecondsTotal: 0,
    isGameStarted: false,
    isGameEnded: false,
    testCharsLength: 0,
  });

  useEffect(() => {}, [state]);

  return <InputContext.Provider value={{ ...state, dispatch }}> {children}</InputContext.Provider>;
};
