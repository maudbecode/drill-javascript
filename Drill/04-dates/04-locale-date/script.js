/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
   
    
    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date;
    let dayName = days[d.getDay()];
    console.log(dayName);

    let jour = d.getDate();
    console.log(jour);

    let months = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let me = new Date;
    let monthName = months[me.getMonth()];
    console.log(monthName);

    let year = d.getFullYear();
    console.log(year);

    let h = d.getHours();
    let m = d.getMinutes();
    console.log(h + "h" + m);

    document.getElementById("target").innerHTML = (dayName + " " + jour + " " + monthName + " " + year + " , " + h + "h" + m);
})();
