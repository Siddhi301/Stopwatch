let display = document.querySelector(".display");
let stopbtn = document.getElementById("stopbtn");
let startbtn = document.getElementById("startbtn");
let resetbtn = document.getElementById("resetbtn");

let msec = 0;
let secs = 0;
let mins = 0;

let timer = null;

startbtn.addEventListener('click',function(){
    if (timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(startTimer,10);
})

stopbtn.addEventListener('click',function(){
    clearInterval(timer);
})

resetbtn.addEventListener('click',function(){
    clearInterval(timer);
    display.innerHTML = '00 : 00 : 00';
    msec = secs = mins = 0;
})

function startTimer(){
    msec++;
    if (msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }
    
    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secsstring = secs < 10 ? `0${secs}` : secs;
    let minsstring = mins < 10 ? `0${mins}` : mins;
    
    display.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;    
}

