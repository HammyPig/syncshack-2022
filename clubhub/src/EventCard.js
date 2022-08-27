import React from 'react';
import './index.css'

class EventCard extends React.Component {
    render() {
        const {name, description, startDate, startTime, endDate, endTime} = this.props.club;

        return (
            <>
            {/* <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 ba w-60"> */}
            <div className="card">
                <h2>{name}</h2>
                <h3>{`${startDate} at ${startTime} - ${endDate} at ${endTime}`.toUpperCase()}</h3>
                <p>{description}</p>
            </div>
            </>
        );
    }
}

export default EventCard;
