var main = function () { 
    "use strict"; 
    $(".comment-input button").on("click", function (event) { 
        var $new_comment=$("<p>");

        $new_comment.text("this is another new comment");
        $(".comments").append($new_comment);
        //$(".comments").append("<p>this is a new comment</p>"); 
    }); 
}; 
$(document).ready(main);
