//var hoisting vs let hoisting
//WHAT will be the output from this code and why?

function f() {
    //area = undefined with var even though hoisted to the top
    //name;  //not defined, not assigned any default value
    console.log('var', area); //undefined
    console.log('let', name); //refence error
    let name = 'Bert';
    var area = 'Geology';
}
f();


///solution for var

function f() {
    if (area !== undefined) // this will return  'var'
    console.log('var', area); //undefined
    console.log('let', name); //not defined, refence error
    let name = 'Bert';
    var area = 'Geology';
}
f();


///solution for let

function f() {
    if (area ==! undefined) // this will return  'var'
    console.log('var', area); //undefined
    console.log('let', name); //refence error
    let name = 'Bert';
    var area = 'Geology';
}
f();