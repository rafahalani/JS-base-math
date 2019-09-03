/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {


    fetch("http://localhost:63342/js-complete-course/_shared/api.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
           // console.log(data);


            let  input = document.getElementById("hero-id");
            let deleteID = parseInt(input.value);
               // let i = parseInt(document.getElementById("hero-id").value)-1;//id=index

                    data.heroes.splice(deleteID-1,1);


                     console.log(data);

            })
        })
})();
