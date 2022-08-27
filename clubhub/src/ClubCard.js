import React from 'react'
import Tag from './Tag.js'
import './index.css'
import { useNavigate } from "react-router-dom";

function ClubCard(props) {
    var {id, name, description, tags} = props.club;

    let navigate = useNavigate();

    if (description.length > 256) {
        description = description.substring(0, 256) + "..."
    }
    return (
        <>
        {/* <div className="tc dib br3 pa2 ma2 grow bw2 shadow-5 ba w-50"> */}
        <div className="card" onClick={() => {navigate(`/clubs/${id}`); }}>
            <div className="w-40 fl">

                <img src={`https://robohash.org/${name}?40x40`}
                style={{
                    // "width":"30px",
                    "height":"75%"
                }}></img>   

            </div>

            <div className="w-60 fr pr2">
                <h2 className='f2'>{name}</h2>
                <p>{description}</p>
                {
                    tags.map((tag, i) => {
                        return <Tag name={tag}/>
                    })
                }
            </div>

        </div>
        </>
    );
}

export default ClubCard;