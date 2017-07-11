import React from 'react';

class Categories extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className='headerCategories'> <span> CATEGORIES </span>
          <div id='listOfCategories'>
            <ul> 
              <li className='categories' id='photography' onClick={() => this.props.action('photography')}> Photography </li>
              <li className='categories' id='food' onClick={() => this.props.action('food')}> Food </li>
              <li className='categories' id='wine' onClick={() => this.props.action('wine')}> Wine </li>
              <li className='categories' id='gourmet' onClick={() => this.props.action('gourmet')}> Gourmet </li>
              <li className='categories' id='salads' onClick={() => this.props.action('salads')}> Salads </li>
            </ul>
           </div> 
          
        </div>
    )
  }
}

export default Categories;