import React from 'react';

export default class Output extends React.Component {
    render() {
        return(
            <div className="output">
                {this.props.onResult}
            </div>
        );
    }
}