import React from 'react'

class EventCard extends React.Component {
    render() {
        const {name, description, startDate, startTime, endDate, endTime} = this.props.club;

        return (
            <>
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <h2>{name}</h2>
                <h3>{`${startDate} at ${startTime} - ${endDate} at ${endTime}`.toUpperCase()}</h3>
                <p>{description}</p>
            </div>
            </>
        );
    }
}

export default EventCard;
