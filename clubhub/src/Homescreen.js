import React from 'react';
import App from './App';
import logo from './clubhub-logo.png';
import ClubListPage from './ClubListPage';
import ClubProfile from './ClubProfile';
import './Homescreen.css'
import { useNavigate } from "react-router-dom";

function Homescreen() {
    let navigate = useNavigate();
    
      return (
      <>
          <div className='Header'>
            <img src={logo} alt="clubhub-logo" />
          </div>

          <div className='Container'>
            <p className='Sub'>Joining a society should be more than scrolling through a list of names.</p>
            {/* <button className='Primary-Button' onClick={this.getClub}>Find your club</button> */}
            <button className='Primary-Button' onClick={() => {navigate("/clubs"); }}>Find your club</button>
          </div>
      </>
    );
}

export default Homescreen;