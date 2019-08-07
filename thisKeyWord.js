//video 13

// Using `this` inside an object
// The object has functions created three different ways 
// What will be the result of the three log statements?

const circle = {
    radius: 10,

    circumference: function () {  //standard  sintax
        return (2 * Math.PI * this.radius); //radius is 10 will work
    },

    diameter() { //es6 shorthand sintaz
        return (this.radius * 2); //radius 10
    },

    area: () => { //arrow function, lexical scoping, look at their creating context
        return (Math.PI * Math.PI * this.radius); //this.radius is NaN because the arrow function is looking for this in the global scope
    }
}
console.log(circle.area()); // NaN
console.log(circle.diameter()); // 20
console.log(circle.circumference()); // 20 *pi