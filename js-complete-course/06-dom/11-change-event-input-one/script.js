/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   document.getElementById("pass-one").addEventListener('input',function () {
       let max=10;
       var input=document.getElementById('pass-one').value.toString();
       if (input.length<=max){
           document.getElementById('counter').innerHTML=input.length.toString() + '/10';
           if (input.length === max)
               document.getElementById('pass-one').disabled = true;
       }
   }) // your code here

})();
