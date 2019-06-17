/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let tab = [50, 12, 46, 61, 33, 78, 89, 95, 26, 4];
    let r = document.querySelectorAll("td");
    let n = document.querySelectorAll("dd");
    let g = document.getElementById("min");
    let k = document.getElementById("max");
    let q = document.getElementById("sum");
    let v = document.getElementById("average");

    document.getElementById("run").addEventListener("click", () => 
    {
        
        for (let i= 0; i< r.length; i++) {
        for (let i=0; i<tab.length; i++) {
            r[i].innerHTML= tab[i];
            console.log(tab[i]);
    }
}
    g.innerHTML = Math.min(...tab);
    k.innerHTML = Math.max(...tab);

    let sum = tab.reduce((x, y) => {
        return x + y;
    });
    v.innerHTML = sum;


    let av = sum/tab.length;
    v.innerHTML = av;

    });
})();
