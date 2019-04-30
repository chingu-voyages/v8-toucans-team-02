/*var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[2].style.display = "block";
    setTimeout(carousel, 2000);
}*/


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
