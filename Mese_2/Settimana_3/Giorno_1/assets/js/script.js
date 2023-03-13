class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compare(x) {
    let diff = Math.abs(this.age - x);
    if (this.age < x) {
      return this.firstName + " è piu piccolo di " + diff + " anni";
    } else {
      return this.firstName + " è piu grande di " + diff + " anni";
    }
  }
}

const user1 = new User("Alessio", "Pitorri", 60, "Roma");
const user2 = new User("Francesco", "Fuf", 55, "Firenze");
const user3 = new User("Marco", "Fif", 24, "Firenze");
const user4 = new User("Giuseppe", "Strunc", 75, "Firenze");
const user5 = new User("Giorgio", "Sbec", 12, "Firenze");
const user6 = new User("Donatella", "Fru", 30, "Firenze");
const user7 = new User("Giulia", "Mic", 42, "Firenze");
console.log(user2.compare(user1.age));
console.log(user7.compare(user5.age));

console.log(user1);
console.log(user2);

let inputName = document.getElementById("inputName");
let inputOwner = document.getElementById("inputOwner");
let inputSpecies = document.getElementById("inputSpecies");
let inputBreed = document.getElementById("inputBreed");
let invia = document.getElementById("invia");
let petList = document.getElementById("petList");
let petArray = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwne(x) {
    if (this.ownerName === x.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const writePet = () => {
  petList.innerHTML = "";
  petArray.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText =
      pet.petName + " " + pet.ownerName + " " + pet.species + " " + pet.breed;
    petList.appendChild(newLi);
  });
};

invia.addEventListener("click", () => {
  console.log("bottone cliccato");
  let newPet = new Pet(
    inputName.value,
    inputOwner.value,
    inputSpecies.value,
    inputBreed.value
  );
  petArray.push(newPet);
  writePet();

  console.log(newPet);
  inputName.value = "";
  inputOwner.value = "";
  inputSpecies.value = "";
  inputBreed.value = "";
});
petArray[0].sameOwne(petArray[1]);
