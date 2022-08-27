import React from 'react'
import Tag from './Tag.js'
import { useNavigate } from "react-router-dom";

function ClubCard(props) {
    var {id, name, description, tags} = props.club;

    let navigate = useNavigate();

    if (description.length > 256) {
        description = description.substring(0, 256) + "..."
    }

    return (
        <>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" onClick={() => {navigate(`/clubs/${id}`); }}>
            <img src={`https://robohash.org/${name}?40x40`} width="40px"></img>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            {
            tags.map((tag, i) => {
                return <Tag name={tag}/>
            })
            }
        </div>
        </>
    );
}

export default ClubCard;