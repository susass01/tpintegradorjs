//Agregar el evento al boton resumen
document.getElementById("resumen").addEventListener("click",function(){

//capturamos los valores de cantidad y categoria

const cantidad = parseInt(document.getElementById("cantidad").value);
const categoria = parseInt(document.getElementById("inputCategoria").value);

//total a pagar

let total = 0;

switch(categoria){
    //estudiante 80% de descuento
    case 1:
        total = cantidad * 200 * 0.2;
        break;
    //trainee 50% de descuento
    case 2:
        total = cantidad * 200 * 0.5;
        break;
    //junior 15% de descuento
    case 3:
        total = cantidad * 200 * 0.85;
        break;
    default:
        total = cantidad * 200;
        break;
}
// Mostrar el contenido de la sección "Total a Pagar"
document.getElementById("total").textContent = total 
});

// Reset con el boton borrar
document.getElementById("borrar").addEventListener("click", function () {
    // Restablecer los campos
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("inputCategoria").value = 0;
    document.getElementById("total").textContent = "0";
});