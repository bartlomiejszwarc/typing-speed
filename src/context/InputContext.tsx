import { createContext, useReducer } from 'react';
import { useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface IInputContext {
  currentLetter: string | null;
  input: string;
  mistakes: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  isGameStarted: boolean;
  isGameEnded: boolean;
  testCharsLength: number;
}

interface IInputAction {
  type: string;
  payload: any;
}

interface IInputContextState extends IInputContext {
  dispatch: React.Dispatch<IInputAction>;
}

export const InputContext = createContext<IInputContextState | null>(null);

export const inputReducer = (state: IInputContext, action: IInputAction) => {
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
    default:
      return state;
  }
};

export const InputContextProvider = ({ children }: Props) => {
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
