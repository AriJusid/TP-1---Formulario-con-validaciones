var nombreIng = document.getElementById("nombre")
var mailIng = document.getElementById("mail")
var passIng = document.getElementById("contra")
var contra = document.getElementById ("contra")
var mensaje = document.getElementById("mensaje")
var mensaje2 = document.getElementById("mensaje2")
var mensaje3 = document.getElementById("mensaje3")
var mensajeFin = document.getElementById("mensajeFin")
var boton = document.getElementById("submit").disable = false
var completados = 0
const regexNum = /^(?=.*\d)/
const regexStr = /(?=.*[a-zA-Z])/
const regexCant = /.{8,}/



function comprobarNombre() {
    if (nombreIng.value.length < 3){
        mensaje.innerHTML = "Debe tener al menos 3 caracteres"
        desactivarSubmit()
    }
    else{
        mensaje.innerHTML = ""
        completados++
    }
}

function comprobarMail() {

    if (!mailIng.value.includes("@")){
        mensaje2.innerHTML = "Mail inválido"
        desactivarSubmit()
    }

    else{
        mensaje2.innerHTML = ""
        completados++
    }
    
}

function comprobarConstraseña() {
  
    
if (regexCant.test(contra.value)) {
    mensaje3a.innerHTML = ""
    console.log("funciona3")
  } else {
    mensaje3a.innerHTML = "Debe tener al menos 8 caracteres"
        console.log("funciona1")
        desactivarSubmit()
        completados++
  }
  if (regexNum.test(contra.value)) {
    mensaje3b.innerHTML = ""
    console.log("funciona3")
  } else {
    mensaje3b.innerHTML = "Debe tener al menos 1 número"
        console.log("funciona1")
        desactivarSubmit()
        completados++
  }
  if (regexStr.test(contra.value)) {
    mensaje3c.innerHTML = ""
    console.log("funciona3")
  } else {
    mensaje3c.innerHTML = "Debe tener al menos 1 letra"
        console.log("funciona1")
        desactivarSubmit()
        completados++
  }
}

function confirmarContraseña(){
    if (contra2.value != contra.value){
        mensaje4.innerHTML = "Las contraseñas no coinciden"
        desactivarSubmit()
        
    }
    else{
        mensaje4.innerHTML = ""
        completados++
    }

}

function desactivarSubmit(){

    boton.disable = true

}

function completado(){
    if (completados = 6){
        boton.disable = false
    }
    else{
        boton.disable = true
    }
}

function enviarForm(){
    if (boton.disable = false){
    mensajeFin.innerHTML="Enviado!!!"
    }
    alert("Enviado con éxito!")
}

