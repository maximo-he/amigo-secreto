let amigos = []
let indiceAleatorio = 0;
let amigoSorteado = 0;

function agregarAmigo() {
    //captura de nombre y clear texto inicial (trimp)
    let capturaNombreAmigo = document.getElementById('amigo').value.trim();
  
    //validación entrada
    if (capturaNombreAmigo === "") {
        alert('Por favor, ingresa un nombre');
        return;
    }
    //añadir nombre al array
    amigos.push(capturaNombreAmigo);
  
    //clear campo
    document.getElementById('amigo').value = "";
  
    //mostrar lista agregada
    mostrarListaAmigos(),

}

function mostrarListaAmigos() {
    //llamar la lista con su id
    let lista = document.getElementById("listaAmigos");

    //clear lista existente (evita duplicación)
    lista.innerHTML = ""

    //iteración con el arreglo y creación de lista
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    //validar que la lista no esté vacía
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    //genera nombre aleatorio
    indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtener nombre sorteado
    amigoSorteado = amigos[indiceAleatorio];

    //mostrar resultado
    document.getElementById("sortear").style.display = "none";
    document.getElementById("amigoMostrado").innerHTML = 'El amigo seleccionado es: ${amigoSorteado}';

    //mostrar botón de reinicio
    document.getElementById("reiniciar").style.display = "block";
}

function reiniciarSorteo() {
    //reiniciar variables y lista de amigos
    amigos = [];
    indiceAleatorio = 0;
    amigoSorteado = 0;

    //limpiar lista y el resultado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("sortear").style.display = "block";
    document.getElementById("amigoMostrado").innerHTML = "";

    //ocultar botón de inicio
    document.getElementById("reiniciar").style.display = "none";

}
