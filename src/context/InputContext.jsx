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
    case 'SET_SECONDS':
      return { ...state, seconds: action.payload };
    case 'START_GAME':
      return { ...state, isGameStarted: true, isGameEnded: false, currentLetter: null, mistakes: 0, seconds: 0 };
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
    seconds: 0,
    isGameStarted: false,
    isGameEnded: false,
  });

  useEffect(() => {}, [state]);

  return <InputContext.Provider value={{ ...state, dispatch }}> {children}</InputContext.Provider>;
};
