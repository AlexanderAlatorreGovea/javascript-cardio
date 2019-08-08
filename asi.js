// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it?

let a = {
    a: 123
} ///we did not put a semicolon 

[a].forEach(function (x) { // it does not know what a means
    console.log(x)
})


//////////////////////////////

//this is the equivalent to the code above

let obj = { a:123 };
 
[obj].forEach()
{
    a: 123
}['a'] //without the quotation marks this is not a variable

//equivalency 

let a;

a = {a:123}[a /*or undefined */].forEach(function(x){})

//with the quotattion marks this is a variable


/////////////////////////////////

///this works and the answer is a: 123

let a = {
    a: 123
}; ///this runs with the semicolon, which breaks up the code into two parts

[a].forEach(function (x) { // it does not know what a means
    console.log(x)
})
