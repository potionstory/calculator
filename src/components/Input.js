import React from 'react';
import NumberBtns from './NumberBtns'
import UtilBtns from './UtilBtns'
import OperBtns from './OperBtns'

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: [
                {name: '7', attr: 'num'},
                {name: '8', attr: 'num'},
                {name: '9', attr: 'num'},
                {name: '4', attr: 'num'},
                {name: '5', attr: 'num'},
                {name: '6', attr: 'num'},
                {name: '1', attr: 'num'},
                {name: '2', attr: 'num'},
                {name: '3', attr: 'num'},
                {name: '0', attr: 'num'}
            ],
            util: [
                {name: 'AC', attr: 'util'},
                {name: '+/-', attr: 'util'},
                {name: '%', attr: 'util'},
                {name: '.', attr: 'util'}
            ],
            oper: [
                {name: '÷', attr: 'oper'},
                {name: '×', attr: 'oper'},
                {name: '−', attr: 'oper'},
                {name: '+', attr: 'oper'},
                {name: '=', attr: 'oper'}
            ]
        }
        this.onPrompt = this.onPrompt.bind(this);
    }
    onPrompt(value, attr){
        this.props.onValue(value, attr);
    }
    render() {
        return(
            <div className="input">
                <NumberBtns number={this.state.number} onPromptNumber={this.onPrompt}/>
                <UtilBtns util={this.state.util} onPromptUtil={this.onPrompt} onBtnClear={this.props.onBtnClear} onClear={this.props.onClear}/>
                <OperBtns oper={this.state.oper} onPromptOper={this.onPrompt}/>
            </div>
        );
    }
}