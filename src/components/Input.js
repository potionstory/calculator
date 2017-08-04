import React from 'react';
import NumberBtns from './NumberBtns'
import UtilBtns from './UtilBtns'
import OperBtns from './OperBtns'

export default class Input extends React.Component {
    render() {
        return(
            <div className="input">
                <NumberBtns/>
                <UtilBtns/>
                <OperBtns/>
            </div>
        );
    }
}