document.onkeypress= function teclaPresionada(tecla){
  var presionada=tecla.which || tecla.keyCode;
  var t_valor=0;//document.querySelector("#display").innerText;
  document.querySelector("#calculadoraFondo #display")
  .innerHTML=""+String.fromCharCode(presionada)

}

document.onkeydown= function t_imagenS(tecla) {
  //var t_seleccionada="#"+;
  document.getElementById(tecla.key).style="width:7.6vw; height:6.1vw;";
}
document.onkeyup= function t_imagenG(tecla) {
  //var t_seleccionada="#"+;
  document.getElementById(tecla.key).style="width:7.7vw; height:6.2vw;";
}
