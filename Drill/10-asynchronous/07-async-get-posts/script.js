/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
  
        async function fonctionAsynchrone1() {
        window.lib.getPosts().then((array) => {
                console.log(array)
            })
    }
        async function fonctionAsynchrone2() {
            const value1 = await fonctionAsynchrone1();
        }
        document.getElementById("run").addEventListener('click',() => {
            fonctionAsynchrone2();
        })   
})();
