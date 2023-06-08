let password = document.getElementById("password");
let viewAlerta = document.getElementById("viewAlerta");
let btnAceptar = document.getElementById("btnAceptar");
let btnEnviar2 = document.getElementById("btnEnviar2");
let btnAceptar2 = document.getElementById("btnAceptar2")
let modalAlert = document.getElementById("modalAlert");
let modalAlert2 = document.getElementById("modalAlert2");
let closed2 = document.getElementById("closed2");
let closed = document.getElementById("closed");
// viewAlerta.addEventListener("click", function () {

// if (password.value.length == 0){
//     console.log("PASS: ", password.value.length)
//   viewAlerta.addEventListener("click",function(){
//             modalAlert2.classList.remove("alert-hidden2")
//             });
//     closed2.addEventListener("click",function(){
//             modalAlert2.classList.add("alert-hidden2") 
//             });
//     btnAceptar2.addEventListener("click",function(){
//             modalAlert2.classList.add("alert-hidden2")
//             }); 
// }
// else {
//   viewAlerta.addEventListener("click",function(){
//         modalAlert.classList.remove("alert-hidden")
//         });
//     closed.addEventListener("click",function(){
//         modalAlert.classList.add("alert-hidden")
//         });
//     btnAceptar.addEventListener("click",function(){
//         modalAlert.classList.add("alert-hidden")
//         });
// }
// });

viewAlerta.addEventListener("click", function () {
    if (password.value.length == 0) {
        console.log("PASS: ", password.value.length)
        modalAlert2.classList.remove("alert-hidden2")

    } else if (password.value.length > 0) {
        console.log("PASS X: ", password.value.length)
        modalAlert.classList.remove("alert-hidden")
    }

})

closed.addEventListener("click", function(){
    modalAlert2.classList.add("alert-hidden2")
    modalAlert.classList.add("alert-hidden")
})
closed2.addEventListener("click", function(){
    modalAlert2.classList.add("alert-hidden2")
    modalAlert.classList.add("alert-hidden")
})
btnAceptar.addEventListener("click", function(){
    modalAlert2.classList.add("alert-hidden2")
    modalAlert.classList.add("alert-hidden")
})
btnAceptar2.addEventListener("click", function(){
    modalAlert2.classList.add("alert-hidden2")
    modalAlert.classList.add("alert-hidden")
})

