import React from 'react'
export default class child1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input1:0
        }
    }
    handleChange=(e)=>{
        this.setState({
            input1:e.target.value
        })
        this.props.change(e.target.value)
    }

    render (){
        return (
            <div>
                <input value={ this.props.money } onChange={ this.handleChange }/>
            </div>
        )
    }
}