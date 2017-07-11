import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div id='footer'>
         <span> Kitchenwall</span>
         <div className='footerContainer'>
         <ul>
           <li className='footerList'><div className='icon' ></div></li>
           <li className='footerList'><div className='icon' id='fb'></div></li>
           <li className='footerList'><div className='icon' id='twitter'></div></li>
           <li className='footerList'><div className='icon' id='item1'></div></li>
           <li className='footerList'><div className='icon' id='item2'></div></li>
           <li className='footerList'><div className='icon' id='p'></div></li>
           <li className='footerList'><div className='icon' id='t'></div></li>
        </ul>
        </div>
      </div>
    )
  }
}

export default Footer;