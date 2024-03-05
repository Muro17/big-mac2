alert('tobinha');
let nomeUsuario = "";
let texto = document.querySelector('anterior');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual tamanho das fezes?');
}

if(nomeUsuario == null){
    anterior.textContent = 'normal';
} else{
    anterior.textContent = nomeUsuario;
}


