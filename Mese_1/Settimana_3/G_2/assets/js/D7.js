/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/console.log('Esercizio 1');
var stringa1 = 'ciao ciao ciao';
var stringa2 = 'hello hello hello';
function concat(stringa1, stringa2) {
  stringa1 = stringa1.slice(0, 2);
  stringa2 = stringa2.slice(-3)
  var stringa3 = stringa1.concat(stringa2);
  console.log(stringa3.toUpperCase());
}
concat(stringa1, stringa2);

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */
  console.log('Esercizio 2');
function addDisp() {
  var array = [];

  for (i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      array.push(i);

    }
  }
  console.log(array);
}
addDisp();


/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */
  console.log('Esercizio 3');
function multFive() {
  var array2 = []
  for (i = 0; i < 100; i++) {
    if (i % 5 == 0) {
      array2.push(i);
    }
  }
  console.log(array2);
}


multFive();

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
  console.log('Esercizio 4');
const arreyten = function(){
  var array3 = [];
  for (i = 0; i < 10; i++){
   
    array3.push(Math.floor((Math.random()*100)+1))
  }
  console.log(array3);
}
arreyten();

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
  console.log('Esercizio 5');
const soloPari = function(n){
  var arraypari = [];
  for (i = 0; i < n.length;i++)
  if (n[i] % 2 === 0){
      arraypari.push(n[i]);
  }
  console.log(arraypari)
}

let arr = [25,12,42,55,103,99,45,75,20,56,88];
soloPari(arr)
/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */
  console.log('Esercizio 6');
function sumArray(_n){
  let sum = 0;
  for(j = 0; j< arr.length;j++){
    sum += arr[j];
  }
  console.log(sum);
}
sumArray(arr);

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/
console.log('Esercizio 7');
function add(_n){
  for(h = 0;h < arr.length;h++){
    _n[h] += 1 
  }
  console.log(_n);
}
console.log(arr);
add(arr);
/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log('Esercizio 8');
var nuovo = []
const countString = (_string) =>{
 nuovo = _string.split(' ')
  let count =[]
      
     for (i = 0;i < nuovo.length;i++){
      
        count.push(nuovo[i].length);
        
     }
console.log(count)

}

var lett = 'la notte non si dorme'

countString(lett);
/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/
console.log('Esercizio 9');
const soloPariDel = function(n){
  
  for (i = 0; i < n.length;i++)
  if (n[i] % 2 === 0){
    n.splice(i, 1);
  }
  console.log(n)
}

soloPariDel(arr)
/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
const selectFilm = document.getElementById('selectFilm')
window.addEventListener('load', function () {
  for (i = 0; i < movies.length; i++) {
    selectFilm.innerHTML += `<option value='${movies[i].imdbID}'>'${movies[i].Title}'</option>`;
  }
})
const btnRicerca = document.getElementById('ricerca');

btnRicerca.addEventListener('click', function () {
  let ricerca = document.getElementById('selectFilm').value;
  if (ricerca == '') {
    document.getElementById('title').innerHTML = 'scegli almeno un film'
    document.getElementById('Year').innerHTML = '';
    document.getElementById('imdbID').innerHTML = '';
    document.getElementById('Type').innerHTML = '';
    document.getElementById('Poster').src = '';
    return
  } else if (ricerca !== '') {
    trova(ricerca)
    return;
  }

}
)

function trova(ricerca) {
  for (i = 0; i < movies.length; i++) {
    if (ricerca == movies[i].imdbID) {
      document.getElementById('title').innerHTML = `Titolo :${movies[i].Title}`;
      document.getElementById('Year').innerHTML = `Anno :${movies[i].Year}`;
      document.getElementById('imdbID').innerHTML = `ImdbID :${movies[i].imdbID}`;
      document.getElementById('Type').innerHTML = `Type: ${movies[i].Type}`;
      document.getElementById('img').innerHTML = `<img src=${movies[i].Poster}" alt="poster del film">`

      return;
    }
  }
}




/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/
const btnRicerca2 = document.getElementById('ricerca2');
var arraySearch = [];

btnRicerca2.addEventListener('click', function () {
  const search = document.getElementById('name').value.toLowerCase();
  ricerca(search)
})

function ricerca(search) {
  for (i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(search) == true) {
      arraySearch.push(movies[i])


    }
  }
  scriviArray(arraySearch);
}

function scriviArray(arraySearch) {
  for (i = 0; i < arraySearch.length; i++) {
    document.getElementById("risultati").innerHTML += `<div class="movie"> <div><h2>Titolo: ${arraySearch[i].Title}</h2><h3>Anno: ${arraySearch[i].Year}</h3><h3>IMDB ID: ${arraySearch[i].imdbID}</h3><h3>Categoria: ${arraySearch[i].Type}</h3></div><img src="${arraySearch[i].Poster}" alt="poster del fiml"></div> `;



  }
}



