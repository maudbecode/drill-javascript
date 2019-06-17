/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function ask() {
    let age = prompt('quel est ton age?');
    let sexe = prompt('quel est ton sexe ?');
    let ville = prompt('quelle est ta ville?');
    let resum = "vous avez" + age + "et vous êtes un(e)" + sexe + "et vous habitez à" + ville + ".";
    if (confirm (resum)) {
    } else {
    ask();
       }
    }
    ask();
})();
