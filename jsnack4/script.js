/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

/*
1.Creo un array con i nomi degli invitati
2.chiedo all'utente di inserire il suo nome
3.confrontare tutti i nomi con il nome utente
4.dire all'utente se è in lista
*/
const invitedArr = ["Marco", "Martina", "Roberta", "Giuseppe", "Maria", "Anna", "Antonio", "Giacomo", "Ilaria"];

const userName = prompt("qual è il tuo nome?");
let x = false;
for(let i = 0; i < invitedArr.length; i++) {
    if(userName === invitedArr[i]){
        x = true;
    }
}

if(x === true){
    document.getElementById('results').innerHTML = `Sei presente nella lista`;
}else {
    document.getElementById('results').innerHTML = `Non sei presente nella lista`;
}