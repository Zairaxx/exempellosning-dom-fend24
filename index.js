//Uppgift 1

let p = document.createElement("p");

p.textContent = "Hej från Javascript!"

document.body.append(p);

document.querySelector("h1").textContent = "Rubrik från Javascript"

let changeBgButton = document.querySelector("button");

changeBgButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink";
})

let changePColorsBtn = document.createElement("button");
changePColorsBtn.textContent = "Ändra textfärg";

changePColorsBtn.addEventListener("click", () => {
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(p => p.style.color = "blue");
    
})

document.body.append(changePColorsBtn);

//Uppgift 2

let numbers = [2,5,10,15,20,25,30,50,60,92,45,77,10,105,66];

let ul = document.createElement("ul");

numbers.forEach( (num,i) => {

    let li = document.createElement("li");
    if((i+1) % 5 === 0){
        li.style.color = "purple";
    }
    else if(num % 2 === 0){
        li.style.color = "red";
    } else {
        li.style.color = "blue"; 
    }

    li.textContent = num;
    ul.append(li);
})

document.body.append(ul);

//Uppgift 3

const people = [
    {
      name: "Anna Svensson",
      age: 32,
      amountOfPets: 2,
      email: "anna.svensson@email.com",
      favoriteAuthor: "Astrid Lindgren",
      lovesWinter: true
    },
    {
      name: "Johan Eriksson",
      age: 28,
      amountOfPets: 1,
      email: "johan.eriksson@email.com",
      favoriteAuthor: "J.K. Rowling",
      lovesWinter: false
    },
    {
      name: "Maria Lind",
      age: 45,
      amountOfPets: 4,
      email: "maria.lind@email.com",
      favoriteAuthor: "Stephen King",
      lovesWinter: true
    }
  ];

let getProfilesBtn = document.querySelector("#getProfiles");

let profilesDiv = document.querySelector("#profile-cards")

getProfilesBtn.addEventListener("click", () => {
    profilesDiv.innerHTML = "";

    people.forEach(person => {
        let profileCard = document.createElement("div");
        profileCard.style.border = "2px solid black";
        if(person.lovesWinter){
            profileCard.style.background = "lightblue";
        } else {
            profileCard.style.background = "orange";
        }
        //Alternativ 2 - InnerHTML
        profileCard.innerHTML = `
        <p><strong>Name:</strong>${person.name}</p>
        <p><strong>Age:</strong> ${person.age}</p>
        <p><strong>Email:</strong> ${person.email}</p>
        <p><strong>Pets:</strong> ${person.amountOfPets}</p>
        <p><strong>Favorite author:</strong> ${person.favoriteAuthor}</p>
        <p><strong>${person.lovesWinter ? "Loves winter!" : "Prefers summer"}</strong></p>
        `

        //Alternativ 1 - Paragraph + innerText
        // let paragraph = document.createElement("p");
        // paragraph.innerText = `
        // Name: ${person.name}
        // Age: ${person.age}
        // Pets: ${person.amountOfPets}
        // Email: ${person.email}
        // Favorite author: ${person.favoriteAuthor}
        // ${person.lovesWinter ? "Loves winter!" : "Prefers summer"}
        // `;
        // profileCard.append(paragraph);

        profilesDiv.append(profileCard);
    })
})
