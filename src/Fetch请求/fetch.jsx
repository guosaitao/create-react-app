import React from 'react'
export default class ComponentFetch extends React.Component {
    constructor(){
        super()
    }

    componentDidMount (){
        fetch("/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=877578&num=5")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{console.error(err)})
    }
    render(){
        return (
            <div>
                {this.props.children}
                请求开始
            </div>
        )
    }
}