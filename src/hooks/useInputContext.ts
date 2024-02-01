import { InputContext } from '../context/InputContext';
import { useContext } from 'react';

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) throw Error('useInputContext must be used inside InputContextProvider');
  return context;
};

export default useInputContext;
