import React from 'react';

class EventEditor extends React.Component {
    
    constructor(props) {
        super();

        const {name, description, startDate, startTime, endDate, endTime} = props.event;

        this.state = {
            name: name,
            description: description,
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            endTime: endTime
        }
    }

    render() {

        const {name, description, startDate, startTime, endDate, endTime} = this.state;

        return (
            <>
            <input
                className="pa3 ba b--green bg-lightest-blue"
                placeholder="Event Name"
                type="text"
                value={name}
                onChange={(e) => {this.setState({name: e.target.value })}}
            />

            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => {this.setState({description: e.target.value })}}
            />

            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="text"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => {this.setState({startDate: e.target.value })}}
            />

            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="text"
                placeholder="Start Time"
                value={startTime}
                onChange={(e) => {this.setState({startTime: e.target.value })}}
            />

            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="text"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => {this.setState({endDate: e.target.value })}}
            />

            <input
                className="pa3 ba b--green bg-lightest-blue"
                type="text"
                placeholder="End Time"
                value={endTime}
                onChange={(e) => {this.setState({endTime: e.target.value })}}
            />
            </>
        );
    }
}

export default EventEditor;
