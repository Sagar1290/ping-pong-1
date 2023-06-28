export default class Bat{
    constructor(batElem){
        this.batElem = batElem;
        // document.addEventListener("mousemove",e =>{
        //     this.pos = (e.y/window.innerHeight)*100
        // })
        this.setup()
    }

    setup()
    {
        document.addEventListener("keydown", e => {
            if(e.key === "ArrowDown")
            this.pos -= 0.5
        })
    }

    get pos(){
        return parseFloat(getComuptedStyle(this.batElem).getPropertyValue("--position"))
    }

    set pos(value)
    {
        this.batElem.style.setProperty("--position", value)
    }
    update()
    {
        
    }


}