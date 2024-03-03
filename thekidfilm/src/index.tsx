import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { TheKidFilmWrapper } from './pages/TheKidFilmWrapper';

ReactDOM.render(
  <React.StrictMode>
    <div className='fondo'>
      <TheKidFilmWrapper />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
