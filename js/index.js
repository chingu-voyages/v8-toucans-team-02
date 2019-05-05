/* Comportamiento del boton de Top */
window.onscroll = function() {
	scrollFunction();
}

function scrollFunction() {
	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		document.getElementById("topBtn").style.display = "block";
		document.getElementById("topBtn").style.animation = "fadeIn ease-in 1";
		document.getElementById("topBtn").style.animationDuration = "0.5s";
		document.getElementById("topBtn").style.animationFillMode = "forwards";


	} else {
		document.getElementById("topBtn").style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
/* Fin del comportamiento del boton de Top */

/* Funciones para cambiar imagenes con cada boton */

function piscinaFunc() {
	document.getElementById("niñaContainer").style.backgroundImage = "url('images/PiscinaOlimpica.png')";
}

function piscinaKidsFunc() {
	document.getElementById("niñaContainer").style.backgroundImage = "url('images/piscinaNinos.png')";
}

function parqueInFunc() {
	document.getElementById("niñaContainer").style.backgroundImage = "url('images/parqueInfantil.png')";
}

function churrasqueraFunc() {
	document.getElementById("areneroContainer").style.backgroundImage = "url('images/churrasqueraImg.png')";
}

function salonDeFiestaFunc() {
	document.getElementById("areneroContainer").style.backgroundImage = "url('images/salonFiesta.png')";
}

function areneroFunc() {
	document.getElementById("areneroContainer").style.backgroundImage = "url('images/areneroImg.png')";
}

function gimnasioFunc() {
	document.getElementById("deportesContainer").style.backgroundImage = "url('images/gimnasioImg.png')";
}

function canchasFunc() {
	document.getElementById("deportesContainer").style.backgroundImage = "url('images/canchasImg.png')";
}

function salaAeroFunc() {
	document.getElementById("deportesContainer").style.backgroundImage = "url('images/aerobicosImg.png')";
}

/* Desde aca las funciones llaman a las imagenes para moviles */

function piscinaDosFunc() {
	document.getElementById("niñaContainer").style.backgroundImage = "url('images/PiscinaOlimpicaPeq.png')";
}

function piscinaKidsDosFunc() {
	document.getElementById("niñaContainer").style.backgroundImage = "url('images/piscinaNinosPeq.png')";
}

function parqueInDosFunc() {
	document.getElementById("niñaContainer").style.backgroundImage = "url('images/parqueInfantilPeq.png')";
}

function churrasqueraDosFunc() {
	document.getElementById("areneroContainer").style.backgroundImage = "url('images/churrasqueraImgPeq.png')";
}

function salonDeFiestaDosFunc() {
	document.getElementById("areneroContainer").style.backgroundImage = "url('images/salonFiestaPeq.png')";
}

function areneroDosFunc() {
	document.getElementById("areneroContainer").style.backgroundImage = "url('images/areneroImgPeq.png')";
}

function gimnasioDosFunc() {
	document.getElementById("deportesContainer").style.backgroundImage = "url('images/gimnasioImgPeq.png')";
}

function canchasDosFunc() {
	document.getElementById("deportesContainer").style.backgroundImage = "url('images/canchasImgPeq.png')";
}

function salaAeroDosFunc() {
	document.getElementById("deportesContainer").style.backgroundImage = "url('images/aerobicosImgPeq.png')";
}

/* Final funciones de botones cambiando imagenes */