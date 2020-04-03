var main = function () { 
    "use strict"; 
    //inputs somethign if the '+' button is clicked
    $(".comment-input #submit").on("click", function (event) { 
        addCommentFromInputBox();
    });

    $(".comment-input #clear").on("click", function (event) { 
        clearCommentFromInputBox();
    });
    
    //inputs something if the 'enter' key is pressed
    $(".comment-input input").on("keypress", function (event) { 
        var code = event.keyCode;
        if (code == 13) { //checks is the enter key is pressed, then executes the input function
            addCommentFromInputBox();
        }
    });
    
    $(".remove-comments #remove").on("click", function (event) { 
        clearAllComments();
    });
};
//algorithm for posting new comments
var addCommentFromInputBox = function() {
    var $new_comment=$(".comment-input input").val();

    if ($new_comment == "") {
        window.alert("You cannot post an empty comment.");
     } else {
        $(".comments").append($("<p>").text($new_comment).fadeIn());
        $(".comment-input input").val("");
     }
}

var clearCommentFromInputBox = function() {
    $(".comment-input input").val("");
}

var clearAllComments = function() {
    $(".comments").empty();
}
$(document).ready(main);
