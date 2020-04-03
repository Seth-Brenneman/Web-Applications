var main = function () { 
    "use strict"; 
    //inputs somethign if the '+' button is clicked
    $(".comment-input button").on("click", function (event) { 
        addCommentFormInputBox();
    });
    
    //inputs something if the 'enter' key is pressed
    $(".comment-input input").on("keypress", function (event) { 
        var code = event.keyCode;
        if (code == 13) { //checks is the enter key is pressed, then executes the input function
            addCommentFormInputBox();
        }
    });     
};
//algorithm for posting new comments
var addCommentFormInputBox = function() {
    var $new_comment=$(".comment-input input").val();

    if ($new_comment == "") {
        window.alert("You cannot post an empty comment.");
     } else {
        $(".comments").append($("<p>").text($new_comment).fadeIn());
        $(".comment-input input").val("");
     }
}
$(document).ready(main);
