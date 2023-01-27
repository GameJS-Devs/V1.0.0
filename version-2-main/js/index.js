//Creamos un objeto para los comentarios

function Comment(content){
    this.content = content;
    this.class = "commentNew";
    this.src = "src/icon.jpg"
};

//Creamos variables del DOM

let comentarios = document.getElementById("content")
let showComments = document.getElementById("showComments")
let inputComment = document.getElementById("comment").value;
let button = document.getElementById("send");
let commentContent = document.getElementById("contentComments") 

//Agregamos un evento al botón de comentar

button.addEventListener("click", event => {

    //Creamos una condicional (Si el campo de texto no tiene cotenido mostramos en consola un error, y si tiene, seguimos con la secuencia)

    if(document.getElementById("comment").value === ""){
        console.log("error NaN");
    } else {

        //Creamos elemnetos y un objeto (imagen)
        
        var comment = new Comment(document.getElementById("comment").value);
        var icon = new Image()
        icon.src = "src/icon.jpg";
        icon.classList.add("icon");
        var p = document.createElement("span");
        var name = document.createElement("span");
        var div = document.createElement("div");
        var divTwoTop = document.createElement("div");
        divTwoTop.classList.add("topComment")
        
        //Los hacemos aparecer en su respectivo contenedor
        
        commentContent.appendChild(divTwoTop)
        commentContent.appendChild(div)
        divTwoTop.appendChild(icon)
        divTwoTop.appendChild(name)
        div.appendChild(p)
        name.innerHTML = "Humer";
        p.innerHTML = comment.content;
        p.classList.add(comment.class)
        name.classList.add("name")
        console.log(p)

        //Limpiamos el campo de texto

        document.getElementById("comment").value = "";
    }
});

//Creamos una funcion y declaramos variables para aparecer los comentarios

function showCommentsFunction(){
    comentarios.style.bottom = "0px"
    showComments.style.marginBottom = "80px"
}

function hiddeCommentFunction(){
    comentarios.style.bottom = "-1000px"
    showComments.style.marginBottom = "0px"
    document.getElementById("comment").value = ""
}