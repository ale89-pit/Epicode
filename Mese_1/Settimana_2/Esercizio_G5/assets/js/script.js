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
let btnDecimale = document.getElementById('.');
let btnDivisione = document.getElementById('/');
let btnMoltiplicazione = document.getElementById('*');
let btnSottrazione = document.getElementById('-');
let btnAddizione = document.getElementById('+');
let btnOperazione = document.getElementById('operazione');
let display = document.getElementById('text');
let btnReset = document.getElementById('C');
let btnQuadra = document.getElementById('√');


btnQuadra.addEventListener('click', function(){
display.innerText = Math.sqrt(display.innerText);

})
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
btnDecimale.addEventListener('click', function(){
    display.innerHTML += btnDecimale.value ;
})

 
btnOperazione.addEventListener('click', function(){
   display.innerText = eval(display.innerText);
   display.innerHTML = display.innerText;
    
})

btnReset.addEventListener('click', function(){
    display.innerText = '' ; 
})






