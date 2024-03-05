alert('tobinha');
let nomeUsuario = "";
let anterior = document.querySelector('#texto');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual tamanho das fezes?');
}

if(nomeUsuario == null){
    anterior.textContent = 'anão';
} else{
    anterior.textContent = nomeUsuario;
}


