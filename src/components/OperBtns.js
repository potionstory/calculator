import React from 'react';

export default class NumberBtns extends React.Component {
    constructor(props) {
        super(props);
        this.onOper = this.onOper.bind(this);
    }
    onOper(value, attr){
        this.props.onPromptOper(value, attr);
    }    
    render() {
        return(
            <div className="btns-oper">
                {this.props.oper.map((btns, i) => {
                    return(
                        <button type="button" value={btns.name} key={btns.name} onClick={()=>this.onOper(btns.name, btns.attr)}>{btns.name}</button>
                    );
                })}
            </div>
        );
    }
}