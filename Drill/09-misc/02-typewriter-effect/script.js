/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let sq = document.getElementById("target");
    document.getElementById('target').innerHTML = '';
    let string = "Hello, I'm Maud and I am web developper!";
    let str = string.split("");
    (function animate() {
    str.length > 0 ? target.innerHTML += str.shift() : clearTimeout(running);
    let nb = Math.floor(Math.random() * 51);
    let running = setTimeout(animate, nb);
    })();
  
})();
