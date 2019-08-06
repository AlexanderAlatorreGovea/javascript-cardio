/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional 
 * references to itself
 * video 6
 */

let obj = (function () {
    let objInstance; //private variable
    function create(){ //private function to create methods and properties
        let _isRunning = false;
        let start = function() {
            _isRunning = true;
        }
        let stop = function() {
            _isRunning = false;
        }
        let currentState = function() {
            return _isRunning
        }
        return {
            start: start,
            stop: stop,
            currentState: currentState
        }
    }
    return {
        getInstance: function(){
            if(!objInstance) { //if objInstance does not exist, this will be undefined, this is true
                objInstance = create() //if objInstance does not exist call the create() method
            }
            return objInstance; //if it does exist just return whatever is in that variable
        }
    };
})();

//let obj1 = obj.getInstance();
// let obj2 = obj.getInstance();