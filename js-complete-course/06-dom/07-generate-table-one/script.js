/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


//Inside the element with id "target",
// create an HTML table with 1 column and 10 rows
   // var x = document.createElement("TABLE");
(function () {
        var table ='';
        var rows =10;
        var cols=1;
        for (var r = 0; r<rows;r++){
            table +='<tr>';
            for(var c=0;c<cols;c++){
                table+='<td>' +''+'</td>';
            }
            table+='</tr>';
        }
        document.getElementById("target").innerHTML = "<table border=1>"+table+"</table>";


})();
