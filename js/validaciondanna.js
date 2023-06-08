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

btnRegistrar.addEventListener("click", function () {
    if (txtNombre.value.length === 0) {
        btnRegistrar.addEventListener("click",function(){
            hiddenAlert.classList.add("div-alert")
            hiddenAlert.style.visibility = "visible";
            hiddenAlert.style.opacity = "1";
           });
       
    }
    else if (txtApellidos.value.length === 0) {
       btnRegistrar.addEventListener("click",function(){
        hiddenAlert.classList.add("div-alert")
       });
    } else if (txtCorreo.value.length === 0) {
        btnRegistrar.addEventListener("click",function(){
            hiddenAlert.classList.add("div-alert")
           });
    } else if (typeusuario.value.length === 0) {
        btnRegistrar.addEventListener("click",function(){
            hiddenAlert.classList.add("div-alert")
           });
    } else if (passwordvalue.length === 0) {
        btnRegistrar.addEventListener("click",function(){
        hiddenAlert.classList.add("div-alert")
       });
 
        
    } if ((txtNombre.value.length !== 0)&&(txtApellidos.value.length!==0)&&(txtCorreo.value.length !== 0)&&(txtTipoUsuario.value.length !== 0)&&(txtTipoUsuario.value.length !== 0)) {
        hiddenAlert.style.visibility = "visible";
        hiddenAlert.style.opacity = "1";
        btnAceptar.addEventListener("click",function(){
         forms.submit()
        })
     }else if ((nombreUsuario.value.length !== 0)&&(correo.value.length===0)&&(contaseña.value.length !== 0)) {
       hiddenAlert.style.visibility = "hidden";
       hiddenAlert.style.opacity = "0.0";
       btnAceptar.addEventListener("click",function(){
        forms.submit()
       })
    }
    else {
        btnRegistrar.addEventListener("click",function(){
            hiddenBreack.classList.add("div-breack")
            });
        btnRegistrar.addEventListener("click",function(){
            hiddenBreack.classList.add("div-breack")
            });
        btnRegistrar.addEventListener("click",function(){
            hiddenBreack.classList.add("div-breack")
            });
    }
    
    

});

btnAceptar.addEventListener("click", function () {
    hiddenAlert.style.visibility = "hidden";
    hiddenAlert.style.opacity = "0";
})