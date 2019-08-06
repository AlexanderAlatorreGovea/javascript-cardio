//Steven Griffith video 3 of the series

//revealing module pattern
//Turn this object literal into a module that only exposes the render method
//pattern is an approach you take to write javascript

//these two are equivalent, 
//these functions no longer exist after running unless you put a return
let myModule = (function(){
    let _data = [];
    let _render = function(){

    };
    let _add = function(){

    };
    let _remove = function(){

    };
    return {
        render: _render 
    }
})()

///myModule.render(); only thing that can be exposed
//myModule._data(); is not exposed
//myModule._remove(); is not exposed

let myModule = {
    data: [],
    render: () => {

    },
    add: () => {

    },
    remove: () => {

    }
};

//below is the only thin that the module will be able to access
myModule.render();