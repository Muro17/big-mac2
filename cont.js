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
}

const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date();
let tempoObjetivo1 = new Date ('2030-1-1T23:59:00');
let tempoObjetivo2 = new Date ('2030-1-1T20:05:00');
let tempoObjetivo3 = new Date ('2030-1-1T15:30:00');
let tempoObjetivo4 = new Date ('2030-1-1T12:00:31');

let tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


for(let i = 0; i < contadores.length; i++) {
contadores[i].textContent = calculaTempo(tempos[i]);
}

function calculaTempo(tempoObjetivo){
let tempoFinal = tempoObjetivo - tempoAtual;

let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;

return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos. ";

}