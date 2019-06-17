/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
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
    let gx = document.getElementById("hero-id").value;
    for (let i=0; i<=4; i++){ 
        if (gx == obj[i].id) {
            kd = obj[i].name + " son alterego est " + obj[i].alterEgo + " et ses pouvoirs sont " + obj[i].abilities;;
            document.getElementById("target").innerHTML= kd;
        } 
}
})
.catch(function(error){
   console.log("prob avec fetch" + error.message);
});
})
})();
