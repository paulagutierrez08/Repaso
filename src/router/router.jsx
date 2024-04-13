import React from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import NotFound from "./not-found";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function RouterApp (){
    return(
    <>
        <h1>Router</h1>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </Router>
    </>
    )
}

export default RouterApp;