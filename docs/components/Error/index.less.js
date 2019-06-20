window.__args = JSON.parse("{\"param\":\"\u6211\u662F\u6784\u5EFA\u53C2\u6570\",\"buildTimestamp\":1561039577815,\"env\":\"production\"}");
define("https://sisimengchen.github.io/fecool_demos/components/Error/index.less.js", function () {
  return function (d) {
    var e = 0;
    var f;
    var c;
    var a;

    function b() {
      if (e++ > 0) {
        return;
      }

      if (!f) {
        f = document.head || document.getElementsByTagName("head")[0];
      }

      if (!c) {
        var k = f.getElementsByTagName("link");

        for (var j = 0, h = k.length; j < h; ++j) {
          if (k[j].rel === "stylesheet") {
            c = k[j];
            break;
          }
        }
      }

      if (!a) {
        a = document.createElement("style");
        c ? f.insertBefore(a, c) : f.appendChild(a);
        a.setAttribute("type", "text/css");

        if (a.styleSheet) {
          a.styleSheet.cssText = d;
        } else {
          a.appendChild(document.createTextNode(d));
        }
      } else {
        c ? f.insertBefore(a, c) : f.appendChild(a);
      }
    }

    function g() {
      if (e === 0) {
        return;
      }

      if (--e === 0) {
        f.removeChild(a);
      }
    }

    return {
      use: b,
      unuse: g
    };
  }("#core-exception{position:relative}#core-exception .image-block{padding:10% 20%}#core-exception .image-block img{width:100%;height:100%}#core-exception .content-block{text-align:center}#core-exception .content-block h1{color:#434e59;font-size:72px;font-weight:600;line-height:72px;margin-bottom:24px}#core-exception .content-block .desc{color:rgba(0,0,0,.45);font-size:20px;line-height:28px;margin-bottom:16px}");
});