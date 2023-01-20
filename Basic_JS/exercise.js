// let mainNode = document.getElementById("main");
// let whoNode = document.getElementById("who");
// let whenNode = document.getElementById("when");
// let whereNode = document.getElementById("where");
// let buttonNode = document.getElementById("buttonGen");

// buttonNode.addEventListener("click", () =>{
//     let storyNode = document.createElement("p");
//     mainNode.append(storyNode);
//     storyNode.textContent = `There was a hero named ${whoNode.value}. He lived in
//     ${whereNode.value} in the times of ${whenNode.value}.It was a great hero indeed.`
// })

let mainDiv = document.getElementById("main");
let selectedButton = document.getElementById("btn");
let inputPhone = document.getElementById("inputPhone");
let inputName = document.getElementById("inputName");

selectedButton.addEventListener("click", () =>{
    let list = document.createElement("ul");
    let listPhone = document.createElement("li");
    let listName = document.createElement("li");

    if(inputName.value == " " || inputPhone.value == " "){
        alert("Please fill both fields!")
    }else{
            listPhone.textContent += inputPhone.value;
            listName.textContent += inputName.value;

            list.append(listPhone);
            list.append(listName);

            mainDiv.append(list);
        }
    }
)