//   let array = [];
//  let nextArray = [];
//  let lastArray = [];

//  for(let i = 1;i <= 1000;i++){
//     if(i % 3 == 0){
//         array.push(i);
//     }

//     if(i % 4 == 0){
//        nextArray.push(i);
//     }

//    if(i % 10 == 1){
//         lastArray.push(i);
//      }

//  }
//  console.log(array,nextArray,lastArray);



let testArray = [false, true, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
let onlyStrings = [];
let onlyNumbers = [];
let booleans = [];
for(let i = 0;i<=testArray.length;i++){
    if(typeof testArray[i] === "string"){
        onlyStrings.push(testArray[i]);
    }
}
    console.log(onlyStrings);

    for(let i = 0;i<=testArray.length;i++){
        if(typeof testArray[i]  === "number"){
            onlyNumbers.push(testArray[i]);
        }
    }
    console.log(onlyNumbers);
    for(let i = 0;i<=testArray.length;i++){
        if(testArray[i]){
            booleans.push(testArray[i]);
        }
    }
    console.log(booleans);
