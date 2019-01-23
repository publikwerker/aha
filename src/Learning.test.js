import React from 'react';
import ReactDOM from 'react-dom';
import BetterLife from './Learning';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BetterLife />, div);
  ReactDOM.unmountComponentAtNode(div);
});
