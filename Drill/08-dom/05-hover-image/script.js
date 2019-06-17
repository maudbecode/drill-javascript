/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let md = document.querySelector("img");
    let hv = md.dataset.hover;
    let no = md.src;
    console.log(hv);

    md.addEventListener('mouseover', function (event) {
        md.src=hv;
    });
    md.addEventListener('mouseout', function (event) {
        md.src=no;
    });
    

})();
