import { useEffect, useState, useRef } from "react";

const User = (props) => {
    const [count, setCount] = useState(0)
    const val = useRef();

    useEffect(() => {
        console.log('useEffect As Mount');
        val.current = props;

    }, [props])

    useEffect(() => {
        return () => {
            console.log(val.current, 'Unmount ', props);
        };
    }, [])


    useEffect(() => {
        console.log('useEffect As Update');
    }, [count])


    console.log('As Render')
    return (<div className="user-card">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count Increase</button>
        <h2>Name:{props?.name}</h2>
        <h3>Location: Gurugram</h3>
        <h4>Contact: @rohits516632</h4>
    </div>)
}

export default User;