var player = document.getElementById("player");
var suelo = document.getElementById("plataformaOne");
var coor = document.getElementById("coor")
var rect = player.getBoundingClientRect()

var x = 0;
var y = 0;
var gravity_y = .1;
var y_redondeado
var intervalGravity
var intervalDetect = setInterval(detect, 100)

function gravity(){
    y += gravity_y * 1.5;
    y_redondeado = Math.round(y)
    player.style.top = y + "px"
    console.log(y)
}

function detect(){
    if(y >= 820 && x <= 380){
       
        clearInterval(interval)
        clearInterval(intervalDetect)
    } else {
        intervalGravity = setInterval(gravity, 500);
        intervalDetect = setInterval(detect, 100);
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
setInterval(coordenadas, 1)