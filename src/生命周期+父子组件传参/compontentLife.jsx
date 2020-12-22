import React from 'react'
export default class compontentLift extends React.Component{
    constructor (props){
        super(props)
        this.state=({
            count:0,
            content:"我是从子组件传过来的"
        })
    }
    //生命周期开始Start
    //组件渲染之前执行
    componentWillMount (){
        console.log("componentWillMount")
    }
    changNum=()=>{
        this.setState((state,props)=>{
            return{
                count:state.count+1
            }
        })
    }
    Change=()=>{
        let { count,content }=this.state
        this.props.changeMsg(content)
    }
    //开始渲染
    render(){
        console.log("render")
        let { count,content }=this.state
        return (
            <div>
                <h1>生命周期函数</h1>
                <p>计数{ count }</p>
                <button onClick={ this.changNum }>改变数字</button>
                <p>子组件: { this.props.title }</p>
                <button onClick={ this.Change }>改变父组件</button>
            </div>
        )
    }
    //组件渲染之后执行
    componentDidMount (){
        console.log("componentDidMount")
    }
    //返回true和false，true代表允许修改，false不允许修改
    shouldComponentUpdate (){
        return true
    }
    //数据改变之前执行（state,props）
    componentWillUpdate (){
        console.log("componentWillUpdate")
    }
    //数据改变完成（state,props）
    componentDidUpdate (){
        console.log("componentDidUpdate")
    }
    //props发生改变执行（props父组件可改变，子组件不可改变）
    componentWillReceiveProps (){
        console.log("componentWillReceiveProps")
    }
    //组件卸载前执行（生命周期中没有卸载后执行）
    componentWillUnmount (){
        console.log("componentWillUnmount")
    }
    //生命周期结束End
}