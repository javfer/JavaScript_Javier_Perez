var id_presionada;
var enPantalla;
var paraPantalla;
var Arreglo=[];
var validarFinArreglo=0;

document.onkeypress= t_PresionadaTeclado;
document.onkeydown= t_imagenS;
document.onkeyup= t_imagenG;
document.onclick=t_PresionadaMouse;

function t_PresionadaMouse(teclas){
  var resive=document.getElementById(teclas.target.id);
  id_presionada=resive.id;
  //t_imagenS(id_presionada);
  enPantalla=document.querySelector("#calculadoraFondo #display").innerText;
  validarTecla(id_presionada);

  //t_imagenG(id_presionada);
  document.querySelector("#calculadoraFondo #display").innerHTML=paraPantalla;
}

function t_PresionadaTeclado(tecla){
  //var presionada=tecla.which || tecla.keyCode;
id_presionada=tecla.key
enPantalla=document.querySelector("#calculadoraFondo #display").innerText;
validarTecla(id_presionada);

document.querySelector("#calculadoraFondo #display").innerHTML=paraPantalla;
}

function t_imagenG() {
  document.getElementById(id_presionada).style="height:4.6vw;";//width:5.7vw;
  //return;
  }

function t_imagenS() {
  document.getElementById(id_presionada).style="height:4.5vw;";//width:5.63vw;
  //return;
  }

function paraDisplay(){
  if  (validarFinArreglo==1){
  var nume=Arreglo.length;
    var carater=Arreglo[nume-1];
      if((carater=="+")||(carater=="-")||(carater=="*")||(carater=="/")||(carater=="raiz")){
        document.querySelector("#calculadoraFondo #display").innerHTML="0";
        enPantalla="";
      }
    validarFinArreglo=0;
  }

  if (id_presionada=="on") {
    paraPantalla="0";
    document.querySelector(".nota-input")
    .innerHTML="";
    Arreglo=[];
    return;
}else if (enPantalla=="0"){
enPantalla="";
}else if(enPantalla.length==10){
  var valor=Number(enPantalla);
  if (valor<=0){
    return;
  }
}else if (enPantalla.length==9) {
return;
}

  paraPantalla=enPantalla+id_presionada;
  return;
}
 function validarTecla(id_presionada) {
   switch (id_presionada) {

    case "0":
     paraDisplay();
    return;
     break;

    case "1":
      paraDisplay();
    return;
       break;

    case "2":
      paraDisplay();
    return;
    break;

    case "3":
      paraDisplay();
    return;
    break;
    case "4":
      paraDisplay();
    return;
    break;
    case "5":
      paraDisplay();
    return;
    break;
    case "6":
      paraDisplay();
    return;
    break;
    case "7":
      paraDisplay();
    return;
    break;

    case "8":
      paraDisplay();
    return;
    break;

    case "9":
      paraDisplay();
    return;
    break;

    case "on":
      paraDisplay();
    return;
    break;

    case "sign":
      cambiaSigno();
    return;
    break;

    case "raiz":
    var agregaSigno="raiz"
    agregarOperacion(agregaSigno);
    return;
    break;
    case "dividido":
    var agregaSigno="/"
    agregarOperacion(agregaSigno);
    return;
    break;
    case "por":
    var agregaSigno="*"
    agregarOperacion(agregaSigno);
    return;
    break;
    case "menos":
    var agregaSigno="-"
    agregarOperacion(agregaSigno);
    return;
    break;
    case "punto":
      colocarPunto()

    return;
    break;
    case "igual":
      var  agregaSigno="";
      agregarOperacion(agregaSigno)
      resultado();
    return;
    break;
    case "mas":
      var agregaSigno="+"
      agregarOperacion(agregaSigno);
    return;
    break;
   }

 }

function cambiaSigno() {
  var valor=Number(enPantalla);
  valor=valor*-1;
  paraPantalla=valor.toString();
  return;

}

function agregarOperacion(agregaSigno) {
  Arreglo.push(enPantalla);
  Arreglo.push(agregaSigno);
  var paraUnirArre="";
  for (var i = 0; i < Arreglo.length; i++) {
    var valorArreglo=Arreglo[i];
    paraUnirArre=paraUnirArre+valorArreglo;
}
document.querySelector(".nota-input")
.innerHTML=paraUnirArre;
validarFinArreglo=1;
  return;
}

function colocarPunto() {
  for (var i=0; i<enPantalla.length; i++){
    var caracter = enPantalla.charAt(i);
    if (caracter=="."){
      return;
    }
        }
  paraPantalla=enPantalla+".";
  return;
}

function resultado() {
  var total=0;

  for (i=0; i<Arreglo.length;i++){

    var valor1=0;
    var valor2=0;
    var operacioEcha=0;

    valor1=Number(Arreglo[i-1]);
    valor2=Number(Arreglo[i+1]);

        if (Arreglo[i]=="raiz"){

          total=Math.sqrt(valor1);
          operacioEcha=1;
        }
    }
        for (i=0; i<Arreglo.length;i++){
          var valor1=0;
          var valor2=0;
          var operacioEcha=0;
          
        if ((Arreglo[i]=="*") || if (Arreglo[i]=="/")){
        if (Arreglo[i]=="*"){

            total=valor1*valor2;
            operacioEcha=1;

        }else if (Arreglo[i]=="/"){

            total=valor1/valor2;
            operacioEcha=1;

        }else if (Arreglo[i]=="-"){

            total=valor1-valor2;
            operacioEcha=1;

        }else if (Arreglo[i]=="+"){

            total=valor1+valor2;
            operacioEcha=1;

        }

        if (operacioEcha==1) {

          Arreglo[i]=total;
            Arreglo.splice(i+1,1);
            Arreglo.splice(i-1,1);
            i=0;


        }
}//fin for

  for (var i = 0; i < Arreglo.length; i++) {
    var valorArreglo=Arreglo[i];
    paraUnirArre=paraUnirArre+valorArreglo;
  }
  document.querySelector(".nota-input")
  .innerHTML=paraUnirArre;




}//fi funio
