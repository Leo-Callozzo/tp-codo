//Validacion de formulario

let enviar = document.querySelector(".boton")

enviar.addEventListener("click", function(){
    let mail = document.getElementById("email").value;
    let mensaje = document.getElementById("mensajeEnviado");
    let msjError = document.getElementById("mensajeError");
    

         
        if(validateEmail(mail))
        {    
            formulario.reset();
            mensaje.classList.add("mostrar");
            msjError.classList.remove("mostrar");
           
        }else{
            console.log("no tiene @");
            mensaje.classList.remove("mostrar");
            msjError.classList.add("mostrar");
           
         }
    
}) 



function validateEmail(email){
                
	
	var validEmail =  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	
	if( validEmail.test(email) ){
		
		return true;
	}else{
		
		return false;
	}
} 
