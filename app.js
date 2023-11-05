let divContainer = document.querySelector(".div-container")
let div = document.createElement("div")

createGrid(16)

function createDiv(size){
 let div = document.createElement("div")
    div.classList.add("boxs")
    div.style.width =`${size}px`
    div.style.height = `${size}px`
    
 div.addEventListener("mouseenter", function(e){
    div.style.backgroundColor ="blue"
})

divContainer.appendChild(div)
}

function createGrid(userInput){
for (let i = 0; i <userInput*userInput; i++) {
    size = divContainer.clientWidth/userInput
    createDiv(size)
}
}


let reset = document.querySelector(".resetBtn")

reset.addEventListener("click", function(){
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
    }
    createGrid(16);

})

let newSizeBtn = document.querySelector(".newSize")

newSizeBtn.addEventListener("click", function(){
    userInput= prompt("Give a number for a new grid size (must be less than 100)")

    if (userInput > 100) {
        alert("Number is to big")
        userInput = 0 
    }
    else{ 
        while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
    }
    createGrid(userInput)
    }
})
