/*
Ingresar a pagina1 siempre y cuando
se ingrese un correo correctamente
En caso contyrario se muestra el emsanje de error
*/

// ENTRADA
const email = document.getElementById("txtEmail");
const error = document.getElementById("emailVal");
const btnEnviar = document.getElementById("btnEnviar");
let mensaje = "errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
btnEnviar.onclick = function (){
let vemail = email.value;
let arroba =0;
// PROCESOS
console.log(error);
arroba = vemail.indexOf("@");
if(arroba < 0){
mensaje = "Email inválido";
}else{
window.location.replace("pagina1.html");
//window.location.assign("pagina1.html");
}
//SALIDA
error.innerText = mensaje;
}

