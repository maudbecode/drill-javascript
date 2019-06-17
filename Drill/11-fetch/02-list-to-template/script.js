/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let tm;
    document.getElementById("run").addEventListener('click',() => {
fetch("http://localhost:3000/heroes").then(function(response) {
  return response.json();
}).then (value => {
    tm = JSON.stringify(value);
    obj = JSON.parse(tm);
    console.log(tm);
    for (let i=0; i<=4; i++){
       let gd = document.getElementById("target");
       let md = document.createElement("li");
       gd.appendChild(md);
       let ix = obj[i].name + " son alterego est " + obj[i].alterEgo + " et ses pouvoirs sont " + obj[i].abilities;
       console.log(ix);
       let liText = document.createTextNode(ix);
       md.appendChild(liText);
    }
})
.catch(function(error){
   console.log("prob avec fetch" + error.message);
});
})
        
})();
