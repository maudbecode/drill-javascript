/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    let d = new Date();
    let n = d.getHours();
    console.log(n);
    let m = d.getMinutes();
    console.log(m)


        if (n >= 17 && m >= 30 ) {
        document.getElementById("target").innerHTML = "Bonsoir";
        } else {
        document.getElementById("target").innerHTML = "Bonjour";
    }
    
    console.log(n + "hour(s)" + m + "minute(s)");
})();
