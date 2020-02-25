import React from 'react'

export default class Cell extends React.Component {

    constructor(props){
        super() 
        this.state = {color: props.value}
    }

    handleClick = () => {
        this.setState({
          color: '#333'
        })
      }


    render() {
        return (
            <div onClick={this.handleClick} style={{backgroundColor: `${this.state.color}`}} className="cell"></div>
        )
    }


}