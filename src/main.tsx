import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { InputContextProvider } from './context/InputContext';
import { DialogContextProvider } from './context/DialogContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DialogContextProvider>
    <InputContextProvider>
      <App />
    </InputContextProvider>
  </DialogContextProvider>,
);
