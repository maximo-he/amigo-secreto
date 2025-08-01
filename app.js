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
}
