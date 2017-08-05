import React from 'react';

export default class NumberBtns extends React.Component {
    constructor(props) {
        super(props);
        this.onNumber = this.onNumber.bind(this);
    }
    onNumber(value, attr){
        this.props.onPromptNumber(value, attr);
    }
    render() {
        return(
            <div className="btns-number">
                {this.props.number.map((btns, i) => {
                    return(
                        <button type="button" value={btns.name} key={btns.name} onClick={()=>this.onNumber(btns.name, btns.attr)}>{btns.name}</button>
                    );
                })}
            </div>
        );
    }
}