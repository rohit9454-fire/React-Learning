import React from 'react'
import User from './User';
import UserClass from './UserClass';

class About extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <User name={'Rohit Singh {F}'} />
                {/* <UserClass name={'Rohit Singh {C}'} />
                <UserClass name={'Mohit Singh {C}'} /> */}
            </div>
        )
    }
}

export default About;