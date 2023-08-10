import React from "react";
import { Link } from 'react-router-dom';

function Header({user}){
    return (
        <header className="header">
            <div id="header-contents-left">
                <Link to="/">
                    <h1>NYC Fridge Finder</h1>
                </Link>
            </div>
            <div className ="nav">
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