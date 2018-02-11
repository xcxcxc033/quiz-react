import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Index } from './IndexComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Index, div);
  ReactDOM.unmountComponentAtNode(div);
});
