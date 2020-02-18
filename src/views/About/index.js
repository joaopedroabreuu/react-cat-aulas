import React from 'react';

class About extends React.Component {
    
    constructor(props) {
        super(props)
        this.state =  {
            data: {},
            loading: false,
            error: false
        }
    }

    // componentDidMount() {
    //     // 
    // }

    render() {
        return (
            <div>
                <h1>Página - About</h1>
            </div>
        )
    }
}

export default About;