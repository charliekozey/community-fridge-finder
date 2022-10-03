import React from "react"
import { Link } from 'react-router-dom';
import Logo from "../fridge_logo.png";

function Header({user}){
    return (
        <header className="header">
            <div id="header-contents-left">
                <img src={Logo} alt="community fridge logo: rainbow people holding hands, encircling an open and full fridge"/>
                <Link to="/fridges/">
                    <h1>Community Fridge Finder</h1>
                </Link>
            </div>
            {user && <h4>Welcome, {user.first_name}</h4>}
        </header>
        
    )
}





export default Header