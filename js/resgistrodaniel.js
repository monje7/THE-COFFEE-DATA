let nombreUsuario = document.getElementById("nombreUsuario");
let btnEnviar = document.getElementById("btnEnviar");
let btnAceptar = document.getElementById("btnAceptar");
let btnEnviar2= document.getElementById("btnEnviar2");
let btnAceptar2= document.getElementById("btnAceptar2")
let modalAlert = document.getElementById("modalAlert");
let modalAlert2 = document.getElementById("modalAlert2");

let closed = document.getElementById("closed");

btnEnviar.addEventListener("click",function() {
    if (nombreUsuario.value.length === 0){
        btnEnviar.addEventListener("click",function(){
            modalAlert2.classList.remove("alert-hidden2");
        });
        closed2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2")
            // alert("Si funciono"); 
        });
        btnAceptar2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2")
            // alert("Si funciono"); 
        }); 
        // alert("Si funciono")
}
else {
    btnEnviar.addEventListener("click",function(){
        modalAlert.classList.remove("alert-hidden");
    });
    closed.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        // alert("Si funciono"); 
    });
    btnAceptar.addEventListener("click",function(){
        modalAlert.classList.add("alert-hidden")
        // alert("Si funciono"); 
    });
}
});  
