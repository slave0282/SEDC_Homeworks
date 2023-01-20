// function farToCel(celsius){
//     let result = celsius * 1.8 + 32;
//     return result;
// }
// function celToFar(farenheits) {
//     let result = (5/9) * (farenheits - 32);
//     return result;
    
// }
// let personChoice = prompt(`Enter F for farenheit and C for Celsius`);
// let personInput = parseInt(prompt(`Please enter value: `));
// if (personChoice === "F"){
//     console.log(`${celToFar(personInput)}C`);
// }




$(document).ready(function(){
    let allElements = $("*");
    let paragraphs = $("p");
    paragraphs.last().after("<h4>malheader</h4>");

    let ourButton = $("button");
    ourButton.ourButton("click",function(){
        $(this).color("green");
    })
})