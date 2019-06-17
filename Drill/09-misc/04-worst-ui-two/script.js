/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
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
    let fg = part2.dataset.min;
    let km = part2.dataset.max;
    let cg = parseInt(fg);
    let qm = parseInt(km);
    let it = part3.dataset.min;
    let px = part3.dataset.max;
    let lk = parseInt(it);
    let gh = parseInt(px);
    let io = part4.dataset.min;
    let mw = part4.dataset.max;
    let dx = parseInt(io);
    let xi = parseInt(mw);

    

    document.getElementById("part-one").addEventListener("click", () => {
        let str = gc + "" + cg + "0" + "" + lk + "0" + "" + dx + "0" + "";
        gc = gc + 1;
        part1.innerHTML = gc;
        output.innerHTML = str;
            if (gc === mq) {
               gc = parseInt(gf);
            }  
        
    });

    document.getElementById("part-two").addEventListener("click", () => {
        let fx = gc + "" + cg + "" + lk + "" + dx  + "";
        cg = cg + 1;
        part2.innerHTML = cg;
        output.innerHTML = fx;
        
            if (cg === qm) {
               cg = parseInt(fg);
            }  
    
    });
    document.getElementById("part-three").addEventListener("click", () => {
        let mb = gc + "" + cg + "" + lk + "" + dx  + "";
        lk = lk + 1;
        part3.innerHTML = lk;
        output.innerHTML = mb;
        
            if (lk === gh) {
               lk = parseInt(it);
    }
    
    });
    document.getElementById("part-four").addEventListener("click", () => {
        let kh = gc + "" + cg + "" + lk + "" + dx  + "";
        dx = dx + 1;
        part4.innerHTML = dx;
        output.innerHTML = kh;
        
            if (dx === xi) {
               dx = parseInt(io);
            }

    });

})();

