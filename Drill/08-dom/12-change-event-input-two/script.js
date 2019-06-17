/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let myInput = document.getElementById("pass-one");
   
    myInput.onkeyup = function() {
        let numbers = /\d/g;
        if(myInput.value.length >= 8 && myInput.value.match(numbers).length >= 2 ) { 
        document.getElementById("validity").textContent = "ok";
        
            
        } else {
            document.getElementById("validity").textContent = "pas ok"; 
        }
    }
})();
