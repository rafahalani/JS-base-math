/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var X = Math.floor(Math.random() * 100 + 1);
    console.log(X);
    // create a randomizer, between 1 and 100

    // count your guesses, create variable to do so
    // put the variable outside your function, otherwise the value will be reset each time it loops

    var guess =1;

    // create a function, so that you can put in in your loop
    function guessNumber() {
        var what =  prompt("Guess the number!");
        console.log(what);
        // you use promt, so a person can put in a value and give it to you
        var N = parseInt(what);
        console.log(guess);
        // you change the input value from string, to number. Because you are comparing it to the random number

        // you set a condition to decide what to alert
        // you compare the input number to the random number
        if(N === X)
        {
            alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
        }
        else if(N > X) /* if guessed number is greater
                   than actual number*/
        {
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
            guess++; // you count your guesses each time
            guessNumber(); // you call your function to start running again, because the need to try again


        }
        else
        {
            alert("OOPS SORRY!! TRY A GREATER NUMBER");
            guess++;
            guessNumber();

        }
    }
    guessNumber(); // to make the function active, you need to call it outside it's function. Otherwise it will not run
    // because you for now only called it in the inside of the function itself, so it is not active yet

})();