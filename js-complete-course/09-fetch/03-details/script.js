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
    document.getElementById("run").addEventListener("click",function () {

        fetch("http://localhost:63342/js-complete-course/_shared/api.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                let i =[1,2,3,4,5]
               let  temp = document.getElementById("tpl-hero");
                let tempName = temp.content.querySelector(".name"); // search inside the template
                let tempAlter = temp.content.querySelector(".alter-ego");
                let tempPowers = temp.content.querySelector(".powers");

                //  console.log((data.heroes[i].name));
                tempName.innerHTML= data.heroes[i].name;
                tempAlter.innerHTML= data.heroes[i].alterEgo;
                tempPowers.innerHTML= data.heroes[i].abilities;


                let clone = temp.content.cloneNode(true);
                document.getElementById("target").appendChild(clone);




            })
    })
    // your code here
})();
