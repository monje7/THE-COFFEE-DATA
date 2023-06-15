let nombreUsuario = document.getElementById("nombreUsuario");
let apellidos = document.getElementById("apellidos");
let cedula = document.getElementById("cedula");
let telefono = document.getElementById("telefono");
let option = document.getElementById("option");
let btnEnviar = document.getElementById("btnEnviar");
let btnAceptar = document.getElementById("btnAceptar");
let btnEnviar2= document.getElementById("btnEnviar2");
let btnAceptar2= document.getElementById("btnAceptar2")
let modalAlert = document.getElementById("modalAlert");
let modalAlert2 = document.getElementById("modalAlert2");
let txtAlert = document.getElementById("txtAlert")
let txtAlert2 = document.getElementById("txtAlert2")
let txtAlert3 = document.getElementById("txtAlert3")    
let txtAlert4 = document.getElementById("txtAlert4")

let closed = document.getElementById("closed");
let closed2 = document.getElementById("closed2");






btnEnviar.addEventListener("click",function() {
    if (nombreUsuario.value.length === 0  || apellidos.value.length ===0 || cedula.value.length ===0  || telefono.value.length ===0 ){

            modalAlert2.classList.remove("alert-hidden2");
            txtAlert.classList.remove("txt-alert-hidden");

            
            if (nombreUsuario.value.length ===0) {
                txtAlert.classList.remove("txt-alert-hidden");
            }
            else {
                txtAlert.classList.add("txt-alert-hidden")
                txtAlert.classList.remove("txt-alert-visible")  
            }
            if (apellidos.value.length ===0) {
                txtAlert2.classList.remove("txt-alert-hidden");
            }
            else {
                txtAlert2.classList.add("txt-alert-hidden")
                txtAlert2.classList.remove("txt-alert-visible")  
            }
            if (cedula.value.length ===0) {
                txtAlert3.classList.remove("txt-alert-hidden");
            }
            else {
                txtAlert3.classList.add("txt-alert-hidden")
                txtAlert3.classList.remove("txt-alert-visible")  
            }
            if (telefono.value.length ===0) {
                txtAlert4.classList.remove("txt-alert-hidden");
            }
            else {
                txtAlert4.classList.add("txt-alert-hidden")
                txtAlert4.classList.remove("txt-alert-visible")  
            }
        }
        });
        closed2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2");
        });
        btnAceptar2.addEventListener("click",function(){
            modalAlert2.classList.add("alert-hidden2");
        });


btnEnviar.addEventListener("click",function() {
    if (nombreUsuario.value.length >= 1  && apellidos.value.length >= 1 && cedula.value.length >= 1 && telefono.value.length >= 1){
            modalAlert.classList.remove("alert-hidden");
        }
        });
        closed.addEventListener("click",function(){
            modalAlert.classList.add("alert-hidden");
        });
        btnAceptar.addEventListener("click",function(){
            modalAlert.classList.add("alert-hidden");
        });
    



