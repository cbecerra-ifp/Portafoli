var kub = document.getElementById("cub");
var r = 0;
function amunt() {
  r = r + 90;
  kub.style.transform = "rotateX(" + r + "deg)";
}
function avall() {
  r = r - 90;
  kub.style.transform = "rotateX(" + r + "deg)";
}
function esquerra() {
  r = r - 90;
  kub.style.transform = "rotateY(" + r + "deg)";
}
function dreta() {
  r = r + 90;
  kub.style.transform = "rotateY(" + r + "deg)";
}

document.getElementById("amunt").addEventListener("click", amunt);
document.getElementById("avall").addEventListener("click", avall);
document.getElementById("esquerra").addEventListener("click", esquerra);
document.getElementById("dreta").addEventListener("click", dreta);

document.onkeydown = comprovaTecla;

function comprovaTecla(e) {
  if (e.keyCode == 38) {
    amunt();
  } else if (e.keyCode == 40) {
    avall();
  } else if (e.keyCode == 37) {
    esquerra();
  } else if (e.keyCode == 39) {
    dreta();
  } else {
    console.log("tecla erronia");
  }
}
