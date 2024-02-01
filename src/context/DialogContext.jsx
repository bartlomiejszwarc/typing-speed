import { createContext, useReducer } from 'react';
import { useEffect } from 'react';
export const DialogContext = createContext();

export const dialogReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_TOPSCORE_DIALOG_OPEN':
      return { ...state, topScoresDialogOpen: action.payload };
  }
};

export const DialogContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dialogReducer, {
    topScoresDialogOpen: false,
  });

  useEffect(() => {}, [state]);

  return <DialogContext.Provider value={{ ...state, dispatch }}> {children}</DialogContext.Provider>;
};
