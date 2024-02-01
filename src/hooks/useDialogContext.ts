import { DialogContext } from '../context/DialogContext';
import { useContext } from 'react';

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) throw Error('useDialogContext must be used inside DialogContextProvider');
  return context;
};

export default useDialogContext;
