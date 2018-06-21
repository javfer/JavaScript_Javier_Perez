var valor1;
var valor2;
var operando;

function Calculadora() {
  var resultado=document.getElementById("display");
  var uno=document.getElementById('1');
  var dos=document.getElementById('2');
  var tres=document.getElementById('3');
  var cuatro=document.getElementById('4');
  var cinco=document.getElementById('5');
  var seis=document.getElementById('6');
  var siete=document.getElementById('7');
  var ocho=document.getElementById('8');
  var nueve=document.getElementById('9');
  var cero=document.getElementById('0');
  var on=document.getElementById('on');
  var sign=document.getElementById('sign');
  var raiz=document.getElementById('raiz');
  var division=document.getElementById('dividido');
  var multiplica=document.getElementById('por');
  var resta=document.getElementById('menos');
  var suma=document.getElementById('mas');
  var punto=document.getElementById('punto');
  var igual=document.getElementById('igual');


uno.onclick = function(e){
     resultado.textContent = resultado.textContent  + "1";
 }
dos.onclick = function(e){
      resultado.textContent = resultado.textContent  + "2";
  }
tres.onclick = function(e){
      resultado.textContent = resultado.textContent  + "3";
  }
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
on.onclick = function(e){
   borrar();
}
}
