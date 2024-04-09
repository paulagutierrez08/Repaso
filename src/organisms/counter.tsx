import { Button } from "@mui/material";
import React from "react";

function Counter (){
const [count, setCount]= React.useState<number>(0)

function decrementCount(){
    setCount(count-1)
}

function incrementCount(){
    setCount(count+1)
}

    return(
        <div>
        <h1>Typescript</h1>
        <h3>Counter {count}</h3>
        <Button onClick={incrementCount}>Increment</Button>
        <Button onClick={decrementCount}>Decrement</Button>
        </div>
    )
}

export default Counter;