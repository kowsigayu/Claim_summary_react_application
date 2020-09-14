import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Login from './component/login';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
})

it("renders login correctly", () => {
  const { getByTestId } = render(<Login h1="LOGIN"></Login>);
  expect(getByTestId('Login')).toHaveTextContent('Sign In')
})

