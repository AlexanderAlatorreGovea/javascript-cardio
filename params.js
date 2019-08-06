///video 4

let f = function (a, b) {
    if(arguments.length === f.length) {
        console.log('we have a match')
    } else {
        console.log('we do not have a match')
    }
};

//determine if the function received the number of params it expected
f(1); // not match to function above ===
f(1, 2); // this is a match ===
f(1, 2, 3); // this is not a match ===


///arguments is available in every function and it tells us the number of things past in