let nombreUsuario = document.getElementById("nombreUsuario");
let btnEnviar = document.getElementById("btnEnviar");
let modalAlert = document.getElementById("modalAlert");
let closed = document.getElementById("closed")

// btnEnviar.addEventListener("click",function() {
//     if (nombreUsuario.value.length === 0){
//         alert ("El nombre de usuario es un campo obligatorio");
// }
// else {
//     alert("Bienvenido");
// }
// });  
btnEnviar = document.addEventListener("click",function(){
    modalAlert.classList.remove("alert-hidden");
});