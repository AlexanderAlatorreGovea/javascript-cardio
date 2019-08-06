//1

var myArray = ['a', 'b', 'c', 'd'];

///push to add something to the end of array
///unshift to add something to the start of array
myArray.push('end')
myArray.unshift('start')

console.log(myArray)

//ES6 version

myArray = ['start', ...myArray]

myArray = ['start', ...myArray, 'end']



//2. Creates a private variable in javascript
/// if you don't put the setSecretVariable into a constant it will return private


function setSecretVariable() {
    var private = 'super secret code';
    return function() {
        return private
    }
}

var getPrivateVariable =  setSecretVariable()

console.log(getPrivateVariable())

//3. What is the output = 3

var num = 4;

function outer() {
    var num = 2 /// num is overwritten to 2 
    function inner() {
        num++;
        var num = 3; 2 /// num is overwritten to 3
        console.log(num)
    }
    inner(); //iner function runs first
}

outer(); //outer function runs second



//4. what is the output? returns string 
// console.log(typeof (typeof 1)); - order of operations (type of 1) will give you a number
//type of number will give you string

console.log(typeof typeof 1);



//5. What is the output

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function() {
        return this._name
    }
}

var stoleSecretIdentity = hero.getSecretIdentity;
//var stoleSecretIdentity = hero.getSecretIdentity.bind(hero); 
// you need to re-bind hero to the function to return John doe in the new variable

console.log(stoleSecretIdentity()); //undefined
console.log(hero.getSecretIdentity()); ///john doe
