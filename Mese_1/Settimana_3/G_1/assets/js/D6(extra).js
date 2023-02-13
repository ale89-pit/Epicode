// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function giveMeRandom(n) {
    var array1 = [];
    for (i = 0; i < n; i++) {
        array1.push(Math.floor(Math.random() * 11));
    }
    return array1;
}
console.log(giveMeRandom(6));
function checkArray() {
    
        giveMeRandom(7).forEach(function (element) {
            if (element > 5) {
                return ` il valore ${element} è maggiore di 5`
            } else {
                return ` ${element} non è maggiore di 5`
            }
        })
    }
    console.log(checkArray());
    /* EXTRA 2
     Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
     Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
    */

    /* SCRIVI QUI LA TUA RISPOSTA */
    var shoppingCart = [
        {
            price: 15,
            name: 'boh',
            id: 0001,
            quantity: 3,

        },
        {
            price: 200,
            name: 'due',
            id: 0002,
            quantity: 2,

        },
        {
            price: 128,
            name: 'nonloso',
            id: 0003,
            quantity: 5,

        }
    ]


    console.log(shoppingCartTotal());


    function shoppingCartTotal() {

        var totale = 0;
        shoppingCart.forEach(function (element) {
            totale += element.price * element.quantity;

        })
        return ` il totale da pagare è ${totale}`;
    }




    /* EXTRA 3
     Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
     Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
    */

    /* SCRIVI QUI LA TUA RISPOSTA */
    function addToShoppingCart() {
        shoppingCart.push({
            price: 35,
            name: 'abc',
            id: 0004,
            quantity: 6,

        })
    }
    addToShoppingCart();
    console.log(shoppingCart.length);
    console.log(shoppingCart);
    /* EXTRA 4
     Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
     Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
    */

    /* SCRIVI QUI LA TUA RISPOSTA */
    function maxShoppingCart() {
        var max = shoppingCart[0].price;

        shoppingCart.map((element) => {
            if (element.price > max) {
                max = element;

            }

        })
        return `l'articolo pi costoso è ${max.name} e costa ${max.price}`;
    }
    console.log(maxShoppingCart())
    /* EXTRA 5
     Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
     Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
    */

    /* SCRIVI QUI LA TUA RISPOSTA */

    /* EXTRA 6
     Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
     La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
    */

    /* SCRIVI QUI LA TUA RISPOSTA */

    /* EXTRA 7
    Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
    */

    /* SCRIVI QUI LA TUA RISPOSTA */

    /* EXTRA 8
     Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
    */

    /* SCRIVI QUI LA TUA RISPOSTA */

    /* EXTRA 9
     Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
     La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
    */

    /* SCRIVI QUI LA TUA RISPOSTA */

    /* EXTRA 10
     Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
    */

    var date1 = new Date(2023, 01, 1);
    console.log(diffDay(date1));
    function diffDay(date1) {
        let today = new Date();
        let diff = today - date1;
        diff = Math.floor(diff / 1000 / 60 / 60 / 24);

        return diff;
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
