var main = function () {
    "use strict";

    var toDos = [
        "Finish writing this book",
        "Take Gracie to the park",
        "Answer emails",
        "Prep for Monday's class",
        "Make up some new ToDos",
        "Get Groceries"
    ];

    /*takes all spans w/.tabs class div block and creates an array, then forEach array element
    have a function that recieves the input element.. coming from the
     .tabs span.. and runs a function*/
    $(".tabs span").toArray().forEach(function (element) {
        // create a click handler for this "element" uses the retrieved
        //element parameter. 
        $(element).on("click", function () {
            /* Since we're using the JQuery version of $element.. we'll 
            go ahead and create a temp variable so to not keep recreating it.*/
            /*to create content on tab 2, added content variable*/
            
            var $element = $(element),
                $content, index, $input, $button; 

            $(".tabs span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) 
                {
                /*in order to display the items.. using a for loop. */
                $content = $("<ul>");
                //i got this for loop right!!
                for (index = toDos.length-1; index >= 0; index = index -1){
                    $content.append($("<li>").text(toDos[index]));            
                }
            } /*will be working on tab two first. adding content, since if it is
            clicked it would be empty. */
            else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });
                $content = $("<div>").append($input).append($button);
                /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
              }

            $("main .content").append($content);  
            return false;
        });
    });
    /*jQuery provides a way to trigger the event handlers bound to an element
     without any user interaction via the .trigger() method. will use that here*/
    $(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);