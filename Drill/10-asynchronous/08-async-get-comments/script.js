/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
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
            array.forEach(element => {
                window.lib.getComments(element.id).then((comments) => {
                   
                    element['comments'] = comments;
                })
            }) 
            console.log("dans la fonction getComments",array)
        });
    }
        async function fonctionAsynchrone2() {
            const value1 = await fonctionAsynchrone1();
        }
        document.getElementById("run").addEventListener('click',() => {
            fonctionAsynchrone2();
        })   
})();
