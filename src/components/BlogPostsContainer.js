import React from 'react';
import BlogPost from './BlogPost.js';

class BlogPostsContainer extends React.Component {
  constructor(props){
    super(props);
}

  render() {
     //Filter Categories 
    const filter = this.props.filterValue;
    const itemsToDisplay = this.props.data.filter((item) => {
        const needToDisplay = item.categories.find((item) => {
            if (filter === ''){
                return item 
            } else {
                return item === filter
            }  
        });
        return needToDisplay
    })
    const deleteHandler = this.props.deleteHandler;
    const showModalHandler = this.props.showModalHandler;

    return (
        <div>
            <div className='blog-container'>
                {itemsToDisplay.map(function (item) {
                    return (<BlogPost data={item} handlerId={deleteHandler} handlerModal={showModalHandler}/>)
                })} 
            </div>
        </div>
    )
  }
}

export default BlogPostsContainer;
