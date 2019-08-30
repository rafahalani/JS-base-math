/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //var x = document.querySelectorAll(".target");
    var highlightedItems = document.querySelectorAll(".target");

    highlightedItems.forEach(function(target) {
        target.innerHTML="owned";
    });
/*
    let targets = document.querySelectorAll(".target");
    targets.forEach(element => { element.innerHTML = "owned";
    });*/

})();
