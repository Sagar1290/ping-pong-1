// console.log(8+6)
let lastTime
import Bat from "./Bat";

let bat =  new Bat(document.getElementById("paddle"))

function update(time)
{
    
    // console.log("helllo world");
    if(lastTime != null)
    {
        // console.log(time - lastTime)
        bat.update();
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

document.addEventListener("keydown", e => {
    if(e.key === "ArrowDown")
    bat.pos -= 0.5
})

window.requestAnimationFrame(update)