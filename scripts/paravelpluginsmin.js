! function (t) {
    function e(e, i, n, r) {
        var s = e.text().split(i),
            o = "";
        s.length && (t(s).each(function (t, e) {
            o += '<span class="' + n + (t + 1) + '">' + e + "</span>" + r
        }), e.empty().append(o))
    }
    var i = {
        init: function () {
            return this.each(function () {
                e(t(this), "", "char", "")
            })
        },
        words: function () {
            return this.each(function () {
                e(t(this), " ", "word", " ")
            })
        },
        lines: function () {
            return this.each(function () {
                var i = "eefec303079ad17405c889e092e105b0";
                e(t(this).children("br").replaceWith(i).end(), i, "line", "")
            })
        }
    };
    t.fn.lettering = function (e) {
        return e && i[e] ? i[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery),
function (t) {
    t.fn.fitText = function (e) {
        return this.each(function () {
            var i = t(this),
                n = i.css("font-size"),
                r = n,
                s = e || 1,
                o = function (t) {
                    r = t.width() / (10 * s), r = r >= n ? n : r, t.css("font-size", r)
                };
            o(i), t(window).resize(function () {
                o(i)
            })
        })
    }
}(jQuery),
function (t) {
    t.fn.fitVids = function (e) {
        var i = {
                customSelector: null
            },
            n = document.createElement("div"),
            r = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        return n.className = "fit-vids-style", n.innerHTML = "&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>", r.parentNode.insertBefore(n, r), e && t.extend(i, e), this.each(function () {
            var e = ["iframe[src^='http://player.vimeo.com']", "iframe[src^='http://www.youtube.com']", "iframe[src^='http://www.kickstarter.com']", "object", "embed"];
            i.customSelector && e.push(i.customSelector);
            var n = t(this).find(e.join(","));
            n.each(function () {
                var e = t(this),
                    i = "OBJECT" == this.tagName ? e.attr("height") : e.height(),
                    n = i / e.width();
                e.wrap('<div class="fluid-width-video-wrapper" />').parent(".fluid-width-video-wrapper").css("padding-top", 100 * n + "%"), e.removeAttr("height").removeAttr("width")
            })
        })
    }
}(jQuery);