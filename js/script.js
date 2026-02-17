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
let soccers = [
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

/**
 * ## generiamo dei numeri random da 1 a 10, per tutti gli oggetti dell'array
 * @param {*} array - inserisci l'array di oggetti
 * @param {*} key - inserisci la chiave dove vuoi aggiungere i valori
 * @returns restituisce un array con l'aggiunta dei numeri randomici
 */
function getRandomNums(array, key) {
    for (let i = 0; i < array.length; i++) {
        let element = Math.floor(Math.random() *10 ) +1;
        array[i][key] = element;
    }
    return array;
}

soccers = getRandomNums(soccers, 'punti');
soccers = getRandomNums(soccers, 'falli')
console.log(soccers)

/**
 * ## filtra un array e restituisce nuovo array con oggetti contenente le due chiavi desiderate
 * @param {array} array - inserisci l'array con gli oggetti
 * @param {key1} key1 - recupera una chiave
 * @param {key2} key2 - recupera seconda chiave
 * @returns restituisce un nuovo array solo con le chiavi nei parametri
 */
function filterArrObj(array, key1, key2) {
    const newArrow = []
    for (let i = 0; i < array.length; i++) {
        const element =
            {
            [key1]: array[i][key1], 
            [key2]: array[i][key2]
            }
        newArrow.push(element);
    }
    return newArrow;
}

const soccersFalli = filterArrObj(soccers, 'nome', 'falli')
console.log(soccersFalli)