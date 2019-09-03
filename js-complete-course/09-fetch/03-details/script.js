/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


        fetch("http://localhost:63342/js-complete-course/_shared/api.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                let target =document.getElementById("target");//save the target
                //let heroid =document.getElementById("hero-id");
                let  temp = document.getElementById("tpl-hero");//save the template
                let tempName = temp.content.querySelector(".name"); // take tha value inside the template class called name
              //other way to do it use tag name : let tempName = tmp.content.querySelector("strong");
                let tempAlter = temp.content.querySelector(".alter-ego");
                let tempPowers = temp.content.querySelector(".powers");

                document.getElementById("run").addEventListener("click", function () {

                   let i = parseInt(document.getElementById("hero-id").value) -1;//id

                    tempName.innerHTML = data.heroes[i].name;
                    tempAlter.innerHTML = data.heroes[i].alterEgo;
                    tempPowers.innerHTML = data.heroes[i].abilities;


                    let clone = temp.content.cloneNode(true);
                   target.appendChild(clone);


                })

            })

    // your code here
})();
