var nome = 'Aldo';//Prima conatenzione
let stato = 'cliente';
const numero = 3.14;

document.getElementById('concatena').innerHTML = nome + ' , ' + stato + ' ,  ' + numero;

// conatenazione con variabile
let concatenazione = nome + ' , ' + stato + ' ,  ' + numero;
document.getElementById('concatena2').innerHTML = concatenazione;

//keyword diciarative
var nome = 'Mario';
document.getElementById('var').innerHTML += nome;
document.getElementById('final').innerHTML += nome;
document.getElementById('let2').innerHTML += nome;
{
    let nome = 'Carla';
    document.getElementById('let').innerHTML += nome;
    document.getElementById('let3').innerHTML += nome;
    document.getElementById('final2').innerHTML += nome;
}



//Valore iniziale
let valoreIniziale = 15
//Somma + incremento
document.getElementById('iniziale').innerHTML += valoreIniziale;
let valoreSomma = valoreIniziale + 15;
let valoreSommaIncremento = valoreSomma;
valoreSommaIncremento++ ;
document.getElementById('valore1').innerHTML += (' ' + valoreSomma + ' ' + valoreSommaIncremento);
//Sottrazione + decremento
let sottrazione = valoreIniziale - 10;
let decremento = sottrazione;
decremento--;
document.getElementById('valore2').innerHTML +=('' + sottrazione + ' ' + decremento);
//Moltiplicazione 
let moltiplicazione = valoreIniziale * 3 ;
document.getElementById('valore3').innerHTML += moltiplicazione;
//Divisione
let divisione = valoreIniziale / 3 ;
document.getElementById('valore4').innerHTML += divisione;
//Valore iniziale + stringa di testo
var string = 'è un numero';
document.getElementById('valore5').innerHTML += valoreIniziale + ' ' + string;