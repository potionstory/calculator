import React from 'react';
import Output from './Output';
import Input from './Input';

export default class Calculator extends React.Component {
    render() {
        return(
            <div className="calculator">
                <Output/>
                <Input/>
            </div>
        );
    }
}