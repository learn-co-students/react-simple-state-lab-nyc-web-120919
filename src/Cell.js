import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(prop) {
        super()
        this.state = {
            color: prop.value
        }
    }


    handleValueChange = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        { console.log(this.state.color) }
        return (
            <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.handleValueChange}>
            </div>
        )
    }
}
