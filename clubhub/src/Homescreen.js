import React from 'react';
import logo from './clubhub-logo.png';
import './index.css'
import { useNavigate } from "react-router-dom";

function Homescreen() {
    let navigate = useNavigate();
    
      return (
      <>
          <div className='banner'>
            <img src={logo} alt="clubhub-logo" />
          </div>

          <div className='Container' style={{"padding": "10vh"}}>
            <p className='Sub'>Joining a society should be more than scrolling through a list of names.</p>
            {/* <button className='Primary-Button' onClick={this.getClub}>Find your club</button> */}
            <button className='Primary-Button' onClick={() => {navigate("/clubs"); }}>Find your club</button>
          </div>

          <div className='tc' onClick={() => {navigate("/club-admin")}}>
            <p className='underline'> Already have an account? Sign in</p>
          </div>
      </>
    );
}

export default Homescreen;