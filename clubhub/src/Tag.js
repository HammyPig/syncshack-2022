import React from 'react';
import './index.css'

class Tag extends React.Component {
    render() {
        const {name} = this.props;

        return (
            <>
            <div className="tag" style={{
                "backgroundColor":"#C8553D"
            }}>
                <p>{name}</p>
            </div>
            </>
        );
    }
}

export default Tag;