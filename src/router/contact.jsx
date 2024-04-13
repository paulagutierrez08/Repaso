import React from "react";

import { Link } from "react-router-dom";


function Contact (){
    return(
        <div>
            <h3>Contact</h3>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Contact;