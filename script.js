var nombreIng = document.getElementById("nombre")
var mailIng = document.getElementById("mail")
var passIng = document.getElementById("contra")
var contra = document.getElementById ("contra")
var mensaje = document.getElementById("mensaje")
var mensaje2 = document.getElementById("mensaje2")
var mensaje3 = document.getElementById("mensaje3")



function comprobarNombre() {
    if (nombreIng.value.length < 3){
        mensaje.innerHTML = "Debe tener al menos 3 caracteres"
        console.log("funciona")
    }
    else{
        mensaje.innerHTML = ""

    }
}

function comprobarMail() {

    if (!mailIng.value.includes("@")){
        mensaje2.innerHTML = "Mail inválido"
        console.log("funciona")
    }

    else{
        mensaje2.innerHTML = ""

    }
    
}

function comprobarConstraseña() {
    if (contra.value.length < 8){
        mensaje3.innerHTML = "Debe tener al menos 8 caracteres"
        console.log("funciona1")
    }
    else{
        mensaje3.innerHTML = ""
        console.log("funciona3")
    }

    console.log(contra.value[i])
    console.log(isNaN(contra.value[i]))
    
    for(var i = 0; i < contra.value.length; i++){
        if(isNaN(contra.value[i])){
        mensaje3.innerHTML += "Debe tener al menos 1 número"
        console.log("funciona2 un num")
        }
        else{
            mensaje3.innerHTML -= "Debe tener al menos 1 número"
            console.log("funciona2 esta ok")
        }
    
    }

  
}


