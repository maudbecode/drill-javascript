/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => 
    {
       

        class Cat extends Animal {
            constructor(name) {
            super(name);
            this.name= name;
            }
            static get greeting() {
                return "miaou";
            }
            }
            
            
    let ca1 = new Cat('kitty');
   
    console.log(ca1.sayHello());
  
      
    class Dog extends Animal {
        constructor(name) {
        super(name);
        this.name= name;
        }
        static get greeting() {
            return "woaf";
        }
        }
        
        
let do1 = new Dog('billy');

console.log(do1.sayHello());
        
        
});  
})();


