
const player = {

    pl1: pl1,  
    y1p1: parseInt(y1p1, 10),  //Arriba 
    x1p1: parseInt(x1p1, 10),  //Left
    y2p1: y1p1 + elementH,     //Abajo
    x2p1: x1p1 + elementW,     //Right
    step: 25,    
    
    move: function(direccion) {
        switch (direccion) {
            case "ArrowUp":
                console.log("moviendo arriba");
                this.y1p1 -= this.step;
                //  console.log(this.ypos);
                this.pl1.style.top = this.y1p1 + "px";
                
                break;
            case "ArrowDown":
                if (player.y2p1 >= plataf1.y1t1){
                    console.log("COLISION DETECTADA")
                }
                console.log("moviendo abajo");
                this.y1p1 += this.step
                this.pl1.style.top = this.y1p1 + "px";
                break;
            case "ArrowLeft":
                console.log("moviendo a la izquierda");
                this.x1p1 -= this.step;
                console.log(this.x1p1)
                this.pl1.style.left = this.x1p1 + "px"
                break;
            case "ArrowRight":
                console.log("Moviedo a la derecha")
                this.x1p1 += this.step;
                console.log(this.x1p1)
                this.pl1.style.left = this.x1p1 + "px"
                break;

            default:
                break;
        }
    }

}
const plataf1 = {
    plat1: plat1,
    y1t1: parseInt(y1t1, 10),
    x1t1: parseInt(x1t1, 10),
    y2t1: y1t1 + plat1_H,
    x2t1: x1t1 + plat1_W,

}
onkeydown = (key) => {
    player.move(key.code);
    
    
    
    console.log("------")
    console.log(player.y1p1);
    console.log("------")
}

// colision = function(){
//     if (player.y2p1 < plataf1.y1t1){
//         console.log('CHOCASTE!!! :(')

//     }


// }




