var presionada;
var enPantalla;

document.onkeypress= t_Presionada;
document.onkeydown= t_imagenS;
document.onkeyup= t_imagenG;
document.onclick=t_PresionadaMouse;

function t_PresionadaMouse(teclas){
  var resive=document.getElementById(teclas.target.id);
  presionada=resive.id;
  validarTecla(presionada);

  enPantalla=document.querySelector("#calculadoraFondo #display").innerText;
  muestraDisplay(enPantalla, presionada);
}

function t_Presionada(tecla){
  //var presionada=tecla.which || tecla.keyCode;
presionada=tecla.key
validarTecla(presionada);

enPantalla=document.querySelector("#calculadoraFondo #display").innerText;
muestraDisplay(enPantalla, presionada);
}

function t_imagenG(presionada) {
  document.getElementById(presionada).style="height:4.6vw;";//width:5.7vw;
}

function t_imagenS(presionada) {
  document.getElementById(tecla.key).style="height:4.5vw;";//width:5.63vw;
}

function muestraDisplay(enPantalla, presionada){
  document.querySelector("#calculadoraFondo #display")
  .innerHTML=(presionada);
}
 function validarTecla(presionada) {
   switch (presionada) {
    case "0":
     alert(presionada);
    return;
     break;

    case "1":
      alert(presionada);
    return;
       break;

    case "2":
      alert(presionada);
    return;
    break;

    case "3":
      alert(presionada);
    return;
    break;
    case "4":
      alert(presionada);
    return;
    break;
    case "5":
      alert(presionada);
    return;
    break;
    case "6":
      alert(presionada);
    return;
    break;
    case "7":
      alert(presionada);
    return;
    break;

    case "8":
      alert(presionada);
    return;
    break;

    case "9":
      alert(presionada);
    return;
    break;

    case "on":
      alert(presionada);
    return;
    break;

    case "sign":
      alert(presionada);
    return;
    break;

    case "raiz":
      alert(presionada);
    return;
    break;
    case "dividido":
      alert(presionada);
    return;
    break;
    case "por":
      alert(presionada);
    return;
    break;
    case "menos":
      alert(presionada);
    return;
    break;
    case "punto":
      alert(presionada);
    return;
    break;
    case "igual":
      alert(presionada);
    return;
    break;
    case "mas":
      alert(presionada);
    return;
    break;
     default:
  alert("esto es un default");
   }

 }
