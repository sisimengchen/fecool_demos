window.__args = JSON.parse("{\"param\":\"\u6211\u662F\u6784\u5EFA\u53C2\u6570\",\"buildTimestamp\":1561039577815,\"env\":\"production\"}");
define("https://sisimengchen.github.io/fecool_demos/pages/home/index.less.js", function () {
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
  }(".pages-home .single-foo-menu{position:absolute;z-index:90!important;width:100%}.pages-home .single-menu-active .single-top-nav-bar{z-index:90}.pages-home .single-top-nav-bar{position:relative;background-color:#008ae6;color:#fff}.pages-home .am-navbar-title{color:#fff!important}.pages-home .menu-mask{position:absolute;top:0;width:100%;height:100%;background-color:#000;opacity:.4;z-index:89}.pages-home .result-example .spe{width:60px;height:60px}.pages-home .sub-title{color:#888;font-size:14px;padding:30px 0 18px;margin-left:15px}");
});