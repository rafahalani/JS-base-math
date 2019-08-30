/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const image = document.getElementsByTagName("img");

    let kiss = image[0].getAttribute("data-hover");
    let nokiss = image[0].getAttribute("src");

    image[0].addEventListener("mouseover", function () {
        image[0].src = kiss;
    });

    image[0].addEventListener("mouseout", function () {
       image[0].src = nokiss;
    });



})();
