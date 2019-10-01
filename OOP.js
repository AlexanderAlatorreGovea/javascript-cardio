//four pillars of OOP

    //1 Encapsulation
        //we grou related variables and functions and this is encapsulation
        
        //this is procedural
        let baseSalary = 300_000;
        let overtime = 10;
        let rate = 20;

        function getWage(baseSalary, overtime, rate) {
            return baseSalary + (overtime * rate);
        }

        //this is O Oriented
        let employee = {
            baseSalary: 300_000,
            overtime: 10,
            rate: 20,
            getWage: function() {
                return this.baseSalary + (this.overtime * this.rate);
            }
        }


    //2.- Abstraction
        ///hides properties from the outside

    //3.- inheritance
        ///alllows you to eliminate redundant code
    //4.- polymorphism
        ///allows you to get rid if and else or switch and case
        
//variables are properties
/// functions are methods
