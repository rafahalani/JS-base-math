/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    document.getElementById('next').addEventListener('click',function () {


        let carousel = document.getElementsByTagName("img")[0];
        let src = carousel.getAttribute("src");
        let srcIndex = gallery.indexOf(src);
        console.log(srcIndex+ " " + typeof(srcIndex));
        if(srcIndex === gallery.length-1) {
            srcIndex= 0;
        } else {
            srcIndex+= 1
        }
        // change the src with the newIndex
        carousel.setAttribute("src", gallery[srcIndex] );
    })
})();
