let t;class e{constructor(t){this.batElem=t,this.reset()}reset(){this.pos=50}rect(){return this.batElem.getBoundingClientRect()}get pos(){return parseFloat(getComputedStyle(this.batElem).getPropertyValue("--position"))}set pos(t){this.batElem.style.setProperty("--position",t)}update(t,e){this.pos+=.02*t*(e-this.pos)}}let i=new class{constructor(t){this.ballElem=t,this.setup()}setup(){for(this.x=50,this.y=50,this.direction={x:0,y:0};.3>=Math.abs(this.direction.x)||Math.abs(this.direction.x)>=.8;)this.theta=Math.random()*Math.PI*2,this.direction={x:Math.cos(this.theta),y:Math.sin(this.theta)};console.log(this.direction),this.velocity=.025}get x(){return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))}set x(t){this.ballElem.style.setProperty("--x",t)}get y(){return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))}set y(t){this.ballElem.style.setProperty("--y",t)}rect(){return this.ballElem.getBoundingClientRect()}update(t,e,i){this.x+=this.direction.x*this.velocity*t,this.y+=this.direction.y*this.velocity*t,this.velocity+=1e-4;let o=this.rect();(o.y<=0||o.y>=window.innerHeight)&&(this.direction.y*=-1),e.right>=o.left&&e.top<=o.bottom&&e.bottom>=o.top&&(this.direction.x*=-1),i.left<=o.right&&i.top<=o.bottom&&i.bottom>=o.top&&(this.direction.x*=-1)}}(document.getElementById("ball")),o=new e(document.getElementById("paddle-left")),s=new e(document.getElementById("paddle-right")),n=document.getElementById("player-score"),r=document.getElementById("computer-score");document.addEventListener("mousemove",t=>{o.pos=t.y/innerHeight*100}),window.requestAnimationFrame(function e(l){if(null!=t){let e=o.rect(),n=s.rect(),r=l-t;i.update(r,e,n),s.update(r,i.y)}if(function(){let t=i.rect();return t.left<=0||t.right>=window.innerWidth}()){let t=i.rect();t.left<=0?r.textContent=parseInt(r.textContent)+1:n.textContent=parseInt(n.textContent)+1,i.setup()}t=l,window.requestAnimationFrame(e)});
//# sourceMappingURL=index.6152d57e.js.map
