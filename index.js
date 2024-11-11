//ESERCIZIO 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

const user1 = new User("Matteo", "Rossi", 30, "Milano");
const user2 = new User("Giulia", "Bianchi", 25, "Roma");
const user3 = new User("Luca", "Verdi", 30, "Torino");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user3));

//___________________________________________

//ESERCIZIO 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

let pets = [];

function addPet() {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  pets.push(newPet);

  updatePetList();

  document.getElementById("petForm").reset();
}

function updatePetList() {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";

  pets.forEach((pet, index) => {
    const petItem = document.createElement("li");
    petItem.textContent = `${pet.petName} (${pet.species}, razza: ${pet.breed}) - Padrone: ${pet.ownerName}`;

    pets.forEach((otherPet, otherIndex) => {
      if (index !== otherIndex && pet.hasSameOwner(otherPet)) {
        const sameOwnerMessage = document.createElement("p");
        sameOwnerMessage.textContent = `Questo animale condivide lo stesso padrone di ${otherPet.petName}.`;
        petItem.appendChild(sameOwnerMessage);
      }
    });

    petList.appendChild(petItem);
  });
}

document.getElementById("petForm").addEventListener("submit", addPet);
