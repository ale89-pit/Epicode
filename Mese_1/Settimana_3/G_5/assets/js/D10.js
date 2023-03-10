/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 20));

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Alessio",
  surname: "Pitorri",
  age: 33,
};
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
const cancellaProprieta = () => {
  delete me.age;
};
cancellaProprieta();
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
const addProp = () => {
  me.skill = ["HTML", "CSS", "Javascript"];
};
addProp();
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
const addNewSkill = () => {
  me.skill.push("Java");
};
addNewSkill();
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
const removeSkill = () => {
  me.skill.splice(-1, 1);
};
removeSkill();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => {
  return (random2 = Math.floor(Math.random() * 6) + 1);
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

console.log(whoIsBigger(4, 8));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (_string) => {
  let arrayString = _string.split(" ");
  return arrayString;
};
console.log(splitMe("ciao mi chiamo alessio"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (_string, booleano) => {
  if (booleano === true) {
    return _string.slice(1);
  } else {
    return _string.substring(0, _string.length - 1);
  }
};

console.log(deleteOne("ciao mario sono alessio", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (_stringa) => {
  let numeri = ["0", "1", "2", " 3", "4", "5", "6", "7", " 8", "9"];
  let result = "";
  let splittedString = _stringa.split("");
  splittedString.forEach((element) => {
    if (numeri.includes(element)) {
      console.log(`Numero trovato: ${element}`);
    } else {
      result += element;
    }
  });
  return result;
};

console.log("i have 4 dogs => " + onlyLetters("i have 4 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (_email) => {
  if (
    _email.includes("@") &&
    (_email.includes(".it") ||
      _email.includes(".com") ||
      _email.includes(".es"))
  ) {
    console.log("email valida");
  } else {
    console.log("email non valida");
  }
};

isThisAnEmail("asdad@ciao");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let date = new Date();
console.log(date)
const whatDayIsIt = () => {
    let day = date.getDay();
    console.log(day);
  switch (day) {
    case 0:
      
      console.log("domenica");
      break;
    case 1:
      console.log("lunedi");
      break;
    case 2:
      console.log("martedi");
      break;
    case 3:
      console.log("mercoledi");
      break;
    case 4:
      console.log("giovedi");
      break;
    case 5:
      console.log("venerdi");
      break;
    case 6:
      console.log("sabato");
      break;
  }
}
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices= (n) =>{
  oggetto = {
    sum : 0,
    valori :[]
  }
  
for (i = 0;i < n;i++){
  number = (dice())
  oggetto.sum += number
  oggetto.valori.push(number)
  
}
console.log(oggetto)
}
rollTheDices(3);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) =>{
  date = new Date(date);
  oggi = new Date()
  giorniPassati = oggi.getTime() - date.getTime();
  console.log(giorniPassati);
  giorni = Math.floor(giorniPassati/1000/60/60/24)
  console.log(giorni);
}
howManyDays('2023,02,05');
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = () =>{
  date = new Date();
  birthday = new Date('2023,02,17');
  if (( date.getMonth() == birthday.getMonth()) && (date.getDay() == birthday.getDay())){
    console.log('Tanti auguri');
    return true;
  }else {
    console.log('giorno qualsiasi')
    return false
  }
  
 
}
isTodayMyBirthday();
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
let oggetto1 = {
  nome : '',
  congnome :'',
  indirizzo :'',
  sesso : '',
}
const deleteProp = (oggetto1,_string) =>{
    for  (i = 0;i < oggetto1.length;i++){
      if (oggetto1.i == _string){
        delete oggetto1.i
        console.log(oggetto1)
      }else{

      }
    }
}
deleteProp(oggetto1,'nome')
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = () =>{
  let newest = movies[0]
  for (i = 0;i < movies.length;i++){
    if(newest.Year < movies[i].Year){
      newest = movies[i];
      
    }
    
}
return  `Il film piu recente è ${newest.Title} del ${newest.Year}`
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = () =>{
  count = 0;
  for (i = 0;i < movies.length;i++){
    count ++
  }
  console.log(count)
}
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/


 const onlyTheYears = () =>{
  let arraYear = [];
  
  for (i = 0;i < movies.length;i++){
  arraYear.push(movies[i].Year);
}
console.log(arraYear);
 }


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


const onlyInLastMillennium = () =>{
 
  arraMill =[]
  for (i=0;i< movies.length;i++){
    if(movies[i].Year < 2000){
      arraMill.push(movies[i].Title + ' ' + movies[i].Year);

      
    }
  }
  console.log(arraMill);
}
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = () =>{
  countyear = 0
  for (i = 0;i< movies.length;i++){
  countyear += parseInt(movies[i].Year);
}
console.log(countyear);
}
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (_string) =>{
  for (i = 0;i < movies.length;i++){
    
    if(movies[i].Title.toLowerCase().includes(_string.toLowerCase())){
      console.log(movies[i].Title)
    }
  }
}
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
arrayMatch = [];
arrayUnMatch =[];
objectmatch ={
  arrayMatch,
  arrayUnMatch,
}
const searchAndDivide= (_string) =>{
  for (i = 0;i < movies.length;i++){
    
    if(movies[i].Title.toLowerCase().includes(_string.toLowerCase())){
      arrayMatch.push(movies[i].Title)
    }else{
      arrayUnMatch.push(movies[i].Title)
    }
  }
  console.log(objectmatch);
}
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (n) =>{
  movies.splice(n,1);
  console.log(movies);
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function setContainer(){
  document.getElementById('container');
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function setTable(){
  document.querySelectorAll('td');
  
}
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTd(){
  let td = document.querySelectorAll('td')
  for (i = 0;i < td.length;i++){
    console.log(td[i].innerHTML);
  }
  }

stampaTd();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
var link = document.querySelectorAll('a');
      const changeback = function () {
        link.forEach(element =>{
          element.style.backgroundColor = 'red';
        })
      }
      changeback();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
addLiToUl = () => {
  let myList = document.getElementById("myList");
  let newLi = document.createElement("li");
  newLi.innerHTML = "Nuovo elemento della lista";
  myList.appendChild(newLi);
};

addLiToUl('');
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("Esercizio 25");

removeAllLi = () => {
  let myList = document.getElementById("myList");
  myList.innerHTML = " ";
};

//removeAllLi();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
var riga=document.querySelectorAll("tr")
function classe(){
    riga.forEach(element=>{
        element.classList.add("test");
    })
}

classe();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
halfTree = (_n) => {
  let myTree = "";
  for (let i = 0; i < _n; i++) {
    console.log(myTree);
    myTree += "*";
  }
  console.log(myTree);
};

halfTree(3);
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
tree = (_n) => {
  let myTree = "*";
  let space = " ";
  let k = _n - 1;
  for (let i = 0; i < _n; i++) {
    console.log(space.repeat(k), myTree);
    myTree += "**";
    k--;
  }
};

tree(3);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/


 
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
console.log(newestMovie());
countMovies();
onlyTheYears();
onlyInLastMillennium();
sumAllTheYears();
searchByTitle('salem')
searchAndDivide('lord')
removeIndex(3);
stampaTd();