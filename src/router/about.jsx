import React from "react";

import { Link } from "react-router-dom";


function About (){
    return(
        <div>
            <h3>About</h3>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default About;