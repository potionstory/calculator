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
        let temp = (this.state.result != 0) ? this.state.result : '';
        this.setState({
            result: temp + value
        });
    }
    render() {
        return(
            <div className="calculator">
                <Output result={this.state.result}/>
                <Input onValue={this.handleCompute}/>
            </div>
        );
    }
}