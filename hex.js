// Generate Random Hex Colour Values
//use a function that can return a full 6 digit  hex value with one line

function colour() {
    //let c = Math.random();
    //console.log(c);
    //c = c.toString(16)
    //console.log(c)
    return '#' + Math.random().toString(16).substring(2,8); //substring (2,8) 
}

console.log(colour());