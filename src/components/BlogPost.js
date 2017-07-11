import React from 'react';
import LikesHandler from './LikesHandler.js';
import ModalWindow from './ModalWindow.js';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div className = 'eachBlog'>
            <input type = 'submit'className = 'close'value = 'x'onClick = {() => this.props.handlerId(this.props.data.id)}/> 
            <img className = 'image' src = { this.props.data.image }alt = { this.props.data.author }/> 
            <div className = 'name' > { this.props.data.name } </div> 
            <div className = 'blogText' > { this.props.data.blogText } </div> 
            <div className = 'date'  > { this.props.data.date } </div> 
            <LikesHandler data = { this.props.data.likes }/>  
            </div >
        )
    }
}

export default BlogPost;