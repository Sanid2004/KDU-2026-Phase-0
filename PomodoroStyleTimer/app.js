let totalMinutes = 25;
let timeLeft = totalMinutes * 60;
let sessions = 0;
let interval = null;
let num = 0

let timer = document.querySelector(".timer")
let allbtns = document.querySelectorAll(".btn")
let time = document.querySelector("#time")
let setTime = document.querySelector("#setTime")
let session = document.querySelector("#session")

const updateDisplay = ()=>{
    const minutes = Math.floor(timeLeft/60);
    const seconds = timeLeft%60;
    timer.innerText = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

const pauseTimer = ()=>{
    clearInterval(interval)
    interval = null
}

const completeSession = ()=>{
    pauseTimer()
    alert("🔥 SESSION COMPLETE! AMAZING FOCUS 🔥");
    sessions++;
    session.innerText = `Sessions Completed : ${sessions}`
    if(num ===0){
        timeLeft = totalMinutes * 60;
    }else{
        timeLeft = num * 60;
    }
    updateDisplay()
}

const startTimer = ()=>{
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

const resetTimer = ()=>{
    pauseTimer()
    if(num ===0){
        timeLeft = totalMinutes * 60
    }else{
        timeLeft = num * 60;
    }
    updateDisplay()
}

allbtns.forEach((btn)=>{
    if(btn.innerText === "Start"){
        btn.addEventListener("click",()=>{
            startTimer()
        })
    }
    if(btn.innerText === "Pause"){
        btn.addEventListener("click",()=>{
            pauseTimer()
        })
    }
    if(btn.innerText === "Reset"){
        btn.addEventListener("click",()=>{
            resetTimer()
        })
    }
})

setTime.addEventListener("click",()=>{
    num = Number(time.value)
    if(num <=0 || num>60){
        alert("Please enter number between 1 and 60")
        return;
    }
    timeLeft = num * 60
    // session.innerText = `Sessions Completed : 0`
    updateDisplay()
})