/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let d = new Date();
    let day = d.getDay();
    let month = d.getMonth();
    let year = d.getFullYear();


    
    document.getElementById("run").addEventListener("click", () => 
    {
        let birthYear = document.getElementById("dob-year").value;
        let birthMonth = document.getElementById("dob-month").value;
        let birthDay = document.getElementById("dob-day").value;
        let calc = year - birthYear;
        let young = calc - 1;
        
        if (birthMonth <= month && birthDay <= day) {
      
            console.log(calc);
        }
        else  {
                console.log(young);
        }
    });   
})();
