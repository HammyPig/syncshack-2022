import './index.css'
import React from 'react'
import { useNavigate } from "react-router-dom";

function EventCard(props) {
    const {clubId, eventId, name, description, startDate, startTime, endDate, endTime} = props.club;
    let navigate = useNavigate();
    return (
        <>
        <div className="card" onClick={() => {navigate(`/clubs/${eventId}/events/edit`); }}>
            <h2>{name}</h2>
            <h3>{`${startDate} at ${startTime} - ${endDate} at ${endTime}`.toUpperCase()}</h3>
            <p>{description}</p>
        </div>
        </>
    );
}

export default EventCard;
