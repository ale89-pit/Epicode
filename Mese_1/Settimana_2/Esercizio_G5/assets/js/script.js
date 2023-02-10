//Dichiarazione delle variabili per ogni pulsante della calcolatrice

//tastiera da 0 a 9 
let btn0 = document.getElementById('0');
let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
let btn4 = document.getElementById('4');
let btn5 = document.getElementById('5');
let btn6 = document.getElementById('6');
let btn7 = document.getElementById('7');
let btn8 = document.getElementById('8');
let btn9 = document.getElementById('9');

//Pulsanti operatori
let btnDecimale = document.getElementById('.');
let btnDivisione = document.getElementById('/');
let btnMoltiplicazione = document.getElementById('*');
let btnSottrazione = document.getElementById('-');
let btnAddizione = document.getElementById('+');
let btnQuadra = document.getElementById('√');

//Cancella e Risultato
let btnOperazione = document.getElementById('operazione');
let btnReset = document.getElementById('C');
//Display per la visualizzaione dei numeri e dei risultati
let display = document.getElementById('text');


//Button tastierino numerico
btn0.addEventListener('click', function(){
   
    display.innerHTML += btn0.value ;
})
btn1.addEventListener('click', function(){
    display.innerHTML += btn1.value ;
})
btn2.addEventListener('click', function(){
    display.innerHTML += btn2.value ;
})
btn3.addEventListener('click', function(){
    display.innerHTML += btn3.value ;
})
btn4.addEventListener('click', function(){
    display.innerHTML += btn4.value ;
})
btn5.addEventListener('click', function(){
    display.innerHTML += btn5.value ;
})
btn6.addEventListener('click', function(){
    display.innerHTML += btn6.value ;
})
btn7.addEventListener('click', function(){
    display.innerHTML += btn7.value ;
})
btn8.addEventListener('click', function(){
    display.innerHTML += btn8.value ;
})
btn9.addEventListener('click', function(){
    display.innerHTML += btn9.value ;
})
btnDecimale.addEventListener('click', function(){
    display.innerHTML += btnDecimale.value ;
})

//fine tastierino

//Button operazioni

btnDivisione.addEventListener('click', function(){
    display.innerHTML += btnDivisione.value ;
})
btnMoltiplicazione.addEventListener('click', function(){
    display.innerHTML += btnMoltiplicazione.value ;
})
btnSottrazione.addEventListener('click', function(){
    display.innerHTML += btnSottrazione.value ;
})
btnAddizione.addEventListener('click', function(){
    display.innerHTML += btnAddizione.value ;
})
//Button Radice quadrata
btnQuadra.addEventListener('click', function(){
display.innerText = Math.sqrt(display.innerText);
})


//Risultato 
btnOperazione.addEventListener('click', function(){
   display.innerText = eval(display.innerText);
   display.innerHTML = display.innerText;
    
})
//Button Reset
btnReset.addEventListener('click', function(){
    display.innerText = '' ; 
})






