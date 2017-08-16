import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ResetStyle from './styles/reset.scss';
import CalculatorStyle from './styles/calculator.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);