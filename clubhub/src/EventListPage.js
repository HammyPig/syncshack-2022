import React from 'react';
import SearchBox from "./SearchBox.js"
import EventList from "./EventList.js";
import { events }  from "./events.js";

class EventListPage extends React.Component {
    constructor() {
        super();
        this.state = {
            events: events,
            searchField: "",
            filters: []
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value.toLowerCase() });
    }

    render() {
        var filteredEvents = this.state.events.filter(event => {
            return event.name.toLowerCase().includes(this.state.searchField);
        })

        return (
            <>
            <SearchBox searchChange={this.onSearchChange}/>
            <EventList events={filteredEvents}/>
            </>
        );
    }
}

export default EventListPage;
