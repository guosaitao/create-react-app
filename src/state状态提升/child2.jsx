import React from 'react'
export default class child2 extends React.Component{
    constructor(){
        super()
        this.state={
            input2:0
        }
    }
    handlChange =(e)=>{
        this.setState({
            input2:e.target.value
        })
    }
    render (){
        return (
            <div>
                <input value={ this.props.money * 8 } onChange={ this.handlChange }/>
            </div>
        )
    }
}