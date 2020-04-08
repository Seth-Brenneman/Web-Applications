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
            var limit = Math.sqrt(num);
            
            if (num % 1 != 0) {
                return false;
            } 
            
            if (num <= 1) {
                return false;
            } 
            
            if (num <= 3) {
                return true;
            } 
            
            if (num % 2 == 0) {
                return false;
            }

            for (let divider = 3; divider <= limit; divider += 2) {
                if (num % divider == 0) {
                    return false
                } else {
                    return true;
                }
            }
        }
     };
     $(document).ready(main);
     
 };
 $(document).ready(main);
 