var main = function () { 
    "use strict"; 
    commentWithClick();
    commentWithEnter();
};

var commentWithClick = function () {
    $(".comment-input button").on("click", function (event) { 
        var $new_comment=$(".comment-input input").val();
        if ($new_comment == "") {
            window.alert("You cannot post an empty comment.");
        } else {
            $(".comments").append($("<p>").text($new_comment).fadeIn());
            $(".comment-input input").val("");
        }
    });
}

var commentWithEnter = function () {
    $(".comment-input input").on("keypress", function (event) { 
        var code = event.keyCode;
        var $new_comment=$(".comment-input input").val();
        if ($new_comment == "" && code == 13) {
            window.alert("You cannot post an empty comment.");
        } else {
            if (code == 13) {
                $(".comments").append($("<p>").text($new_comment).fadeIn());
                $(".comment-input input").val("");
            }
        }
    }); 
}
$(document).ready(main);
