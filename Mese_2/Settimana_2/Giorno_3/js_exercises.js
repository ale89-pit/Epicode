/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
let myself = "alessio";

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish", "chinchilla"];
const printArray = () => {
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
  }
};
console.log(printArray());

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push("canguro");
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
pets.splice(-1, 1);
console.log(pets);
/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let pets2 = pets.shift();
console.log(pets2);
pets.push(pets2);
console.log(pets);
/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
const stampa = function () {
  for (let i = 0; i < pets.length; i++) {
    let a = pets[i].slice(0, 1);
    console.log(a);
    if (a == "c") {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};
stampa();

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const addPlate = () => {
  cars[0].licensePlate = "as238bf";
  cars[1].licensePlate = "fg434sd";
  cars[2].licensePlate = "dr268ef";
};

addPlate();

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
const newcar = (newbrand, newmodel, newcolor, newtrims, newlicensePlate) => {
  cars.push({
    brand: newbrand,
    model: newmodel,
    color: newcolor,
    trims: newtrims,
    licensePlate: newlicensePlate,
  });
  return cars[cars.length - 1];
};
console.log(newcar("fiat", "panda", "red", ["cross", "100hp"], "gg456fs"));

/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = [];

const saveTrims = () => {
  cars.forEach((element) => {
    justFirstTrims.push(element.trims[0]);
  });
};
saveTrims();
console.log(justFirstTrims);
// inserisci la tua funzione qui

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
const fizzBuzz = () => {
  cars.forEach((element) => {
    if (element.color.length <= 4) {
      console.log("fizz");
    } else {
      console.log("buzz");
    }
  });
};
fizzBuzz();
/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
const filter = cars.filter((element) => {
  return element.trims.length > 2;
});
console.log(filter);
/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
const newArray = cars.map((car) => car.brand + " " + car.model);
console.log(newArray);
/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let n = 0;

while (numericArray[n] !== 32) {
  console.log(numericArray[n]);
  n++;
}
/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alfabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];
const position = [];
const countLetter = () => {
  for (i = 0; i < charactersArray.length; i++) {
    for (j = 0; j < alfabet.length; j++) {
      switch (charactersArray[i] === alfabet[j]) {
        case true:
          position.push(j + 1);
          break;
      }
    }
  }
  console.log(charactersArray);
  console.log(position);
};

countLetter();
