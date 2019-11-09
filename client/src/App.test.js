import React from 'react';
import App from './App';
import Navbar from './components/Navbar'
import {render} from '@testing-library/react';

test('App renders without crashing', () => {
  render(<App/>);
});

test('Navbar renders without crashing', () => {
  render(<Navbar/>);
})