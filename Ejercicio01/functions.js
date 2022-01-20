let listPrimes, numberA, numberB, smsWarning;

export const readValues = () => {

    numberA = document.querySelector('#inputNumberA');
    numberB = document.querySelector('#inputNumberB');
    smsWarning = document.querySelector('#smsWarning')

    const valueIntNumberA = parseInt(numberA.value)
    const valueIntNumberB = parseInt(numberB.value)

    if (valueIntNumberA < valueIntNumberB) {
        getPrimes(valueIntNumberA, valueIntNumberB);
        smsWarning.innerHTML = '';
    }
    else {
        smsWarning.innerHTML = 'Porfavor!, el primer número ingresado tiene que ser menor que el segundo número.';
        cleanInput()

    }
}


function getPrimes(valueIntNumberA, valueIntNumberB) {

    let arrayPrimes = [];

    for (valueIntNumberA; valueIntNumberA <= valueIntNumberB; valueIntNumberA++) {
        let prime = true;
        for (let divisor = 2; divisor < valueIntNumberA; divisor++) {
            if (valueIntNumberA % divisor === 0) {
                prime = !prime;
                break;
            }
        }
        if (prime) {
            if (valueIntNumberA != 1) {
                arrayPrimes.push(valueIntNumberA);
            }
        }
    }

    printListPrimes(arrayPrimes);
    cleanInput();
    arrayPrimes = [];

}

function printListPrimes(arrayPrimes) {

    listPrimes = document.querySelector('#txtList')
    listPrimes.innerHTML = arrayPrimes;

}

function cleanInput() {

    numberA.value = "";
    numberB.value = "";

}