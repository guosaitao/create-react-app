import React from 'react'
import Child1 from './child1'
import Child2 from './child2'
class parent extends React.Component{
    constructor (){
        super()
        this.state={
            money:1
        }
    }
    hangleChange = (e)=>{
        this.setState({
            money:e.target.value
        })
    }
    change=(data)=>{
        this.setState({
            money:data
        })
    }
    render() {
        return (
            <div>
                <h3>人民币兑换美金<br></br>
                    <input value={ this.state.money } onChange={ this.hangleChange }/>
                </h3>
                人民币：<Child1 change={ this.change } money={ this.state.money }/>
                美金：<Child2 money={ this.state.money } />
            </div>
        )
    }
}
export default parent