import React from 'react';

class LikesHandler extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        isLiked: false
    };

    this.like = this.like.bind(this)
  }
  
    like(){
        this.setState(function (prevState, props) {
            return {
                isLiked: !prevState.isLiked
            }
        })
    }  

  render() {
    let count = this.props.data;
    let classLike;
    
    if (this.state.isLiked){
        classLike = 'liked';
        count++
    }else{
        classLike = 'dislike';
    }
    return (
        <div>
            <label className={classLike}>
                <input type='radio' className='button' onClick={this.like}/>
            </label>
            <span id='countOfLikes'>{count}</span>
        </div>
    )
  }
}

export default LikesHandler;