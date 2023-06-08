let txtNombre = document.getElementById("txtNombre");
let txtApellidos = document.getElementById("txtApellidos");
let txtCorreo = document.getElementById("txtCorreo");
let password = document.getElementById("password");
let selectType = document.getElementById("selectType");
let btnRegistrar = document.getElementById("btnRegistrar");
let btnMistake = document.getElementById("btnRegistrar");
let hiddenAlert = document.getElementById("hiddenAlert");
let hiddenBreack = document.getElementById("hiddenBreack");
let form = document.getElementById("form");
btnRegistrar.addEventListener("click", function(){
    if (txtNombre.value.length === 0){
        alert("El nombre del usuario, campo obligatorio")
        hiddenBreack.style.visibility = "visible";
        hiddenBreack.style.opacity = "1";
        btnAceptar.addEventListener("click", function(){
            hiddenBr.style.visibility = "hidden";
            hiddenBreack.style.opacity= "0";
        });   
        
    }
    else if(txtApellidos.value.length === 0){
        alert("Campo obligatorio para registrarse!");

    }
    else if(txtCorreo.value.length === 0){
        alert("Campo obligatorio para registrarse!");

    }
    else if(password.value.length === 0){
        alert("Campo obligatorio para registrarse!");

    }
    else if(selectType.value.length === 0){
        alert("Campo obligatorio para registrarse! Por favor complete la información");

    }
    else{
        // alert("Bienvenido");
        hiddenBreack.style.visibility = "visible";
        hiddenBreack.style.opacity = "1";
        btnMistake.addEventListener("click", function(){
            form.submit()
        })

    }
});
btnMistake.addEventListener("click", function(){
    hiddenBreack.style.visibility = "hidden";
    hiddenBreack.style.opacity= "0";
});