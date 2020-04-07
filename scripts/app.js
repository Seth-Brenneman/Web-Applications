var main = function () { 
    var main = function () { 
        "use strict"; 
        // create and hide our content as a div
        var $content = $("<div>Hello World!</div>").hide();
        var $moreContent = $("<div>Goodbye World!</div>").hide(); 
        
        // append the content to the body element
        $("body").append($content);
        
        $content.slideDown(2000, function(){
            // append the second content to the body 
            $("body").append($moreContent);
            
            // fade in the second content
            $moreContent.fadeIn();
    
        });
    
        var primality = function(num) {
            if (num == 2 || 3 || 5 || 7 || 11) {
                return "It is prime"
            } else if (num == 0 || 1) {
                return "It is not prime"
            }
        }
     };
     $(document).ready(main);
     
 };
 $(document).ready(main);
 