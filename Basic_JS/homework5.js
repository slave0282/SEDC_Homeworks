 let inputArray = [21,4,6,9,18,117,32];

function findLargestNumber(inputArray){
    let counter = 0;
    let max = -Infinity;

    while(counter < inputArray.length){
        if(inputArray[counter] > max){
            max = inputArray[counter];
        }
        
        counter ++;
    }
    return max;
}
let maxOfArray = findLargestNumber(inputArray);
 console.log(`MAX is: ${maxOfArray}`);


function findSmallestNumber(inputArray){
    let counter = 0;
let min = Infinity;

while(counter < inputArray.length){
    if(inputArray[counter] < min){
        min = inputArray[counter];
    }
    
    counter ++;
}
return min;
}

let min = findSmallestNumber(inputArray);
console.log(`MIN is : ${min}`);
console.log(`The sum is: ${maxOfArray + min}`);












    
 