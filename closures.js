//video 8
function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)
    }, 1000);
}


//////we want for this to return 0,1,2 at this moment it returns 3,3,3

function f2() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i);// we will get 3, 3, 3 //this will run three times 1000*1 , 1000*2, 1000*3
    }
    // i = 3, 'i; will be increment to 3 and the loop is done and after that a closure has been created
}

//////////////////solution 1
//we can use let instead of var

function f2() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i);// we will get 0, 1, 2 //this will run three times 1000*1 , 1000*2, 1000*3
    }
    //i no longer exists so it is forced to create a closure
}

////////////////////solution 2

function f2() {
    for (let i = 0; i < 3; i++) {
        setTimeout((function () {
            console.log(i)
        }).bind(this, i), 1000 * i);// 3,3,3 this will bind the i to the funciton after you put everything inside the closure
    }
}