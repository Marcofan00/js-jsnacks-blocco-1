/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/* 1.Faccio inserire due numeri dall'utente
   2.Il valore più alto viene stampato
*/

const firstNum = parseInt(prompt("scegli un numero intero:"));
const secondNum = parseInt(prompt("scegli un numero intero:"));

if(firstNum > secondNum){
    document.getElementById('results').innerHTML = firstNum;
}else {
    document.getElementById('results').innerHTML = secondNum;
}