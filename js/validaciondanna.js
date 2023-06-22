let txtNombre = document.getElementById("txtNombre");
let txtApellidos = document.getElementById("txtApellidos");
let txtCorreo = document.getElementById("txtCorreo");
let typeusuario = document.getElementById("typeusuario");
let password = document.getElementById("password");
let btnRegistrar = document.getElementById("btnRegistrar");
let btnMistake = document.getElementById("btnMistake");
let hiddenAlert = document.getElementById("hiddenAlert");
let hiddenBreack = document.getElementById("hiddenBreack");
let btnAceptar = document.getElementById("btnAceptar");
let forms = document.getElementById("forms");
let term = document.getElementById("term");
let txtAlert = document.getElementById("txtAlert");
let txtAlertA = document.getElementById("txtAlertA");
let txtAlertT = document.getElementById("txtAlertT");
let txtAlertC = document.getElementById("txtAlertC");
let txtAlertP = document.getElementById("txtAlertP");
let txtAlertTYC = document.getElementById("txtAlertTYC");
let containerT = document.getElementById("switchT");
let toogle = document.getElementById("toogle");



switchT.addEventListener("click",function(){
    if(toogle.classList.contains("right")){
        toogle.classList.remove("right");
        toogle.classList.add("rail");
    }else{
        toogle.classList.add("right");
        toogle.classList.remove("rail");
    }
   
});

btnRegistrar.addEventListener("click",function(){
    if (txtNombre.value.length ===0) {
        txtAlert.classList.add("txt-alert-visible");
        txtAlert.classList.remove("txt-alert-hidden");
        hiddenAlert.classList.add("div-alert")
        hiddenAlert.classList.add("div-alert")
        hiddenAlert.style.visibility = "visible";
        hiddenAlert.style.opacity = "1"; 
    }
    else{
        txtAlert.classList.remove("txt-alert-visible");
        txtAlert.classList.add("txt-alert-hidden");

    }
     if(txtApellidos.value.length === 0) {
        txtAlertA.classList.add("txt-alert-visible");
        txtAlertA.classList.remove("txt-alert-hidden");
        hiddenAlert.classList.add("div-alert")
        hiddenAlert.classList.add("div-alert")
        hiddenAlert.style.visibility = "visible";
        hiddenAlert.style.opacity = "1";
    }
    else{
        txtAlertA.classList.remove("txt-alert-visible");
        txtAlertA.classList.add("txt-alert-hidden");
    }
    if(typeusuario.value.length === 0) {
        txtAlertT.classList.add("txt-alert-visible");
        txtAlertT.classList.remove("txt-alert-hidden");
    }
    else{
        txtAlertT.classList.remove("txt-alert-visible");
        txtAlertT.classList.add("txt-alert-hidden");   
    }
    if(txtCorreo.value.length === 0) {
        txtAlertC.classList.add("txt-alert-visible");
        txtAlertC.classList.remove("txt-alert-hidden");
    }
    else{
        txtAlertC.classList.remove("txt-alert-visible");
        txtAlertC.classList.add("txt-alert-hidden");    
    }
    if(password.value.length === 0) {
        txtAlertP.classList.add("txt-alert-visible");
        txtAlertP.classList.remove("txt-alert-hidden");    
    }
    else{
        txtAlertP.classList.remove("txt-alert-visible");
        txtAlertP.classList.add("txt-alert-hidden"); 
    }
    if(term.value.length === 0) {
        txtAlertTYC.classList.add("txt-alert-visible");
        txtAlertTYC.classList.remove("txt-alert-hidden");   
    }
    else{
        txtAlertTYC.classList.remove("txt-alert-visible");
        txtAlertTYC.classList.add("txt-alert-hidden");
        hiddenAlert.classList.add("div-alert")
        hiddenAlert.classList.add("div-alert")
        hiddenAlert.style.visibility = "visible";
        hiddenAlert.style.opacity = "1";
    }

});
btnAceptar.addEventListener("click", function () {
hiddenAlert.style.visibility = "hidden";
hiddenAlert.style.opacity = "0";
         
});