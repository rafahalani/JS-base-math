/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let posts,comment;
  document.getElementById("run").addEventListener("click",function () {
    //  console.log(window.lib);
      window.lib.getPosts(function (error,articles) {
    posts = articles;
          posts.forEach(function (post) {
              window.lib.getComments(null,function (error, getComments) {
                  comment= getComments[post.id];
                  if(comment!== undefined){
                      post.comment=comment;
                     // console.log(post);
                  }
                  console.log(post);
              })
          })
      })

  })
})();
/*You must have noticed, in the previous exercise, that the articles received via the window.lib.getPosts function included an id property.
    The function window.lib.getComments() is available in the script.
    It must receive an article id as the first parameter, as well as a callback as the second parameter.
    After a short delay, the callback will be executed with two parameters:
    the first one contains an error (if there is one, if not null), the second one a table of the comments of the article.
    When you click on the button, call the getPosts function.
For each recovered item, calls the getComments function and adds the comments obtained in a comments property of the item.
    Displays items in the console (getPosts and getComments functions never return errors).*/