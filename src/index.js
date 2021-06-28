import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemesState from './context/Themes/ThemesState';

ReactDOM.render(
  <React.StrictMode>
    <ThemesState>
      <App />
    </ThemesState>
  </React.StrictMode>,
  document.getElementById('root')
);
