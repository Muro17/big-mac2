const botinhos = document.querySelectorAll('.objetivos');


for (let x = 0; x<botinhos.length; x++){
    console.log(x)
    botinhos[x].onclick = function() { 
for(let y = 0; y< botinhos.length; y++){ 
    botinhos[y].classList.remove('ativo');
}
        botinhos[x].classList.add('ativo');

    }
    botinhos[x].classList.remove('ativo');
}