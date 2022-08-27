import React from 'react'
import Tag from './Tag.js'

class ClubCard extends React.Component {
    render() {
        const {id, name, description, tags} = this.props.club;
        return (
            <>
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
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
}

export default ClubCard;