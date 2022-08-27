import React from 'react';

class FilterBox extends React.Component {
    render() {
        return (
            <div className="pa2 tc">
                <input
                    className="pa3 ba"
                    type="search"
                    placeholder="filter tags"
                    onChange={this.props.filterChange}
                />
            </div>

        );
    }
}

export default FilterBox;
