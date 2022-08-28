import React from 'react';
import Header from './Header';
import { useNavigate } from "react-router-dom";

function ClubAdmin (props) {
  let navigate = useNavigate();
  return (
    <>
      <Header title="Club Admin" />
      <div className='Container'>
        <button className='Primary-Button ma4'>Club Information</button>
        <button className='Primary-Button ma4' onClick={() => navigate('/clubs/events')}>Event Dashboard</button>
        <button className='Primary-Button ma4'>Memberlist</button>
      </div>
    </>
  );
}

export default ClubAdmin;