import React from 'react';

export default class NumberBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oper: [
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
                {this.state.oper.map((btns, i) => {
                    return(
                        <button type="button" value={btns.name} key={i}>{btns.name}</button>
                    );
                })}
            </div>
        );
    }
}