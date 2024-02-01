import { ReactNode, createContext, useReducer } from 'react';
import { useEffect } from 'react';
interface Props {
  children: ReactNode;
}
interface IDialogContext {
  topScoresDialogOpen: boolean;
}

interface IDialogAction {
  type: string;
  payload: any;
}

interface IDialogContextState extends IDialogContext {
  dispatch: React.Dispatch<IDialogAction>;
}
export const DialogContext = createContext<IDialogContextState | null>(null);

export const dialogReducer = (state: IDialogContext, action: IDialogAction): IDialogContext => {
  switch (action.type) {
    case 'SET_IS_TOPSCORE_DIALOG_OPEN':
      return { ...state, topScoresDialogOpen: action.payload };

    default:
      return state;
  }
};

export const DialogContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(dialogReducer, {
    topScoresDialogOpen: false,
  });

  useEffect(() => {}, [state]);

  return <DialogContext.Provider value={{ ...state, dispatch }}> {children}</DialogContext.Provider>;
};
