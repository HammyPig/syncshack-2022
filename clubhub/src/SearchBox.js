import React from 'react';
import './index.css'

class SearchBox extends React.Component {
    render() {
        const {placeholder} = this.props;
        return (
            <div className="pa2 tc mt4">
                <input
                    className="pa3 ba FillBox"
                    type="search"
                    placeholder={placeholder}
                    onChange={this.props.searchChange}
                />
            </div>

        );
    }
}

export default SearchBox;
