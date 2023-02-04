var player = document.getElementById("player");
var suelo = document.getElementById("plataformaOne");
var coor = document.getElementById("coor")
var rect = player.getBoundingClientRect()

var x = 0;
var y = 0;
var gravity_y = .1;

function gravity(){
    y += gravity_y * 10;
    player.style.top = y + "px";
}

function detect(){
    if(y >= 810 && x <= 390){
        y -= 10;
    }
}

function coordenadas(){
    coor.innerHTML = `Coordenadas: ${y_redondeado},${x}`
}

document.addEventListener("keydown", event => {
    if(event.keyCode === 39){
        x += 10;
        player.style.left = x + "px";

    } else if(event.keyCode === 37){
        x -= 10;
        player.style.left = x + "px";
    }
})

setInterval(gravity, 1)
setInterval(detect, 1)
setInterval(coordenadas, 1)