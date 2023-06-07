let password = document.getElementById("password");

let enviar = document.getElementById("enviar");
let btnAceptar = document.getElementById("btnAceptar");
let btnEnviar2= document.getElementById("btnEnviar2");
let btnAceptar2= document.getElementById("btnAceptar2")
let modalAlert = document.getElementById("modalAlert");
let modalAlert2 = document.getElementById("modalAlert2");

let closed = document.getElementById("closed");
enviar.addEventListener("click",function() {
   
if (password.value.length == 0){
    enviar.addEventListener("click",function(){
            modalAlert2.classList.remove("alert-hidden2")
            });
    closed2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2") 
            });
    btnAceptar2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2")
            }); 
}
else {
    enviar.addEventListener("click",function(){
        modalAlert.classList.remove("alert-hidden")
        });
    closed.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
    btnAceptar.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        });
}
});