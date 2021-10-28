/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

/*
1.Creo un array per memorizzare i numeri dell'utente
2.Sommo tutti i numeri
3.Stampo il risultato
*/

const userArr = [];
for (let i = 0; userArr.length < 10; i++){
    let userNum = parseInt(prompt('scegli un numero:'));
    userArr.push(userNum);
}

let userArrSum = 0;
for(let i = 0; i < userArr.length; i++){
    userArrSum += userArr[i]
}

document.getElementById('results').innerHTML = `La somma dei numeri che hai inserito &egrave: ${userArrSum}`;