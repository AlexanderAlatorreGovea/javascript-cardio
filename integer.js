let isInt = function (num) {
    return (!isNaN(num) && parseInt(num) === num) ;
}
console.log(3, isInt(3)); //true
console.log(3.5, isInt(3.5)); //false
console.log(1.00000, isInt(1.0000))  //true
