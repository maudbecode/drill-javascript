/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
   

    document.getElementById("addition").addEventListener("click", () => {
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        let add = function (a, b) {
            return a + b;
        }
        
        let resuladd = add(one,two);
            alert(resuladd);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        let soust = function (a, b) {
            return a - b;
        }
        
        let resulsoust = soust(one,two);
            alert(resulsoust);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        let mult = function (a, b) {
            return a * b;
        }
        
        let resulmult = mult(one,two);
            alert(resulmult);
    });

    document.getElementById("division").addEventListener("click", () => {
        let one = +document.getElementById("op-one").value;
        let two = +document.getElementById("op-two").value;
        let div = function (a, b) {
            return a / b;
        }
        
        let resuldiv = div(one,two);
            alert(resuldiv);
    });
})();
