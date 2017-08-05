import React from 'react';

export default class UtilBtns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            util: [
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
                {this.state.util.map((btns, i) => {
                    return(
                        <button type="button" value={btns.name} key={i}>{btns.name}</button>
                    );
                })}
            </div>
        );
    }
}