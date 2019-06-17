/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const performOperation = operation => {
    let one = +document.getElementById("op-one").value;
    let two = +document.getElementById("op-two").value;

    let resultad = one + two;
    let resultsoust = one - two;
    let resultmult = one * two;
    let resultdiv = one / two;

   
        switch (operation) {
            case "addition":
                alert(resultad);
                break;
            case "substraction":
                alert(resultsoust);
                break;
            case "multiplication":
                alert(resultmult);
                break;
            case "division":
                alert(resultdiv);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
