import React from 'react';
import Header from './Header';
import { useNavigate, useParams } from "react-router-dom";
import { clubs } from "./clubs.js"

function ClubProfile(props) {
  let navigate = useNavigate();
  let { id } = useParams(); // gets unique id, which then use api to fetch info
  const { name, description, tags, socials } = clubs.filter(function(club){return club.id === id;} )[0];


  return (
    <>
      <Header title="Club Profile" />
      <div className='pa10 fl w-100' style={{
        "backgroundColor":"black"
      }}>
        <p className='pa5 f-subheadline white tr'>{name}</p>
      </div>
      <div className='fl w-100'>
        <button className='fr f3 ma3 pa4 w-40 white' style={{
          "backgroundColor":"#C8553D",
          "borderRadius":"5rem",
          "borderColor":"#C8553D"
        }}>Sign Up</button>
      </div>

      <div className='fl w-100'>
        <div className='ma3 ba br3 pa4 bw2 f4'>{description}</div>
        <div className='ma3 ba br3 pr2 pl2 pb2 bw2 f4'>
        <p className='b' style={{"white-space": "pre-line"}}>Socials:<br/>{socials.join("\n")}</p>
        </div>
        <div className='ma3 ba br3 pr2 pl2 pb2  bw2 f4'>
          <p className='b'>Events:</p>
        </div>
      </div>

      {/* <div style={{
        "border-style": "solid",
        "marginRight": "1rem",
        "marginLeft": "1rem",
        "marginTop": "5rem"
        }}>hello</div> */}

    </>
    
  );
}

export default ClubProfile;
