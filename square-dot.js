//vid 12

// Differences between dot notation and square bracket syntax

let sam = {
    castiel: "mary"
}
let dean = {
    john: "crowley",
    mary: "chuck"
}

//which, if any, of these three log statements will work?
console.log(dean[sam.castiel]); //this will work
console.log(dean.sam.castiel); //failure because it doesn't look at all the pices and reads it left to right
console.log(dean[sam['castiel']]); // will work dean['mary'] => chuck
console.log(dean[sam[castiel]]); // will not work because it is missing the quotation marks ''
