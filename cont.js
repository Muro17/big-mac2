const botinhos = document.querySelectorAll('.objetivos');


for (let x = 0; x<botinhos.length; x++){
    console.log(x)
    botinhos[x].onclick = function() { 
        classList.add('ativo');
        
    }
}