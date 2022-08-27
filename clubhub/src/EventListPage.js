import React from 'react';
import SearchBox from "./SearchBox.js"
import EventList from "./EventList.js";
import { events }  from "./events.js";
import Header from "./Header";

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
            <Header title="Event List" />
            <SearchBox searchChange={this.onSearchChange} placeholder="Search events"/>
            <EventList events={filteredEvents}/>
            </>
        );
    }
}

export default EventListPage;
