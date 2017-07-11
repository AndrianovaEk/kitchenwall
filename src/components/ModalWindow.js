import React from 'react';

class ModalWindow extends React.Component {
  constructor(props){
    super(props);

  }

  handleForm() {
    
    const newData = {
      image: this.inputImage.value,
      name: this.inputName.value,
      blogText: this.inputText.value,
      date: new Date().toDateString(),
      likes: '0',
      categories: [this.inputCategories.value],
      id: new Date().getTime(),
      isLiked: false
    }
         this.props.addHandler(newData)
  }

  render() {
    
    return (
      <div className='background'>
           <form className='createNewPost'>
             <button id='closeForm' onClick={() => { this.props.handler(false)}}> X </button>
               <fieldset>
                 <legend>Create new post</legend>
                 <label>The link for the image
                   <input type='text'  className='dataEntry' id='labelImage' ref={(input) => { this.inputImage = input; }}/>
                </label><br/>
                 <label>The name of the post
                   <input type='text'   className='dataEntry' id='labelName'  ref={(input) => { this.inputName = input; }}/>
                </label><br/> 
                 <label>The categories of the post
                   <input type='text'   className='dataEntry' ref={(input) => { this.inputCategories = input; }}/>
                </label><br/>
                <label>The text of the post
                   <textarea  rows='8' cols='25' className='dataEntry' id='labelText' ref={(input) => { this.inputText = input; }}/>
                </label><br/>
                 <input type='submit' value={this.props.typeModal} id='buttonForPost' onClick={() => this.handleForm()}/>
              </fieldset>
            </form>
       </div>
    )
  }
}

export default ModalWindow;