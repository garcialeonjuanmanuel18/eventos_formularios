//RECOGEMOS ELEMENTOS
const boton = document.getElementById("boton");
const parrafo2 = document.getElementById("parrafo2");


//FUNCION
function sumar(){

    parrafo2.textContent++;
    
}

//LISTENER
boton.addEventListener("click", sumar);
