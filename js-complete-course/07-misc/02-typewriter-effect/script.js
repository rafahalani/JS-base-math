/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {

    var i = 0;
    var container = document.getElementById("target");
    var text = document.getElementById("target").innerHTML;

    var splitText= text.split("");
    container.innerHTML="";
    var max = 5;
    var min= 1;
    var random = Math.random();
   // var random = Math.floor(Math.random() * (max - min + 1) + min);


    function typewriter() {
        container.innerHTML  += splitText[i];
        i++;

        if (i < splitText.length){

            setTimeout(typewriter, random * 1000);
        }

    }
    typewriter();


})();