import React from 'react'
import { useNavigate } from "react-router-dom";

function EventCard(props) {
    const {clubId, eventId, name, description, startDate, startTime, endDate, endTime} = props.club;
    let navigate = useNavigate();

    return (
        <>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" onClick={() => {navigate(`/clubs/${clubId}/events/edit`); }}>
            <h2>{name}</h2>
            <h3>{`${startDate} at ${startTime} - ${endDate} at ${endTime}`.toUpperCase()}</h3>
            <p>{description}</p>
        </div>
        </>
    );
}

export default EventCard;
