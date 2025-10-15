
//dichiariamo una funzione con 2 parametri
//la dichiarazione si fa una volta
function saluta(saluto,nome){
    //alert() è una funzione della libreria standard javascript
    //ha bisogno di una stringa come parametro 
    alert(saluto + " " + nome);
}

//chiamiamo la funzione
//possiamo chiamarla più volte
//saluta("Ciao","Pippo");
//saluta("Hi","John");
//saluta("Buongiorno","prof");


function giveMeADado(){
    let valoreRandomZeroUno = Math.random();
    let valoreZeroCento = valoreRandomZeroUno * 100;
    let valoreArrotond = Math.floor(valoreZeroCento);
    let divRisultato = document.getElementById("risultato");
    divRisultato.textContent = valoreArrotond;
}

function giveMeADadoZeroDieci(){
    let valoreRandomZeroUno = Math.random();
    let valoreZeroCento = valoreRandomZeroUno * 10;
    let valoreArrotond = Math.floor(valoreZeroCento);
    let divRisultatoZeroDieci = document.getElementById("risultatoZeroDieci");
    divRisultatoZeroDieci.textContent = valoreArrotond;
}

let raggio = 50;

let circonferenza = raggio * 2 * Math.PI;




