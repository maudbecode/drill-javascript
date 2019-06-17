/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    for (let i=0; i<100; i++) {
        let modulo = i % 3;
        let mod = i % 5;
        if (modulo===0 && mod===0){
            console.log(i + "fizzbuzz");
        }
        else if (modulo == 0) {
            console.log(i + " fizz");
        }
        else if (mod == 0) {
            console.log(i +" buzz");
        }
        else {
            console.log(i);
        }
    }
    // your code here

})();
