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
      if((carater=="+")||(carater=="-")||(carater=="*")||(carater=="/")){
        document.querySelector("#calculadoraFondo #display").innerHTML="0";
        enPantalla="";
      }else if(carater=="√")  {
          Arreglo.push(id_presionada);
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
if(id_presionada=="igual"){
  for(i=0;i<Arreglo.length;i++){
    document.querySelector(".nota-input")
      .innerHTML=Arreglo[0];
paraPantalla=Arreglo[0];
      Arreglo=[];
      return;

  }
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
    var agregaSigno="√"
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
      colocarPunto();

    return;
    break;
    case "igual":
      var  agregaSigno="=";
      agregarOperacion(agregaSigno);
      resultado();
      paraDisplay();
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
  if (agregaSigno=="√") {
      Arreglo.push(agregaSigno);
      document.querySelector("#calculadoraFondo #display").innerHTML="√";
      paraPantalla="√";
      return;
}

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

  for (i=0; i<Arreglo.length-1;i++){//realiza raiz

    var valor1=Number(Arreglo[i-1]);
    var logitudValorRaiz=Arreglo[i+1].length;
    var valorRaiz=Arreglo[i+1].slice(1,logitudValorRaiz);
    var valor2=Number(valorRaiz);

        if (Arreglo[i]=="√"){//calcula raiz

          total=Math.sqrt(valor2);
          var res =total.toString();
          Arreglo[i]=res.slice(0,9);
          Arreglo.splice(i+1,1);
          i=0;
        }
    }//fin for raiz
        for (i=0; i<Arreglo.length;i++){//ejecuta y elimina * /

          var valor1=Number(Arreglo[i-1]);
          var valor2=Number(Arreglo[i+1]);

        if (Arreglo[i]=="*"){

            total=valor1*valor2;
            i=corrijeArreglo(total,i);

        }else if (Arreglo[i]=="/"){

            total=valor1/valor2;
            i=corrijeArreglo(total,i);
          }
        }//fin for*/

for(i=0;i<Arreglo.length; i++){

  var valor1=Number(Arreglo[i-1]);
  var valor2=Number(Arreglo[i+1]);

        if (Arreglo[i]=="-"){

            total=valor1-valor2;
            i=corrijeArreglo(total,i);

        }else if (Arreglo[i]=="+"){

            total=valor1+valor2;
            i=corrijeArreglo(total,i);

        }
}//fin for +-

document.querySelector(".nota-input")
  .innerHTML=Arreglo[0];
  return;
}//fi funio

function corrijeArreglo(total, i) {

var res =total.toString();

      Arreglo[i]=res.slice(0,9);
      Arreglo.splice(i+1,1);
      Arreglo.splice(i-1,1);
      i=0;
return(i);
}
