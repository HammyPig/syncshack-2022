import React from 'react';

class Header extends React.Component {
  render() {
    const { title } = this.props;
    return(
      <div className='header tc pa4'
      style= {{ 
        "backgroundColor":"#F28F3B",
        "fontSize":"3rem"}}>{title}</div>
    );
  }
};


export default Header;