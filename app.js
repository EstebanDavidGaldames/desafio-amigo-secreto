// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista de amigos
let amigos = [];
let nombreAmigo = '';

//Función para agregar amigos
function agregarAmigo() {

    //Capturamos el input en la variable nombreAmigo
    //Utilizamos .trim() para eliminar espacios al inicio y al final
    nombreAmigo = (document.getElementById('amigo').value).trim();

    //Validamos el input para que no sea un campo vacío
    if (nombreAmigo == '') {
        alert('Ingrese un nombre');
    } else {
        //Agregamos el nombre ingresado en la variable "nombreAmigo" a nuestra lista "amigos"
        amigos.push(nombreAmigo);
    }

    console.log(nombreAmigo);
    console.log(amigos);

    //Limpiamos el input con la función de limpieza
    limpiarInput();

    return
}

//Función para limpiar el input
function limpiarInput() {

    document.querySelector('#amigo').value = '';
    return
}
