window.onload=inicio;

var imagenes=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg"];
var cantidad=imagenes.length;
var mp3;
var puntos=Math.floor(Math.random()*(11-8)+8);
var premio=Math.floor(Math.random()*(4-2)+2);
var aleatorio1;
var aleatorio2;
var aleatorio3;
var ganado=false;

function cargarImagen(){
	document.imagen.src=imagenes[i];
}
//Sonido al inicio del juego
function sonido_ganar(){
	mp3.src="sound/starwars_inicio.mp3";
	mp3.play();
}

function sonido_img(){
	mp3.src="sound/sable_laser.mp3";
	mp3.play();
}

function sonido_perder(){
	mp3.src="sound/chewbacca.mp3";
	mp3.play();
}

function inicio(){
	mostrar_puntos();
	img_inicio();
	mp3=document.getElementById("sonido");
	document.getElementById("tirar").onclick=start;
	document.getElementById("tirar1").onclick=img1;
	document.getElementById("tirar2").onclick=img2;
	document.getElementById("tirar3").onclick=img3;
	//popup para ventana emergente cuando has ganado
	document.getElementById("btn-cerrar-popup").onclick=desactivar;
	comprobar_resultado();
}
//Mostrar los puntos totales
function mostrar_puntos(){
	document.getElementById("punto").innerHTML="";
	document.getElementById("total_puntos").innerHTML="Crédito: "+puntos;
	//Crea tantas imagenes como numero de puntos tengo
	for(let i=0; i<puntos; i++){
		document.getElementById("punto").innerHTML+=`<img src="./img/puntos.png">`;
	}
}

//Resta un punto por cada tirada y los muestra
function gestion_puntos(){
	puntos--;
	mostrar_puntos();
}
//Muestra las imágenes al iniciar el juego
function img_inicio(){
	aleatorio1=Math.floor(Math.random()*cantidad);
	document.getElementById("casilla1").innerHTML = `<img src="./img/${imagenes[aleatorio1]}">`;
	aleatorio2=Math.floor(Math.random()*cantidad);
	document.getElementById("casilla2").innerHTML = `<img src="./img/${imagenes[aleatorio2]}">`;
	aleatorio3=Math.floor(Math.random()*cantidad);
	document.getElementById("casilla3").innerHTML = `<img src="./img/${imagenes[aleatorio3]}">`;
	//Deshabilitar botones
	document.getElementById("tirar1").disabled=true;
	document.getElementById("tirar2").disabled=true;
	document.getElementById("tirar3").disabled=true;
}
//Al apretar start muestra las imágenes de inicio, añade los puntos y comprueba el resultado
function start(){
	sonido_img();
	img_inicio();
	gestion_puntos();
	habilitar_botones();
	comprobar_resultado();
}
//Al apretar el botón start muestra la primera imagen aleatoriamente
function img1(){
	sonido_img();
	aleatorio1=Math.floor(Math.random()*cantidad);
	document.getElementById("casilla1").innerHTML = `<img src="./img/${imagenes[aleatorio1]}">`;
	gestion_puntos();
	comprobar_resultado();
}
//Al apretar el botón start muestra la segunda imagen aleatoriamente
function img2(){
	sonido_img();
	aleatorio2=Math.floor(Math.random()*cantidad);
	document.getElementById("casilla2").innerHTML = `<img src="./img/${imagenes[aleatorio2]}">`;
	gestion_puntos();
	comprobar_resultado();
}
//Al apretar el botón start muestra la tercera imagen aleatoriamente
function img3(){
	sonido_img();
	aleatorio3=Math.floor(Math.random()*cantidad);
	document.getElementById("casilla3").innerHTML = `<img src="./img/${imagenes[aleatorio3]}">`;
	gestion_puntos();
	comprobar_resultado();
}

function comprobar_resultado(){
	if(imagenes[aleatorio1]==imagenes[aleatorio2] && imagenes[aleatorio2]==imagenes[aleatorio3]){
		activar(true);
		deshabilitar_botones(true);
		sonido_ganar();
		ganado=true;
	}else if(puntos==0){
		ganado=false;
		activar(false);
		deshabilitar_botones(false);
		sonido_perder();
	}
}

function habilitar_botones(){
	if(imagenes[aleatorio1]==imagenes[aleatorio2]){
		document.getElementById("tirar3").disabled=false;
	}else if(imagenes[aleatorio2]==imagenes[aleatorio3]){
		document.getElementById("tirar1").disabled=false;
	}else if(imagenes[aleatorio1]==imagenes[aleatorio3]){
		document.getElementById("tirar2").disabled=false;
	}
}

function deshabilitar_botones(ganar){
	if(ganar==false){
	document.getElementById("tirar").disabled=true;
	}
	document.getElementById("tirar1").disabled=true;
	document.getElementById("tirar2").disabled=true;
	document.getElementById("tirar3").disabled=true;
}

function activar(ganar){
	document.getElementById("overlay").className+=" active";
	document.getElementById("popup").className+=" active";
	if(ganar==true){
		document.getElementById("premio").innerHTML="Has ganado "+premio+" resistencias";
		document.getElementById("img_premio").innerHTML="";
		for(let i=0; i<premio; i++){
			document.getElementById("img_premio").innerHTML+=`<img src="./img/puntos.png">`;
		}
	}else{
		document.getElementById("premio").innerHTML="El Imperio ha conquistado la Galaxia";
		document.getElementById("img_premio").innerHTML="";
		document.getElementById("img_perder").innerHTML=`<img src="./img/chiwi.png">`;
	}
}

function desactivar(){
	document.getElementById("overlay").className="overlay";
	document.getElementById("popup").className="popup";
	mp3.pause();
	mp3.currentTime=0;
	if(ganado==true){
		puntos=puntos+premio;
	}
	mostrar_puntos();
}