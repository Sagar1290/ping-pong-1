// console.log(8+6)
let lastTime;
function update(time) {
    // console.log("helllo world");
    if (lastTime != null) console.log(time - lastTime);
    lastTime = time;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

//# sourceMappingURL=index.ee89b55f.js.map
