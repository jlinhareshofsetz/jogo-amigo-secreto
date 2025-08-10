// Variáveis globais
const inputAmigo = document.querySelector('#amigo');
const listaHTML = document.querySelector('#listaAmigos');
const resultadoHTML = document.querySelector('#resultado');

let listaDeAmigos = [];

// Função para limpar input e focar
function limparCampo() {
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Adicionar amigo à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim();

    if (!nome) {
        exibirMensagem('Por favor, insira um nome.', 'erro');
        return;
    }

    if (listaDeAmigos.some(a => a.toLowerCase() === nome.toLowerCase())) {
        exibirMensagem('Este nome já foi adicionado.', 'erro');
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    limparCampo();
    resultadoHTML.innerHTML = '';
}

// Atualizar lista na tela
function atualizarLista() {
    listaHTML.innerHTML = '';
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

// Sortear amigo
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        exibirMensagem('Adicione pelo menos dois amigos antes de sortear.', 'erro');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const sorteado = listaDeAmigos[indiceSorteado];

    resultadoHTML.innerHTML = `<li>O amigo sorteado foi: <strong>${sorteado}</strong></li>`;
    listaDeAmigos.splice(indiceSorteado, 1);
    atualizarLista();
    limparCampo();
}

// Exibir mensagens no DOM
function exibirMensagem(texto, tipo = 'info') {
    resultadoHTML.innerHTML = `<li class="${tipo}">${texto}</li>`;
}

// Limpar lista de amigos
function limparLista() {
    listaDeAmigos = [];
    atualizarLista();
    resultadoHTML.innerHTML = '';
    limparCampo();
}

// Adicionar pelo Enter
inputAmigo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') adicionarAmigo();
});
