// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNumerosSorteados = [];

function agregarAmigo(){
    limpiarResultado();
    let amigo = document.getElementById('amigo').value;

    let listaAmigos = document.getElementById('listaAmigos');

    if (listaNumerosSorteados.includes(amigo)) {
        alert('El amigo ya fue agregado');
        limpiarCuadro();
    } else {
        listaNumerosSorteados.push(amigo);
        listaAmigos.innerHTML = listaNumerosSorteados.join('<br>');
        limpiarCuadro();
    }
}

function limpiarLista() {
    listaNumerosSorteados = [];
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
}

function limpiarCuadro() {
    document.querySelector('#amigo').value = '';
}

function limpiarResultado() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}


function sortearAmigo() {
    if (listaNumerosSorteados.length === 0) {
        alert('La lista está vacía');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaNumerosSorteados.length);
    let amigoAleatorio = listaNumerosSorteados[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'El amigo sorteado es:'+amigoAleatorio;
    limpiarLista();
}