import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { InputContextProvider } from './context/InputContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <InputContextProvider>
    <App />
  </InputContextProvider>,
);
