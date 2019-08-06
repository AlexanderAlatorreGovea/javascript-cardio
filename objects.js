
/**********************************
Object.keys(obj)
Object.values(obj)
Object.entries(obj)
Create an iterable object from the Object
**********************************/

let westeros = {
    cersei: 'Lannister',
    arya: 'Stark',
    jon: 'Snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah: 'Mormont',
    margaery: 'Tyrell',
    sandor: 'Clegane',
    samwell: 'Tarly',
    ramsay: 'Bolton'
}

//for(let prop of arr)
// foreach( )  filter( ) map() reduce()

let keys = Object.keys(westeros); ///will return an array with the key value pairs/ var keys = Object.keys(westeros) console.log(keys[0]) === cersei
//console.log('Keys ', keys);
let vals = Object.values(westeros);
//console.log('Vals', vals);
let entries = Object.entries(westeros);
console.log('Entries', entries); //will return an array of both ['arya', 'Stark']
console.log( entries[2][1] );


///////////////////////