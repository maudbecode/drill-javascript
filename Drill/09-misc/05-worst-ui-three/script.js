
/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let part1 = document.getElementById("part-one"); 
    let part2 = document.getElementById("part-two");
    let part3 =  document.getElementById("part-three");
    let part4 =  document.getElementById("part-four");
    let output = document.getElementById("target");
    let gf = part1.dataset.min;
    let mk = part1.dataset.max;
    let gc = parseInt(gf);
    let mq = parseInt(mk);
  
    let t=0;
    let timer_is_on = 0;
    function counter()
    {
    part1.innerHTML = gc;
    output.innerHTML = gc;
    gc++;
    if (gc === mq) {
    gc = parseInt(gf);
    } 
    let t = setTimeout(counter, 1000);
    document.getElementById("fix-part-one").addEventListener("click", () => {
                clearTimeout(t); 
                timer_is_on = 0;
                
    });
    }
counter();

  
   
    
})();
