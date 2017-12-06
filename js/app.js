/*El objeto Calculadora dentro del cual va todo el código*/
var Calculadora = {
pantalla: document.getElementById("display").innerHTML,
decimal: 0,
signo: 0,
controlen: 8,
stop: 0,
num1: 0,
opcion: 0,
auxnum: 0,
auxestado: 0,
auxresultado: 0,
inicio: (
  function(){
    this.EventosClick();
  }
),
/*Animacion para el tamano de las teclas*/
animacionuno: function(tecla){
		document.getElementById(tecla).style.transform="scale(0.9)";
		setTimeout(function() {document.getElementById(tecla).style.transform="scale(1)";}, 200);
	},


}

Calculadora.inicio();
