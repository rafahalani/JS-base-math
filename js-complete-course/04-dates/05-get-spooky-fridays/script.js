/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const MONTHS = ["Jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    //save the months so we can call it later

        document.getElementById('run').addEventListener('click',function ()
        //define a function works when user enters a years value
        {

            var year= parseInt(document.getElementById("year").value);
            //take the value of a year and save it as a var

            var calender=new Date();
            //define calender as a date var

            calender.setFullYear(year,0,13);
            //set the value of a year the user entered ,month to january and date to 13

            for (var i = 0 ; i < 12 ; i++)
            {
                calender.setMonth(i);
                //give the month a value of i

            if (calender.getDay()===5)
            //check if the day is friday
                {
                    console.log(MONTHS[i]);
                    //apply the function
                }
            }


});


})();
