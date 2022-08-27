import React from 'react'

class Tag extends React.Component {
    render() {
        const {name} = this.props;

        return (
            <>
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <p>{name}</p>
            </div>
            </>
        );
    }
}

export default Tag;