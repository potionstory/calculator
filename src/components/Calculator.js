import React from 'react';
import Output from './Output';
import Input from './Input';

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOper: false,
            operand01: 0,
            operand02: 0,
            operator: '',
            result: 0
        }
        this.handleCompute = this.handleCompute.bind(this);
        this.computeResult = this.computeResult.bind(this);
        this.computeNumber = this.computeNumber.bind(this);
        this.computeOper = this.computeOper.bind(this);
        this.computeUtil = this.computeUtil.bind(this);
    }
    computeResult(rlt) {
        this.setState({
            isOper: false,
            operand01 : rlt,
            operand02 : 0,
            result: rlt
        });
    }
    handleCompute(value, attr) {
        switch(attr) {
            case 'num': this.computeNumber(value, attr); break;
            case 'oper': this.computeOper(value, attr); break;
            case 'util': this.computeUtil(value, attr); break;
        }
    }
    computeOper(value, attr) {
        if (value != '='){
            this.state.isOper = true;
            this.state.operator = value;
        } else if (this.state.isOper == true){
            let n1 = parseInt(this.state.operand01);
            let n2 = parseInt(this.state.operand02);
            let rlt = 0;
            switch(this.state.operator) {
                case '÷': 
                    rlt = n1 / n2;
                    this.computeResult(rlt);
                    break;
                case '×': 
                    rlt = n1 * n2;
                    this.computeResult(rlt);
                    break;
                case '−': 
                    rlt = n1 - n2;
                    this.computeResult(rlt);
                    break;
                case '+': 
                    rlt = n1 + n2;
                    this.computeResult(rlt);
                    break;
            };
        }
    }
    computeNumber(value, attr) {
        let n = '';
        if (!this.state.isOper){
            n = ((this.state.operand01 == 0) || (this.state.operator != '')) ? value : this.state.operand01 + String(value);
            this.setState({
                operand01: n,
                operator: '',
                result: n
            });
        } else {
            n = (this.state.operand02 == 0) ? value : this.state.operand02 + String(value);
            this.setState({
                operand02: n,
                result: n
            });
        }
    }
    computeUtil(value, attr) {
        this.state.result = 'fsdfsdfsd';
    }
    render() {
        return(
            <div className="calculator">
                <Output onResult={this.state.result}/>
                <Input onValue={this.handleCompute}/>
            </div>
        );
    }
}