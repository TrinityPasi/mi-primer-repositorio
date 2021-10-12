let form = document.querySelector('form');
let fusuario = document.getElementById('usuario');
let fclave = document.getElementById('clave');
const submit = document.getElementById('submit');
var para = document.querySelector('p');
form.onsubmit = function(e) {
    if (fusuario.value === '' || fclave.value === ''){
        alert("Introduzca una dirección de correo válida.");}
    else if (fusuario.value !== '' || fclave.value === ''){
        alert("Introduzca la clave.");}
    else 
        e.preventDefault();
        para.textContent = 'Comprueba que ambos campos sean correctos.';
    
}
