const botinhos = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');


for (let x = 0; x<botinhos.length; x++){
    console.log(x)
    botinhos[x].onclick = function() { 
for(let y = 0; y< botinhos.length; y++){ 
    botinhos[y].classList.remove('ativo');
    textos[y].classList.remove('ativa');
}
        botinhos[x].classList.add('ativo');
        textos[x].classList.add('ativa');
    }
    botinhos[x].classList.remove('ativo');
}

const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date();
let tempoObjetivo1 = new Date ('Fri Dec 31 3999 23:59:59');
let tempoFinal = tempoObjetivo - tempoAtual;

contadores[0].textContent = tempoFinal;