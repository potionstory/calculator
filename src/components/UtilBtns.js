import React from 'react';

export default class UtilBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {name: 'C', attr: 'num'},
                {name: '+/-', attr: 'num'},
                {name: '%', attr: 'num'},
                {name: '.', attr: 'num'},
            ]
        }
    }    
    render() {
        return(
            <div className="btns-util">
                {this.state.buttons.map((calculator, i) => {
                    return(
                        <button type="button" value={calculator.name} key={i}>{calculator.name}</button>
                    );
                })}
            </div>
        );
    }
}