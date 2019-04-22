import React from "react"

export default class Result extends React.Component {
    render(){
        return(
            <h1>Result: {this.props.correctAnswers}</h1>
        )
    }
}