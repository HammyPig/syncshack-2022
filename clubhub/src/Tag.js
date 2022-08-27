import React from 'react'

class Tag extends React.Component {
    render() {
        const {name} = this.props;

        return (
            <>
            {/* <div className="tc dib br3 pa3 ma2 grow bw2 shadow-5 white" style={{ */}
            <div className="tc br3 pa2 ma2 dib white h3" style={{
                "backgroundColor":"#C8553D"
            }}>
                <p>{name}</p>
            </div>
            </>
        );
    }
}

export default Tag;