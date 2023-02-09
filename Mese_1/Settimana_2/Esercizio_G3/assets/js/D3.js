/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*let numero1 = document.getElementById('numero1').value;
let numero2 = document.getElementById('numero2').value;

if (numero1 < numero2 ){
  var string = numero2 + 'è maggiore';
  
}else if (numero2 < numero1){
  string = numero1 + 'è maggiore'
  
  }else{
    string = 'uguali'
    
  }
  
  */
document.getElementById('calcola').addEventListener('click', function(){
let numero1 = document.getElementById('numero1').value;
let numero2 = document.getElementById('numero2').value;
if (numero1 > numero2){
   
  document.getElementById('risultato').innerHTML =` ${numero1} è maggiore`;
}else if (numero2 > numero1){
  
  document.getElementById('risultato').innerHTML = ` ${numero2} è maggiore`;
  }else{
    
    string = document.getElementById('risultato').innerHTML = 'uguali';
  }})


  


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*if (numeroFornito !== 5){
  var string2 = 'not equal';
}

console.log(string2);*/
document.getElementById('calcola2').addEventListener('click', function(){
  var numeroFornito = document.getElementById('numero3').value;

if (numeroFornito != 5){
  var string2 = 'not  equal';
  scrivi2(string2);
}else{
  string2 = 'equal';
  scrivi2(string2);
}
})
function scrivi2(string2){
  document.getElementById('risultato2').innerHTML = string2;

}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


var num = document.getElementById('numero6').value;

document.getElementById('calcola4').addEventListener('click', function(){
  
      
      num = parseInt(num);
  
  if (num % 5 == 0){
    document.getElementById('risultato4') = 'Divisibile per 5';
  }else if ( num % 5 !== 0){
    document.getElementById('risultato4')  = 'Non divisibile per 5'
  }
})







/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




document.getElementById('calcola3').addEventListener('click', function(){
  var n1 = document.getElementById('numero4').value;
n1 = parseInt(n1);
var n2 = document.getElementById('numero5').value;
n2 = parseInt(n2);

  if (n1 === 8 || n2 === 8){
    document.getElementById('risultato3').innerHTML  ='uno dei due numeri è 8';
 
}else if (n1 + n2 === 8){
  document.getElementById('risultato3').innerHTML = "la somma dei numeri è 8";
  
}else if(n1 - n2 === 8){
  document.getElementById('risultato3').innerHTML  = "la sottrazione è 8";
 
}else {
  document.getElementById('risultato3').innerHTML = "non è 8";
  
}
;
})


//console.log(string3);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let merce1 = 10;
let merce2 = 20;
let merce3 = 25;
let totalShoppingCart = merce1 + merce2 + merce3;

if (totalShoppingCart >= 50){
  var totale = 'spedizione gratuita' + ' ' +  totalShoppingCart;
}else if (totalShoppingCart < 50) {
   totale = 'spedizione non gratuita' + ' ' + (totalShoppingCart + 10);
}

console.log(totale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  totalShoppingCart = totalShoppingCart * 0.8; 
if (totalShoppingCart >= 50){
  var totale = 'spedizione gratuita' + ' ' +  totalShoppingCart;
}else if (totalShoppingCart < 50) {
   totale = 'spedizione non gratuita' + ' ' + (totalShoppingCart + 10);
}

console.log(totale);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [50,12,36];

array.sort();
console.log(array);
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let text = 'ciao'


if (typeof text === 'number'){
  console.log('è un numero');
  }else if (typeof text === 'string'){
    console.log('non è un numero')
  }


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let number = 50;

if (number % 2 ==0 ){
  str = 'è un numero pari';
}else if ( number % 2 !== 0){
  str = 'è un numero dispari'
}
console.log(str);
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
if (val >5 && val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
 me.city = 'Toronto';
 console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 delete me[1];
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const array2 = [];

array2.push(1,2,3,4,5,6,7,8,9,10);
console.log(array2);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array2.splice(-1,1,'100');
console.log(array2);
/* SCRIVI QUI LA TUA RISPOSTA */
