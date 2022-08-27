import React from 'react';
import ClubList from './ClubList.js';
import { clubs }  from './clubs.js'

class ClubListPage extends React.Component {
    render() {
        return (
            <ClubList clubs={clubs}/>
        );
    }
}

export default ClubListPage;
