import React from 'react';
import App from './App';
import logo from './clubhub-logo.png';
import ClubListPage from './ClubListPage';
import ClubProfile from './ClubProfile';
import './Homescreen.css'

class Homescreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'Homescreen'
    };
  };

  getClub = () => {
    this.setState({route: 'ClubList'});
    // console.log(this.state)
    console.log("click")
  };

  render() {
    const {route} = this.state;
      return (
      <>
        { route === 'Homescreen'
        ? <>
          <div className='Header'>
            <img src={logo} alt="clubhub-logo" />
          </div>

          <div className='Container'>
            <p className='Sub'>Joining a society should be more than scrolling through a list of names.</p>
            <button className='Primary-Button' onClick={this.getClub}>Find your club</button>
          </div>

        </>
        : <ClubListPage />
        }

      </>
    );
  }
}

export default Homescreen;