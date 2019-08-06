let a1

console.log('1', a1)

let a2

console.log('1', a2)

//version 1
let a1 = Array.from({ //allows you to pass in an array and it will build a new array
    length: 5
}, n => Math.random());
console.log('1', a1);

//version 2
let a2 = new Array(5).fill(null).map(n =>  Math.random()); ///Array(5) the lenght, fill(null)
console.log('2', a2);