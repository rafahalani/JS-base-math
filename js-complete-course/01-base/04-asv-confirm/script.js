/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function information () {

    var age = prompt("please write your age");
    var gender = prompt("please enter you gender");
    var town = prompt("please enter your town");
    var print = confirm ("age," + age + "gender," + gender + "town" + town);


    if (print == false)
    {
        information();
    }
    else
    {
        return;
    }
    // your code here

})();
