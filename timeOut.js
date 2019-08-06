console.log('a'); //1

let timmy = setTimeout(function () { //3 first thing set aside after waiting for a and e
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
//b and d are set aside for the first two console.logs to run then they are done when the other ones are done as well, their delay has been completed


//1 a
//2 e
//3 b
//4 d
//5 c