
//RECOGEMOS ELEMENTOS
const parrafo = document.getElementById("parrafo");

//FUNCION
function cambiarTexto(){
    if(parrafo.textContent === "ENCENDIDO"){
    parrafo.textContent = "APAGADO";
    }
    else{
        parrafo.textContent = "ENCENDIDO";
    }
    
}

//LISTENER
parrafo.addEventListener("click", cambiarTexto);

