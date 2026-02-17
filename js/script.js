// SNACK 1

// dichiarazione di array con oggetti
const bikes = [
    {
        nome: 'bike-1',
        peso: 12
    },
    {
        nome: 'bike-2',
        peso: 8
    },
    {
        nome: 'bike-3',
        peso: 15
    },
    {
        nome: 'bike-4',
        peso: 5
    },
    {
        nome: 'bike-5',
        peso: 9
    }
]

/**
 * ## filtra un array di oggetti, cercando il valore più piccolo della chiave che si passa
 * @param {array} array - inserisci array contenenti gli oggetti
 * @param {*} key - inserisci la chiave che vuoi paragonare
 * @returns restituisce un ogetto
 */
function getSmallerValueByKey(array, key) {
    let index = 0;
    let element = array[0][key];
    for (let i = 0; i < array.length; i++) {
        if (element > array[i][key]) {
            element = array[i][key];
            index = i;
        }
    }
    return array[index];
}

const smallerValueByKey = getSmallerValueByKey(bikes, 'peso');
console.log(smallerValueByKey);

// SNACK 2

// dichiarazione di array con oggetti
const soccers = [
    {
        nome: 'Angelo',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Antonio',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Carmen',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Dennis',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Lorenzo',
        punti: 0,
        falli: 0
    }
]

console.log(soccers)