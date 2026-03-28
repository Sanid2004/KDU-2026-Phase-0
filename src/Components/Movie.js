import React, { useEffect } from "react";

import {
    Button,
} from 'reactstrap'

let timeLeft = 10;
let interval = null;
let timer = document.querySelector("#timer")

const Movie = ({movie})=>{

const updateDisplay = (e)=>{ 
    console.log(timeLeft);
    timer.innerText = `${String(timeLeft)}`;
}

const pauseTimer = ()=>{
    clearInterval(interval)
    interval = null
}

const completeSession = ()=>{
    pauseTimer()
    alert("And the Movie Begins !!");
    timeLeft = 10;
    updateDisplay()
}

const resetTimer = ()=>{
    pauseTimer()
    timeLeft = 10;
    updateDisplay()
}

const HandleWatch=(e)=>{
   
    if(interval){
        return;
    }

    interval = setInterval(()=>{
        timeLeft--;
        updateDisplay()

        if(timeLeft === 0){
            completeSession()
        }
    },1000)

}

    return(
       <div className="premimum-movies">
            <span>
                <Button>{movie.title + " :: " + movie.genre }</Button>
                <Button id="timer" onClick={HandleWatch}>
                    10 
                </Button>
                <Button onClick={resetTimer}>Reset</Button>
            </span>
       </div>
    )
}

export default Movie