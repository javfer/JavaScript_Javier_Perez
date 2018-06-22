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
  var signo=document.getElementById('sign');
  var raiz=document.getElementById('raiz');
  var division=document.getElementById('dividido');
  var multiplica=document.getElementById('por');
  var resta=document.getElementById('menos');
  var suma=document.getElementById('mas');
  var punto=document.getElementById('punto');
  var igual=document.getElementById('igual');


uno.onclick = function(e){
     revisaCeroInicial();
     resultado.textContent = resultado.textContent  + "1";
 }
dos.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "2";
  }
tres.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "3";
  }
cuatro.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "0";
}
signo.onclick = function(e){
  resultado.textContent = (resultado.textContent * -1);
}
on.onclick = function(e){
    limpiar();
}
on.dblclick = function(e){
    borrar();
}
suma.onclick = function(e) {
    valor1=resultado.textContent;
    operando=suma;
    limpiar();
}
resta.onclick = function(e) {
    valor1=resultado.textContent;
    operando=resta;
    limpiar();
}
multiplica.onclick = function(e) {
    valor1=resultado.textContent;
    operando=multiplica;
    limpiar();
}
division.onclick = function(e) {
    valor1=resultado.textContent;
    operando=division;
    limpiar();
}
raiz.onclick = function(e) {
    valor1=resultado.textContent;
    limpiar();
}
igual.onclick = function(e){
    valor2=resultado.textContent;
    resuelve(operando);

}
function resuelve(operando) {
  switch (operando) {
   case suma:
  resultado.textContent=Number(valor1) + Number(valor2);
  Number(valor1) = Number(valor2);
    break;
    case resta:
   resultado.textContent=Number(valor1) - Number(valor2);
     break;
     case multiplica:
    resultado.textContent=Number(valor1) * Number(valor2);
      break;
      case divide:
     resultado.textContent=Number(valor1) + Number(valor2);
       break;
}
}
function limpiar() {
  resultado.textContent="0";
}
function revisaCeroInicial() {
  if (resultado.textContent<=0){
    resultado.textContent="";
  }
}
function borrar() {
  valor1=0;
  valor2=0;
  resultado.textContent="0";
}
}
