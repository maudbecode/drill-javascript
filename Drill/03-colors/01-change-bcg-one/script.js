/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let bo = document.body;

    document.getElementById("red").addEventListener("click", () => 
    {
       
            bo.style.backgroundColor="red";

 });
 document.getElementById("green").addEventListener("click", () => 
    {
       
            bo.style.backgroundColor="green";

 });
 document.getElementById("green").addEventListener("click", () => 
 {
    
         bo.style.backgroundColor="green";

});
document.getElementById("blue").addEventListener("click", () => 
{
   
        bo.style.backgroundColor="blue";

});
document.getElementById("yellow").addEventListener("click", () => 
{
   
        bo.style.backgroundColor="yellow";

});

})();
