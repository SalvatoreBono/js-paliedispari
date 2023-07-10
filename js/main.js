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