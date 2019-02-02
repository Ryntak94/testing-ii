import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  render(<App />);
});
