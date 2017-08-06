import React from 'react';
import Output from './Output';
import Input from './Input';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operand: [],
            operator: '',
            result: 0
        }
        this.handleCompute = this.handleCompute.bind(this);
    }
    handleCompute(value, attr){
        console.log(value + ' : ' + attr);
        if (attr == 'num'){
            this.setState({
                operand: value,
                result: value
            });
            console.log(this.state.operand);
        }
    }
    render() {
        return(
            <div className="calculator">
                <Output Onresult={this.state.result}/>
                <Input onValue={this.handleCompute}/>
            </div>
        );
    }
}