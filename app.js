const brad = {
    name: 'Brad',
    age: 30,

}

console.log(brad)


//person constructor- this is a constructor

function Person(name, dob) {
    this.name = name, //name will create a new name in the new Person object
    this.age = 30,
    this.birthdate = new Date(dob) //new Date has a constructor
    console.log(this); //logs twice brad and john
}

console.log(this); //gives us the window object, because it is in the global scope

const brad = new Person('brad'); //this creates a new Person name brad

const josh = new Person('john'); //this creates a new Person name john

console.log(brad);
console.log(josh);


