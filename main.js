alert('tobinha');
let nomeUsuario = "";
let texto = document.querySelector('#texto');

while(nomeUsuario == "" || nomeUsuario == null){
    nomeUsuario = prompt('Qual tamanho das fezes?');
}

texto.textContent = nomeUsuario;
