import React from 'react';

class SearchBox extends React.Component {
    render() {
        return (
            <div className="pa2 tc">
                <input
                    className="pa3 ba"
                    type="search"
                    placeholder="search clubs"
                    onChange={this.props.searchChange}
                />
            </div>

        );
    }
}

export default SearchBox;
