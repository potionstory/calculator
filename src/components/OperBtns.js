import React from 'react';

export default class NumberBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {name: '÷', attr: 'num'},
                {name: '×', attr: 'num'},
                {name: '−', attr: 'num'},
                {name: '+', attr: 'num'},
                {name: '=', attr: 'num'}
            ]
        }
    }    
    render() {
        return(
            <div className="btns-oper">
                {this.state.buttons.map((calculator, i) => {
                    return(
                        <button type="button" value={calculator.name} key={i}>{calculator.name}</button>
                    );
                })}
            </div>
        );
    }
}