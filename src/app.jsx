import React from 'react'
import CompontentLift from './生命周期+父子组件传参/compontentLife'
import Parent from './state状态提升/parent'
import ComponentFetch from './Fetch请求/fetch'
class app extends React.Component{
    constructor (){
        super()
        this.state=({
            title:"我是从父组件来的",
            content:"hello!"
        })
    }
    changeMsg=(data)=>{
        this.setState((state,props)=>{
            return{
                content:data
            }
        })
    }
    render() {
        let { title,content }=this.state
        return(
            <div>
                <h1>Hello Component</h1>
                <p>改变：{ content }</p>
                <CompontentLift title={ title } changeMsg={ this.changeMsg }/>
                <Parent />
                <ComponentFetch>
                    <h3>Fetch请求</h3>
                </ComponentFetch>
            </div>
        )
    }
}

export default app