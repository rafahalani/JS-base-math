/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click',function () {
        // Function to check Whether both passwords
        // is same or not.

        checkPassword();

        function checkPassword() {
            var password1 = document.getElementById("pass-one").value;
            var password2 = document.getElementById("pass-two").value;

          /*  // If password not entered
            if (password1 == '')
                window.alert("Please enter Password");

            // If confirm password not entered
            else if (password2 == '')
                window.alert("Please enter confirm password");

            // If Not same return False.
            else*/ if (password1 != password2) {


                window.alert("\nPassword did not match: Please try again...");
            }

            // If same return True.
            else {
                window.alert("Password Match: Welcome to GeeksforGeeks!");
            }
            // your code here
        }
    });
})();
