import React from "react"

export default class Header extends React.Component {
    render(){
        return(
            <div style={{width: 100}}>
                <p>{this.props.name}</p>
            </div>
        )
    }
}