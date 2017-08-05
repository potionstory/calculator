import React from 'react';

export default class UtilBtns extends React.Component {
    constructor(props) {
        super(props);
        this.onUtil = this.onUtil.bind(this);
    }
    onUtil(value, attr){
        this.props.onPromptUtil(value, attr);
    }  
    render() {
        return(
            <div className="btns-util">
                {this.props.util.map((btns, i) => {
                    return(
                        <button type="button" value={btns.name} key={btns.name} onClick={()=>this.onUtil(btns.name, btns.attr)}>{btns.name}</button>
                    );
                })}
            </div>
        );
    }
}