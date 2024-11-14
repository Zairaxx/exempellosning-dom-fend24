let greetMeBtn = document.querySelector("#greetMe");
let userNameInput = document.querySelector("#username")

let greetMe = () => {
    let name = userNameInput.value;
    document.querySelector("h2").textContent = "Welcome " + name + "!";
}

greetMeBtn.addEventListener("click", greetMe);


// DOM Traversal 

let allBtns = document.querySelectorAll("button:not(#greetMe)");
console.log(allBtns);

allBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let parentDiv = event.target.parentElement;
        let nextSiblingDiv = parentDiv.nextElementSibling;
        parentDiv.style.background = "pink";
    })
})