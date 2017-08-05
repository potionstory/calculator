import React from 'react';

export default class NumberBtns extends React.Component {
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
                {name: '0', attr: 'num'},
            ]
        }
    }    
    render() {
        return(
            <div className="btns-number">
                {this.state.number.map((btns, i) => {
                    return(
                        <button type="button" value={btns.name} key={i}>{btns.name}</button>
                    );
                })}
            </div>
        );
    }
}