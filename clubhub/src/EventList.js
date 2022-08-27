import React from 'react';
import EventCard from './EventCard.js'

class EventList extends React.Component {
    render() {
        const { events } = this.props;

        return (
            <>
            <div className="tc">
            {
                events.map((event, i) => {
                    return <EventCard club={event}/>
                })
            }
            </div>
            </>
        );
    }
}

export default EventList;
