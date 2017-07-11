import React from 'react';

class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className='header' id='callOfPage'>
            <div className='menuContainer'>
              <ul>
                <li className='menu' onClick={() => this.props.action('')}>Home</li>
                <li className='menu' onClick={() => this.props.handler(true,'ADD POST')}>New Post</li>
                <li className='menu'>Journal</li>
                <li className='menu'>Social</li>
                <li className='menu'>Contact</li>
              </ul>
            </div>
        </div>
    )
  }
}

export default Menu;