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
let tempoObjetivo1 = new Date ('Dec 31 3999 23:59:59');
let tempoObjetivo2 = new Date ('Oct 11 6010 20:05:00');
let tempoObjetivo3 = new Date ('Apr 27 2024 15:44:00');
let tempoObjetivo4 = new Date ('Sep 11 5998 23:59:59');

let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;

contadores[0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos. ";