window.onload = function () {
    var t, r = 0,
        e = window.location.href;
    window.addEventListener("scroll", function () {
        e != window.location.href && (e = window.location.href, r = 0), clearTimeout(t), t = setTimeout(function () {
            var t = "div[data-insertion-position]";
            if (null == document.querySelector(t)) return 0;
            var e = document.querySelectorAll(t);
            if (0 == e.length) return 0;
            if (null == document.querySelector("#scrollizy--message")) {
                var n = document.createElement("div");
                n.id = "scrollizy--message", e[0].parentNode.insertBefore(n, e[0])
            }
            if (3 <= e.length - 10 && 50 < document.documentElement.scrollHeight - screen.height - window.scrollY) {
                for (var o = 0; o < e.length - 10; o++) e[o].remove();
                r += e.length - 10, document.getElementById("scrollizy--message").innerHTML = '\t\t\t\t<div style="\t\t\t\tpadding: 15px;\t\t\t\tmargin: 10px 0;\t\t\t\tborder: 1px solid #8cb2ff;\t\t\t\tborder-radius: 2px;\t\t\t\tfont-size: 14px;\t\t\t\tfont-weight: normal;\t\t\t\tline-height: 1.38\t\t\t\t">Đã tối ưu <strong>' + r + '</strong> bài đăng để trình duyệt không bị lag\t\t\t\t<a href="https://scrollizy.github.io/donate.html" target="_blank" style="float: right;color: #537aca">ủng hộ</a>\t\t\t\t</div>\t\t\t\t'
            }
        }, 100)
    })
};