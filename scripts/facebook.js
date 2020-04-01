var main = function () { 
    "use strict"; 
    $(".comment-input button").on("click", function (event) { 
        var $new_comment=$(".comment-input input").val();
        if ($new_comment == "") {
            window.alert("You cannot post an empty comment.");
        } else {
            $(".comments").append($("<p>").text($new_comment));
            $(".comment-input input").val("");
        }
    });
    $(".comment-input input").on("keypress", function (event) { 
        console.log("hello world!"); 
    }); 
}; 
$(document).ready(main);
