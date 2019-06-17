

/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
     // your code here
     let df = document.getElementById("target");
     let string = "Hello, I am Maud and I am web developper!";
     document.getElementById('target').innerHTML = " ";
     let tab = ['10px', '20px', '30px', '40px', '50px', '40px', '30px', '20px'];
     let y =0;
     for (let i=0; i<string.length; i++) {
          let xc = document.createElement('span');
          let w = xc.innerHTML = string[i];
          df.appendChild(xc)
          xc.style.fontSize= tab[y];
          y++;
          string = string.replace(" ", " ")
          if (tab.length === y) {
               y=0;
          }
      }  
     
     

 })();
