let menu = document.getElementById("menu");
let buttonBars = document.getElementById("barsMenu");
let buttonBarsTwo = document.getElementById("barsMenuTwo");

buttonBars.addEventListener("click", event => {
    menu.style.marginLeft = "20px";
    buttonBars.style.display = "none";
    buttonBarsTwo.style.display = "inline-block";
})

buttonBarsTwo.addEventListener("click", event => {
    menu.style.marginLeft = "-1000px";
    buttonBarsTwo.style.display = "none";
    buttonBars.style.display = "inline-block";
})