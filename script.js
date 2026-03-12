const leftBeer = document.getElementById("beerLeft")
const rightBeer = document.getElementById("beerRight")

function startCheers(){

if(!leftBeer) return

leftBeer.classList.add("beerMoveLeft")
rightBeer.classList.add("beerMoveRight")

document.getElementById("cheersSound").play()

document.querySelector(".cheersMessage").style.opacity=1

createConfetti()

setTimeout(()=>{
window.location.href="t.html"
},3000)

}

if(leftBeer){
leftBeer.addEventListener("click",startCheers)
rightBeer.addEventListener("click",startCheers)
}

/* CONFETTI */

function createConfetti(){

for(let i=0;i<40;i++){

let conf=document.createElement("div")

conf.classList.add("confetti")

conf.style.left=Math.random()*100+"vw"
conf.style.background=`hsl(${Math.random()*360},80%,60%)`
conf.style.animationDuration=(Math.random()*2+2)+"s"

document.body.appendChild(conf)

setTimeout(()=>conf.remove(),4000)

}

}

/* TIMER */

const days=document.getElementById("days")

if(days){

let target=new Date("March 16, 2026 00:00:00").getTime()

setInterval(()=>{

let now=new Date().getTime()

let diff=target-now

let d=Math.floor(diff/(1000*60*60*24))
let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
let m=Math.floor((diff%(1000*60*60))/(1000*60))
let s=Math.floor((diff%(1000*60))/1000)

document.getElementById("days").innerHTML=d
document.getElementById("hours").innerHTML=h
document.getElementById("minutes").innerHTML=m
document.getElementById("seconds").innerHTML=s

},1000)

}