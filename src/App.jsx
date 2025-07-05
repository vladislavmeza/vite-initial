import React from 'react'; // Важно: добавляем явный импорт React
import ReactLogo from './assets/react.svg?react';
import "./App.css";

export const App = () => {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement(ReactLogo, null),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload.'
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Learn React'
      ),
      React.createElement(
        'div',
        { className: 'App-year' },
        new Date().getFullYear()
      )
    )
  );
};
