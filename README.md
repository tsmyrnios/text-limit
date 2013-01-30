#text-limit

A jQuery script to limit text on a text area to an explicit number of characters

###Dependencies

jQuery >1.4.2

###Usage

Include the *textLimit.js* script in your HTML

    <script type="text/javascript" src="scripts/textLimit.js"></script>

To apply to elements you may use this like any other jQuery plugin:

    <script type="text/javascript">
        $(function(){
            $("textarea").textLimit({
                limit: 2000,
            });
        });
    </script>

Here is a more advanced example of how one could show the # of characters remaining next to the textarea via DOM manipulation:
    
    <script type="text/javascript">
        $(function(){
            $("textarea").textLimit({
                limit: 2000,
                callback: function(event, element, length, limit) {
                    element.siblings(".text-limit").html("(" + String(limit - length) + " characters remaining)");
                }
            });
            
            $("textarea").each(function(i, element) {
                $("<span></span>").addClass("text-limit").addClass("no-print").text("(" + ($(element).data("textLengthLimit") - $(element).val().length) + " characters remaining)").insertAfter($("<br />").insertAfter($(element)));
            });
        });
    </script>