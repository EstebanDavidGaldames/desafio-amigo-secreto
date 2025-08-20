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
    mostrarListaDeAmigos();

    return
}

//Función para limpiar el input
function limpiarInput() {

    document.querySelector('#amigo').value = '';
    return
}

//Función para mostrar los nombres de amigos ingresados
function mostrarListaDeAmigos() {

    //Capturamos la lista de html en la variable listaDeAmigosHtml
    let listaDeAmigosHtml = document.getElementById('listaAmigos');
    //Limpiamos la lista
    listaDeAmigosHtml.innerHTML = '';

    //Recorremos la lista amigos y creamos los elementos <li> en html
    for (let i = 0; i<amigos.length ; i++) {

        //Creamos los elementos de la lista
        let amigoIngresado = document.createElement('li');
        let texto = document.createTextNode(amigos[i]);
        amigoIngresado.appendChild(texto);

        //Los agregamos a la lista html
        listaDeAmigosHtml.appendChild(amigoIngresado);
    }

}

//Función para sortear amigos
function sortearAmigo() {

    //Validar que la lista amigos no esté vacía
    if (amigos.length == 0) {
        alert('No se han añadido amigos para sortear.');
    } else {
        if (amigos.length == 1) {
            alert('Sólo añadió un amigo. Ingrese más de uno para el sorteo.');
        } else {

            //Generar número aleatorio para obtener el índice del amigo sorteado
            
            let i = Math.floor(Math.random()*amigos.length);
            console.log(i);

            //Obtengo el nombre del amigo sorteado
            let amigoSecreto = amigos[i];
            console.log(amigoSecreto);

            //Mostramos el resultado
            let resultadoHtml = document.getElementById('resultado');
            resultadoHtml.innerHTML = amigoSecreto;

        }
    }

}
