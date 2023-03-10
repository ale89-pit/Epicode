/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var areaDelRettangolo;

function area(a, b) {
  areaDelRettangolo = a * b;
}
console.log(area(11, 12));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {
  if (a === b) {
    somma = (a + b) * 3;
    return somma;
  } else {
    somma = a + b;
    return somma;
  }
}
console.log(crazySum(4, 4));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("esercizio 3");
let x = 10; // (Math.floor(Math.random()*100));

const crazyDiff = () => {
  console.log(x);
  let diffAsso = Math.abs(x - 19);
  console.log(diffAsso);
  if (x > 19) {
    diffAsso = diffAsso * 3;
    console.log(diffAsso);
    return diffAsso;
  } else {
    return diffAsso;
  }
};

crazyDiff();
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n > 20 && n <= 100) || n == 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(10));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = function (_string) {
  if (_string.startsWith("epicode")) {
    return _string;
  } else {
    return " EPICODE " + _string;
  }
};

console.log(epify("ciao mamma"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
  if (n > 0) {
    if (n % 3 == 0 && n % 7 == 0) {
      return "Numero divisibile sia per 3 che 7";
    } else if (n % 7 == 0) {
      return " numero divisibile per 7";
    } else if (n % 3 == 0) {
      return "Numero divisibile per 3 ";
    } else {
      return "non divisibile per 3 o 7";
    }
  }
}

console.log(check3and7(21));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = (str) => {
  let strArray = str.split("");

  strArray.reverse();

  final = strArray.join(" ");
  console.log(final);
  return final;
};

reverseString("daje tutta");
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
const upperFirst = (_str) => {
  upperArray = _str.split(" ");
  let array5 = [];
  for (i = 0; i < upperArray.length; i++) {
    let first = upperArray[i].charAt(0);
    let upperCase = first.toUpperCase();
    let second = upperArray[i].slice(1);
    let final2 = upperCase + second;
    array5.push(final2);
    
  }
 
  console.log(array5.join(' ')) ;
};

upperFirst("mejo mo che dopo");
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = (_str1) =>{
    return _str1.slice(1, _str1.length -1)

}
console.log(cutString('alessio'));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  var array = [];
  for (i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
}
console.log(giveMeRandom(12));
