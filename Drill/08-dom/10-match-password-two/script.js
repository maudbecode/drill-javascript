/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => 
    {
        if (document.getElementById("pass-one").value != document.getElementById("pass-two").value) {
            let modif = document.getElementById("pass-one");
                modif.classList.add("error");
                let modif1 = document.getElementById("pass-two");
                modif1.classList.add("error");
        
               
           
        }
    });
})();
