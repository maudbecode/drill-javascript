/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let kh = document.getElementById("target");
    let tm = document.createElement("table");
    kh.appendChild(tm);
    let hd = document.querySelector("table");
    let df = document.createElement("tr");
    hd.appendChild(df);

    for (let i=1; i<11; i++) {
        let cell = document.createElement("td");
        df.appendChild(cell);
        let cellText = document.createTextNode(i);
        cell.appendChild(cellText);
    }
})();
