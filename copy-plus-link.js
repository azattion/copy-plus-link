(function ($) {
    jQuery.fn.copyPlusLink = function (user_options) {
        var options = {htmlcopytxt: ""};
        $.extend(options, user_options);
        var addLink = function () {
            var e = window.getSelection();
            var f;
            if (options.htmlcopytxt) {
                f = options.htmlcopytxt;
            } else {
                var d = window.location + "&f=cp";
                f = "<br/> Подробнее: <a href='" + d + "'>" + d + "</a>";
            }
            var h = e.toString().trim().replace(/\n/g, "<br/>") + f, g = document.createElement("div"), b = e.getRangeAt(0);
            document.body.appendChild(g);
            g.innerHTML = h;
            e.selectAllChildren(g);
            window.setTimeout(function () {
                document.body.removeChild(g);
                e.removeAllRanges();
                e.addRange(b);
            }, 0);
        };
        return $(this).each(function () {
            $(this).on("copy", addLink);
        });
    };
})(jQuery);
