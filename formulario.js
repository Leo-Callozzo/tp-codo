//Validacion de formulario

let enviar = document.querySelector(".boton")

enviar.addEventListener("click", function(){
    let mail = document.getElementById("email").value;
    let mensaje = document.getElementById("mensajeEnviado");
    let msjError = document.getElementById("mensajeError");

         if (mail.indexOf('@')>=(0)){
            //console.log("ok");
            formulario.reset();
            mensaje.classList.add("mostrar");
            msjError.classList.remove("mostrar");
           
        }else{
            console.log("no tiene @");
            mensaje.classList.remove("mostrar");
            msjError.classList.add("mostrar");
           
         }
    
}) 
