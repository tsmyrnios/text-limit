;(function($) {
    $.fn.extend({
        textLimit: function(options) {
            var defaults = {
                limit: 0,
                callback: function(event, element, length, limit) { }
            };
            options = $.extend({}, defaults, options);
            this.each(function(i, element) {
                return new $.textLimiter($(element), options);
            });
        }
    });

    $.textLimiter = function(element, options) {
        element.data("textLengthLimit",options.limit);
        element
            .bind("ready", limitText)
            .bind("keyup", limitText);

        function limitText(event) {
            var limit = element.data("textLengthLimit");
            if (element.val().length > limit) {
                element.val(element.val().substring(0, limit));
            }
            options.callback(event, element, element.val().length, limit);
        }
    };
})(jQuery);