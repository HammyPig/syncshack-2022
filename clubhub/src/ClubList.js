import React from 'react';
import './ClubList.css'
import ClubCard from './ClubCard.js'

class ClubList extends React.Component {
    render() {
        const { clubs } = this.props;

        return (
            <>
            <div className="tc">
            {
                clubs.map((club, i) => {
                    return <ClubCard club={clubs[i]}/>
                })
            }
            </div>
            </>
        );
    }
}

export default ClubList;
