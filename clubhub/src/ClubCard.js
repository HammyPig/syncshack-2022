import React from 'react'

class ClubCard extends React.Component {
    render() {
        const {id, name, description} = this.props.club;

        return (
            <>
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src={`https://robohash.org/${name}?40x40`} width="40px"></img>
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            </>
        );
    }
}

export default ClubCard;