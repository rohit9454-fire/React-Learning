// Class Based Component - It is just a javaScript class.

import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component {
    // This is the class based Component and with the help of React.Component we are inform to react,and Now React will Tracking this class. 
    // Here we have render method which is return some peace of JSX.
    // React.Component:  React.Component is a class which is inside the "react" package.




    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: 'Ram',
                location: 'IN',
                company: 'Google',
                avatar_url: 'https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg',
                bio: '',
            }

        }
        console.log('constructor Called');
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/rohit9454-fire')
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log('componentDidMount Called');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate Called');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount Called');
    }

    render() {
        console.log('render Called');
        const { name, location, company, avatar_url, bio, html_url } = this.state.userInfo;
        return (
            <div className="user-card">
                <div className="details-display">
                    <div className="user">
                        <h2>Name: {name}</h2>
                        <h3>Location: {location}</h3>
                    </div>
                    <Link to={html_url}>
                        <img className="avatar" src={avatar_url} />
                    </Link>
                </div>

                <h4>Company:{company}</h4>
                <p>Bio:{bio}</p>
            </div>
        )
    }

}

export default UserClass;


/*
    MOUNTING
        constructor (with dummy data)
        Render (with dummy data)
                <HTML Dummy>
        Componennt Did Mount
                <API Call>
                <this.setState> -> State Variable is updated

    UPDATING
        Render(with API Data)
            <HTML (with new API Data)>
        Component Did Update

    UNMOUNTING
        Unmounting means that the component is removed from web.
*/