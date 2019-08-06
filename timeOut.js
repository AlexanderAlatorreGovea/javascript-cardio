console.log('a'); //1

let timmy = setTimeout(function () { //3
    console.log('b'); 
}, 1);

let timothy = setTimeout(function () { //5
    console.log('c');
}, 10);

let timer = setTimeout(function () { //4
    console.log('d');
}, 0);

console.log('e'); //2

//what is the order of the output of the letters and why?

//1 a
//2 e
//3 b
//4 d
//5 c