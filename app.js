let listaDeAmigos = document.getElementById('listaAmigos');
let amigos = [];

function validarNome(amigo) {
    if (amigo === "") {
        alert('Por favor, insira um nome.')
    } else  {
        amigos.push(amigo);  
    }
}

function limparCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}

function listarAmigos() {
    listaDeAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let novoItem = document.createElement('li');
        novoItem.innerHTML = amigos[i];
        listaDeAmigos.appendChild(novoItem);
    }
}

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    validarNome(amigo);
    limparCampo();
    listarAmigos();  
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    let itemResultado = document.createElement('li');
    resultado.appendChild(itemResultado);

    if (amigos.length > 0) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length) 
        
        listaDeAmigos.innerHTML = '';
        itemResultado.innerHTML = `O amigo secreto sorteado é : ${amigos[numeroAleatorio]}`
    } else {
        alert('Por favor, insira amigos antes de iniciar o sorteio.')
    }  
}


