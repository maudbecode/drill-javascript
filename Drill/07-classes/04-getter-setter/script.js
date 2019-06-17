
/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click", () => 
    {
        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            get getName() {
                return this.firstname + " "  + this.lastname;
                }
            set SetName(name) {
                name = name.split(" ");
                this.firstName = name[0];
                this.lastName = name[1];
            }
        }

        let person1 = new Person("Phil", "Dor");
        console.log(person1.getName);
        person1.SetName = "Ella Paf";
        console.log(person1.getName);
        
        
    });
})();


