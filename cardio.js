//wes bos video 7

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const isAdult = people.some(() =>{
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19) {
        return true;
    }
    })

console.log(isAdult) /// you can console.log like this or

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    //const isAdult = people.some(() =>{
      //  const currentYear = (new Date()).getFullYear();
       // if(currentYear - person.year >= 19) {
        //    return true;
      //  }
    //})

    console.log(isAdult) /// you can console.log like this or

    console.log({isAdult})



    ///every, checks if every item in the array meets the criteria
    //this returns false because not every single item in the array is >= 19
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
    
      const isAdult = people.every(() =>{
        const currentYear = (new Date()).getFullYear();
        if(currentYear - person.year >= 19) {
            return true;
        }
    })


///find, will return the firs item it finds
//this returns false because not every single item in the array is >= 19
    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
    
      const comment = people.find((comment) =>{
        const currentYear = (new Date()).getFullYear();
        if(comment.id === 823423) {
            return true;
        }
    })

    //or

    const comment = comments.find(comment => comment.id === 823423)

    console.log(comment)


///////////////////findIndex////////////////////////////////////

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


const index = comments.findIndex(comment => comment.id === 823423);
console.log(index)

//splice deletes the item

comment.splice(index, 1) 



//////////////////create a new array////////////////////////////

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


const newComments = [
    ...comments.slice(0, index),
    ...comment.slice(index + 1)
]








