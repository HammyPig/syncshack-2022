import React from 'react';
import SearchBox from "./SearchBox.js"
import FilterBox from "./FilterBox.js"
import ClubList from "./ClubList.js";
import { clubs }  from "./clubs.js";
import { tags } from "./tags.js";
import Header from './Header.js';

class ClubListPage extends React.Component {
    constructor() {
        super();
        this.state = {
            clubs: clubs,
            searchField: "",
            filters: []
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value.toLowerCase() });
    }

    onFilterChange = (event) => {
        this.setState({ filters: event.target.value.toLowerCase().split(",") });
    }

    render() {
        var filteredClubs = this.state.clubs.filter(club => {
            return club.name.toLowerCase().includes(this.state.searchField);
        })
        
        // if the filter entry has a valid tag, filter by contains tag
        if (this.state.filters.some(tag => tags.includes(tag))) {
            filteredClubs = filteredClubs.filter(club => {
                return club.tags.some(tag => this.state.filters.includes(tag));
            })
        }

        return (
            <>
            <Header title="Club List" />  
            <SearchBox searchChange={this.onSearchChange}/>
            <FilterBox filterChange={this.onFilterChange}/>
            <ClubList clubs={filteredClubs}/>
            </>
        );
    }
}

export default ClubListPage;
