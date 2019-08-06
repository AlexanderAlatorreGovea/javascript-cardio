//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers


//parseInt(numberWeWantToConvertToANumber, radix) //default radix is 10
//map gives you 3 things //map passes in 3 arguments myArr.map((val, idx, arr) =>{ })
//index is passed in as the radix in parseInt

let result = ['1', '7', '11'].map(parseInt); //returns [1, NaN, 3]

//1. '1', 0 radix, default 10 radix
//2. '7', 1 radix, 7 is the radix therefore not a binary 
//3. '11', 2 2 - binary as the radix

console.log(result);


/////solution

let result = ['1', '7', '11'].map(item => parseInt(item)); //returns [1, 7, 11]

console.log(result)
