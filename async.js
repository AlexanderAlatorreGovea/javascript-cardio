let num = 0;
async function increment() {
    num += await 2; //awaits makes this pause  (num = num + await 2)
    console.log(num);
}
increment();
num += 1; //this runs automatically === (num = num + 1)
console.log(num);


//answer 1, 2

/****
 * What is the resulting output?
 *  2, 3
 *  1, 3
 *  1, 2 correct answer
 *  2, 1
 */