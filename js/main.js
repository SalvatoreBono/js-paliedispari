/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */




//Creare delle select con la scelta pari e dispari e collegarlo al js
//Pari e dispari
const oddEven = document.getElementById("even-odd");

//far inserire un un numero da 1 a 5 e collegarlo al js
//Numero da 1 a 5
const num = document.getElementById("num");

//Pulsante generatore
const btnGenerator = document.getElementById("generator");

//Creare una funzione che genera numeri random da 1 a 5
//Funzione che genera numeri random da 1 a 5
function generatorBotNumber() {
    return Math.floor(Math.random() * 5) + 1
}
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function oddEvenSum(number) {
    if (number % 2 == 0) {
        console.log("Pari")
    }
    else {
        console.log("Dispari")

    }
    return number
}
btnGenerator.addEventListener("click", function () {
    const chooseOddEven = oddEven.value;
    const userNumber = num.value;

    //Sommare i numeri
    let sum = 0
    sum += parseInt(userNumber) + generatorBotNumber();
    document.getElementById("sum").innerHTML = sum

    //Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    oddEvenSum(sum)
    if (userNumber > 5) {
        alert("Inserisci un numero minore o uguale a 5")
        location.reload();
    }
    //Dichiariamo chi ha vinto.
    if (chooseOddEven == 1 && sum % 2 == 0) {
        console.log("Hai Vinto")
    }
    else if (chooseOddEven == 2 && sum % 2 != 0) {
        console.log("Hai Vinto")
    } else {
        console.log("Hai Perso")
    }
})


/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (una parola che si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto) */

const inputWord = document.getElementById("input-word");
const inputBtnGeneratorWord = document.getElementById("btn-word")

//Creare una funzione per capire se la parola inserita è palindroma */
function checkPalindrom(word) {
    //la parola che digitiamo al click del btn va in queste 2 array
    //            0123
    const array1 = [];
    const array2 = [];

    //"let i = word.length - 1;" = Siccome la array parte da 0  devo mettere -1 per mettere in parità le lenght con le array così che venga rilevata la lettera in posizione "ultima della array"
    // i >= 0; = devo specificare ">=" così che venga rilevato anche il numero 0
    //finchè "i" è ">= 0; decrementa fino al risultato voluto"
    //legge l'array da destra verso sinistra
    for (let i = word.length - 1; i >= 0; i--) {
        array2.push(word[i]);
    }
    //i=0 deve arrivare allo stesso numero della variabile word.length, e il ciclo si incrementerà finchè "i" sarà uguale a word.length
    //finche "i" è minore di word.length incrementà
    //legge l'array da sinistra verso destra
    for (let i = 0; i < word.length; i++) {
        array1.push(word[i]);
        //avviene il confronto delle due array
        if (array1[i] === array2[i]) {
            console.log("palindromo")
        } else {
            console.log("non palindromo")
        }
    }

}
inputBtnGeneratorWord.addEventListener("click", function () {
    //Chiedere all’utente di inserire una parola
    const word = inputWord.value
    checkPalindrom(word)
})