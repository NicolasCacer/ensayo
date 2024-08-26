const inputCorreo = document.getElementById('correo');
const resultado = document.getElementById('resultado');
const boton =document.getElementById('botonduro');
const contMain =document.getElementById('container-principal');
const boton2=document.getElementById('botonduro2');
const contSec=document.getElementById('nuevoBloque');

window.addEventListener('load', function() {
    contSec.classList.add('d-none')
  });

boton.addEventListener('click', function() {
    if (resultado.classList.contains('exito')){
        contMain.classList.add('d-none')
        contSec.classList.remove('d-none')
        const correito = inputCorreo.value; // Obtener el valor del correo electrónico
        const strongElement = document.getElementById('fuertecito'); // Seleccionar el elemento strong dentro del párrafo
        strongElement.textContent = correito; // Asignar el valor del correo electrónico al contenido del elemento strong
    }    
});
boton2.addEventListener('click', function(){
    contMain.classList.remove('d-none')
    contSec.classList.add('d-none')

});

inputCorreo.addEventListener('input', function() {
    const correo = inputCorreo.value;
    if (validarCorreo(correo)) {
        resultado.textContent = 'Valid email';
        inputCorreo.classList.remove('errorbackground')
        resultado.classList.remove('error');
        resultado.classList.remove('d-none');
        resultado.classList.add('exito');
        inputCorreo.classList.add('exitobackground')
    } else {
        resultado.textContent = 'Valid email required';
        inputCorreo.classList.remove('exitobackground')
        resultado.classList.remove('exito');
        resultado.classList.remove('d-none');
        resultado.classList.add('error');
        inputCorreo.classList.add('errorbackground')
        
    }
    if (correo.trim() === '') { // Verifica si el valor del input está vacío
        // Restablece el estado normal del input y oculta el resultado
        inputCorreo.classList.remove('errorbackground', 'exitobackground');
        resultado.classList.remove('error', 'exito',);
        resultado.classList.add('d-none');
        }

});

function validarCorreo(correo) {
    // Expresión regular para validar un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}