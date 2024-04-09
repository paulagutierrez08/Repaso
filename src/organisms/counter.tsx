import { Button } from "@mui/material";
import React from "react";

import "../styles/styles.scss"

interface ButtonProps {
    title: string;
    counter: number;
    increment: string;
    decrement: string;
}

function Counter ({title, counter, increment, decrement}:ButtonProps){
const [count, setCount]= React.useState<number>(counter)

function decrementCount(){
    if(count>0){
        setCount(count-1)
    }
}

function incrementCount(){
    setCount(count+1)
}

    return(
        <div>
        <h1>Typescript</h1>
        <h3>{title} <span>{count}</span></h3>
        <Button onClick={incrementCount} className="increment">{increment}</Button>
        <Button onClick={decrementCount} className="decrement">{decrement}</Button>
        </div>
    )
}

export default Counter;