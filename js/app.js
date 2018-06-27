
var valor2;


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
  var arreglo=[];
  var operador;
  var operando;

uno.onclick = function(e){
     revisaCeroInicial();
     resultado.textContent = resultado.textContent  + "1";
     longitud();
 }

dos.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "2";
      longitud();
  }

tres.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "3";
      longitud();
  }

cuatro.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "4";
      longitud();
}

cinco.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "5";
      longitud();
}

seis.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "6";
      longitud();
}

siete.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "7";
      longitud();
}

ocho.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "8";
      longitud();
}

nueve.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "9";
      longitud();
}

cero.onclick = function(e){
      revisaCeroInicial();
      resultado.textContent = resultado.textContent  + "0";
      longitud();
}

punto.onclick = function(e){
  colocarPunto();
}

signo.onclick = function(e){
  resultado.textContent = (resultado.textContent * -1);
}

on.onclick = function(e){
  borrar();
  //resultado.textContent = "0";
}

suma.onclick = function(e) {
    operando=resultado.textContent;
    operador="+";
    agregar();
}

resta.onclick = function(e) {
    operando=resultado.textContent;
    operador="-";
    agregar();
}

multiplica.onclick = function(e) {
    operando=resultado.textContent;
    operador="*";
    agregar();
}

division.onclick = function(e) {
    operando=resultado.textContent;
    operador="/";
    agregar();
}

raiz.onclick = function(e) {
    arreglo=[];
    operando=resultado.textContent;
    operador="√";
    agregar();
    resuelve();
}

igual.onclick = function(e){
    if (arreglo.length==1){
      arreglo.push(operador);
      arreglo.push(operando);
    }else{
      operando=resultado.textContent;
      agregar();
    }
    resuelve();

}

function resuelve() {
  operador;
  operando;
var total=0;

for (i=0; i<arreglo.length-1;i++){//realiza raiz

  var valor1=Number(arreglo[i]);
//  var logitudValorRaiz=arreglo[i].length;
//  var valorRaiz=arreglo[i].slice(1,logitudValorRaiz);
  var valor2=Number(valor1);

      if (arreglo[i+1]=="√" && Number(valor2)){//calcula raiz

        total=Math.sqrt(valor2);
        var res =total.toString();
        arreglo[i]=res.slice(0,9);
        arreglo.splice(i+1,1);
        i=0;
      }
  }//fin for raiz
      for (i=0; i<arreglo.length;i++){//ejecuta y elimina * /

        var valor1=Number(arreglo[i-1]);
        var valor2=Number(arreglo[i+1]);

      if (arreglo[i]=="*" && Number(valor2)){

          total=valor1*valor2;
          i=corrijeArreglo(total,i);

      }else if (arreglo[i]=="/" && Number(valor2)){

          total=valor1/valor2;
          i=corrijeArreglo(total,i);
        }
      }//fin for*/

for(i=0;i<arreglo.length; i++){

var valor1=Number(arreglo[i-1]);
var valor2=Number(arreglo[i+1]);

      if (arreglo[i]=="-" && Number(valor2)){

          total=valor1-valor2;
          i=corrijeArreglo(total,i);

      }else if (arreglo[i]=="+" && Number(valor2)){

          total=valor1+valor2;
          i=corrijeArreglo(total,i);

      }
}//fin for +-

document.querySelector(".nota-input")
.innerHTML=arreglo[0];
resultado.textContent=arreglo[0];

return;
}

function agregar() {
  arreglo.push(operando);
  arreglo.push(operador);
  resultado.textContent="0";
  //operador="";
  //operando="";
}

function revisaCeroInicial() {
  i = colocarPunto();

    if (resultado.textContent == 0){
        if (i!=true){
      resultado.textContent = "";
    }
  }
}

function borrar() {
  operador="";
  operando="";
  arreglo=[];
  resultado.textContent="0";
}

function corrijeArreglo(total, i) {
      var res =total.toString();
      arreglo[i]=res.slice(0,9);
      arreglo.splice(i+1,1);
      arreglo.splice(i-1,1);
      i=0;
      var valor1=arreglo.length;
        if ((arreglo[valor1-1]=="+")||(arreglo[valor1-1]=="-")||
        (arreglo[valor1-1]=="*")||(arreglo[valor1-1]=="/")||(arreglo[valor1-1]=="√")){
          arreglo.splice(valor1-1,1);
        }
      return(i);
}

function longitud() {
  i = colocarPunto();
  var longitud=resultado.textContent;

  if (i==true){
      resultado.textContent=longitud.substring(0, 9);
  }else{
      resultado.textContent=longitud.substring(0, 8);
  }


}

function colocarPunto() {
  var longitud=resultado.textContent;
  for (var i=0; i< longitud.length; i++){
    var caracter = longitud.charAt(i);
    if (caracter=="."){
      return true;
    }
        }
  resultado.textContent = resultado.textContent + ".";
  return false;
}
}
