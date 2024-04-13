import React from "react";

import { Link } from "react-router-dom";

function NotFound (){
    return(
        <div>
            <h3>The page does not exist</h3>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NotFound;