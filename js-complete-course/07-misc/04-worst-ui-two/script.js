/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   document.getElementById("target").innerText = "0460000000";
    //Display the number (with a leading 0) in the target paragraph.
    var buttons = document.querySelectorAll("button");
    //querySelectorAll method returns all elements in the document that matches a specified CSS selector(s),
    // as a static NodeList object.
    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            //console.log("forEach worked");
            var min = button.getAttribute("data-min");
            //getAttribute() method returns the value of the attribute with the specified name, of an element.
            var max = button.getAttribute("data-max");
            var current = parseInt(button.innerText,10); //return the string and make it integer
            //console.log(min);
            //console.log(max);
            //console.log(current);
            if (current < max){
                current++;
                button.innerHTML = current ;
            }
            else{
                button.innerHTML = min ;
            }

            if (current < 10){
                button.innerHTML = "0" + current;
            }
            var one = document.getElementById("part-one").innerHTML;
            var two = document.getElementById("part-two").innerHTML;
            var three = document.getElementById("part-three").innerHTML;
            var four = document.getElementById("part-four").innerHTML;

            console.log(one);

            document.getElementById("target").innerHTML = "0" + one + two + three + four ;
            //Display the number (with a leading 0) in the target paragraph.
        });
    });
})();
