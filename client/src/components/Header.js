import React from "react";
import { Link } from 'react-router-dom';

function Header({user}){
    function checkSession() {
        fetch('/api/login')
    }

    function logIn() {
        const username = "boobar36"
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username })
        })
            .then(res => res.json())
            .then(data => console.log("logged in user:", data))
    }

    function logOut() {
        fetch('/api/logout', {
            method: "DELETE"
        })
    }

    return (
        <header className="header">
            <div id="header-contents-left">
                <Link to="/">
                    <h1>NYC Fridge Finder</h1>
                </Link>
            </div>
            <div className ="nav">
                <p onClick={checkSession}>check</p>
                <p onClick={logIn}>login</p>
                <p onClick={logOut}>log out</p>
                <Link to="/refrigerators">
                    <h3>List</h3>
                </Link>
                <Link to="/about">
                    <h3>About</h3>
                </Link>
            </div>
            {/* {user && <h4>Welcome, {user.first_name}</h4>} */}
        </header>
    );
}

export default Header;