var imatge = document.getElementsByTagName("img");
var tirador = document.getElementsByTagName("input");
var valor = document.getElementsByTagName("p");

//blur
function blur() {
  valor[1].innerHTML = tirador[0].value;
  imatge[0].style.filter = "blur(" + tirador[0].value + "px)";
}

tirador[0].addEventListener("input", blur);

//grisos
function gris() {
  valor[2].innerHTML = tirador[1].value;
  imatge[1].style.filter = "grayscale(" + tirador[1].value + "%)";
}

tirador[1].addEventListener("input", gris);

//ombra
function ombra() {
  valor[3].innerHTML = tirador[2].value;
  imatge[2].style.filter =
    "drop-shadow(0px 0px " + tirador[2].value + "px black)";
}

tirador[2].addEventListener("input", ombra);

//sèpia
function sepia() {
  valor[4].innerHTML = tirador[3].value;
  imatge[3].style.filter = "sepia(" + tirador[3].value + "%)";
}

tirador[3].addEventListener("input", sepia);

//lluminositat
function lluminositat() {
  valor[5].innerHTML = tirador[4].value;
  imatge[4].style.filter = "brightness(" + tirador[4].value + "%)";
}

tirador[4].addEventListener("input", lluminositat);

//contrast
function contrast() {
  valor[6].innerHTML = tirador[5].value;
  imatge[5].style.filter = "contrast(" + tirador[5].value + "%)";
}

tirador[5].addEventListener("input", contrast);

//to
function to() {
  valor[7].innerHTML = tirador[6].value;
  imatge[6].style.filter = "hue-rotate(" + tirador[6].value + "deg)";
}

tirador[6].addEventListener("input", to);

//invertir
function invertir() {
  valor[8].innerHTML = tirador[7].value;
  imatge[7].style.filter = "invert(" + tirador[7].value + "%)";
}

tirador[7].addEventListener("input", invertir);

//saturacio
function saturacio() {
  valor[9].innerHTML = tirador[8].value;
  imatge[8].style.filter = "saturate(" + tirador[8].value + "%)";
}

tirador[8].addEventListener("input", saturacio);

//opacitat
function opacitat() {
  valor[10].innerHTML = tirador[9].value;
  imatge[9].style.filter = "opacity(" + tirador[9].value + "%)";
}

tirador[9].addEventListener("input", opacitat);
