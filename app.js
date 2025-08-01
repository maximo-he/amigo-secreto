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
