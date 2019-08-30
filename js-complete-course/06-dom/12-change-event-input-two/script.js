/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let min = 8;
    let regEx = new RegExp(/(\D*\d){2}/);
    document.getElementById("pass-one").addEventListener('input', function () {
        var input = document.getElementById('pass-one').value.toString();
        let enuphdidgits = regEx.test(input);
        if ((input.length >= min) && (enuphdidgits === true)) {
                document.getElementById('validity').innerHTML = 'ok';
        } else
            document.getElementById('validity').innerHTML = 'not ok';
    })
    // your code here

})();
