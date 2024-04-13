import React from "react";

import {useNavigate } from "react-router-dom";

function Home (){
const navigate = useNavigate ();

const handleClickAbout=()=>{(
    navigate('/About')
)}

const handleClickContact=()=>{(
    navigate('/Contact')
)}


    return(
        <div>
            <h3>Initial Page</h3>
            <nav>
                <button onClick={handleClickAbout} style={{width:'100px'}}>About</button>   
                <button onClick={handleClickContact} style={{width:'100px'}}>Contact</button>
            </nav>
        </div>
    )
}

export default Home;