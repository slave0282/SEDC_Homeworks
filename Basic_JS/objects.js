// let object = {
//     name: `Slave`,
//     lastName: `Ivanovski`,
//     age: 19,
//     profession: `Barmen`,
//     isSmart: true,

// shakingCocktails: function(){
//     console.log(`3 whiskey peach smash`);
// }

// }

// console.log(object.name);
// console.log(object.age);
// object.shakingCocktails();
// console.log(object.profession);

// object.name = 'Ilija';
// object.age = 11;
// object.profession = `Glupak`;
// object.isSmart = false;
// delete object.lastName;


// console.log(object);

let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Object",
}
 console.log(trainer);

trainer.age = 25;
delete trainer.academy;
// function getFullName (){
//     let fullName = trainer.name + trainer.lastName;
//     return trainer.fullName();
// }
 trainer.getFullName = function(){
   return trainer.name + " " + trainer.lastName;
    
    
   
 }
 console.log(trainer.getFullName());

 