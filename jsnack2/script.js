/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*
1.Creo due variabili dove l'utente inserirà due parole
2.Controllo quale sia più lunga
3.Stampo la più corta
4.Stampo la più lunga
*/

const parola1 = prompt("scegli una parola:");
const parola2 = prompt("scegline un'altra:");


if(parola1.length > parola2.length){

    document.getElementById('results').innerHTML = 
        `${parola2} &egrave; la parola pi&ugrave; piccola&period; ${parola1} &egrave; la parola pi&ugrave; lunga`;
}else if (parola1.length < parola2.length) {

    document.getElementById('results').innerHTML = 
        `${parola1} &egrave; la parola pi&ugrave; piccola&period; ${parola2} &egrave; la parola pi&ugrave; lunga`;
} else if (parola1.length === parola2.length){

    document.getElementById('results').innerHTML = 
        `Le parole ${parola1} e ${parola2} sono lunghe uguali`;
}