import React from 'react';
import './index.css'

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return(
      <div className='header tc pa4 b'>{title}</div>
    );
  }
};


export default Header;