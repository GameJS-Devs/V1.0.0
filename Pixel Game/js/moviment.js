var player = document.getElementById("player");

var x = 0;
var y = 0;

function createParticle(){
    
    let fast = document.createElement("div")
    fast.classList.add("fast")
    document.body.appendChild(fast)
    fast.style.left = x + "px";
    fast.style.top = y + "px"; 
    function deleteak(){
        var parent = fast.parentNode;
        parent.removeChild(fast)
    }
    //setTimeout(deleteak, 100)
}

document.addEventListener("keydown", event => {
    if(event.keyCode === 39){
        x += 10;
        player.style.left = x + "px";
    } else if(event.keyCode === 37){
        x -= 10;
        player.style.left = x + "px";
    } else if(event.keyCode === 40){
        y += 10;
        player.style.top = y + "px";
    } else if(event.keyCode === 38){
        y -= 10;
        player.style.top = y + "px";
    }
})

setInterval(createParticle, 20);