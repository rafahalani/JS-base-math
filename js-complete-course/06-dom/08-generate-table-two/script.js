/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var table ='';
    var rows =10;
    var cols=10;
    for (var r = 0; r<rows;r++){
        table +='<tr>';
        for(var c=0;c<cols;c++){
            table+='<td>' +''+'</td>';
        }
        table+='</tr>';
    }
    document.write("<table border=1>"+table+'</table>');


    // your code here

})();
