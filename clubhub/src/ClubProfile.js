import React from 'react';
import Header from './Header';
import './index.css';

class ClubProfile extends React.Component {

  render() {
    const { name } = this.props;
    return (
      <>
        <Header title="Club Profile" />
        <div className='fl w-30'><img src="" alt="club logo" /></div>
        <div className='pa10 fl w-70' style={{
          "backgroundColor":"black"
        }}>
          <p className='pa1 white tc' style={{"fontSize":"130px"}}>{name}</p>
        </div>
        <div className='fl w-100'>
          <button className='fr f3 ma3 pa4 w-40 white' style={{
            "backgroundColor":"#C8553D",
            "borderRadius":"5rem",
            "borderColor":"#C8553D"
          }}>Sign Up</button>
        </div>

        <div className='fl w-100 tc dib'>
          <div className='ma3 pa4 bw2 f4 ProfileBox'>Hello world! We are the computing society at the University of Sydney.</div>
          <div className='ma3 pr2 pl2 pb2 bw2 f4 ProfileBox'>
          <p className='b'>Socials:</p>
           syncs.org.au <br />
           facebook.com/SYNCSusyd <br />
           twitter.com/SYNCSusyd <br />
           discord.com/invite/TwM3jaG23r
          </div>
          <div className='ma3 pr2 pl2 pb2  bw2 f4 ProfileBox'>
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
  };
}

export default ClubProfile;