import React from "react";
import { Link } from 'react-router-dom';

function Header({user}){
    return (
        <header className="header">
            <div id="header-contents-left">
                <Link to="/fridges/">
                    <h1>Community Fridge Finder</h1>
                </Link>
            </div>
            {user && <h4>Welcome, {user.first_name}</h4>}
        </header>
    );
}

export default Header;