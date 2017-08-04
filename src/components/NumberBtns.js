import React from 'react';

export default class NumberBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {name: '7', attr: 'num'},
                {name: '8', attr: 'num'},
                {name: '9', attr: 'num'},
                {name: '4', attr: 'num'},
                {name: '5', attr: 'num'},
                {name: '6', attr: 'num'},
                {name: '1', attr: 'num'},
                {name: '2', attr: 'num'},
                {name: '3', attr: 'num'},
                {name: '0', attr: 'num'},
            ]
        }
    }    
    render() {
        return(
            <div className="btns-number">
                {this.state.buttons.map((calculator, i) => {
                    return(
                        <button type="button" value={calculator.name} key={i}>{calculator.name}</button>
                    );
                })}
            </div>
        );
    }
}