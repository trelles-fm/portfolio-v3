import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AnimatePresence } from 'framer-motion';
import './index.css';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <App />
    </AnimatePresence>
  </React.StrictMode>,
);
