alert('tobinha');
let nomeUsuario = "";
let texto = document.querySelector('#texto');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual tamanho das fezes?');
}

if(nomeUsuario == null){
    #texto.textContent = 'normal';
} else{
    texto.textContent = nomeUsuario;
}


