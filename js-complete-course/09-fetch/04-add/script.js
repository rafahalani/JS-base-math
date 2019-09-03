/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click",function () {//get the values from HTML

        let heroName = document.getElementById("hero-name").value;
        let heroalter = document.getElementById("hero-alter-ego").value;
        let powers = document.getElementById("hero-powers").value;



    fetch("http://localhost:63342/js-complete-course/_shared/api.json")//use json
        .then(function (response) {
            return response.json();
        })




        .then(function (data) {
                let newId = data.heroes.length +1;//calculate the newid
                data.heroes.push({id: newId, name: heroName, alterEgo: heroalter, abilities: powers});//push the new values into heroes

                console.log(data);
        })
    })
})();

