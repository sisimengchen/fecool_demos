window.__args = JSON.parse("{\"x\":1,\"buildTimestamp\":1559202972813,\"env\":\"production\"}");
define("https://sisimengchen.github.io/fecool_demos/pages/home/index.less.js", function () {
  return function (style) {
    var useCount = 0;
    var headElement;
    var firstLinkElement;
    var styleElement;

    function use() {
      if (useCount++ > 0) {
        return;
      }

      if (!headElement) {
        headElement = document.head || document.getElementsByTagName('head')[0];
      }

      if (!firstLinkElement) {
        var linkElements = headElement.getElementsByTagName('link');

        for (var i = 0, l = linkElements.length; i < l; ++i) {
          if (linkElements[i].rel === 'stylesheet') {
            firstLinkElement = linkElements[i];
            break;
          }
        }
      }

      if (!styleElement) {
        styleElement = document.createElement('style');
        firstLinkElement ? headElement.insertBefore(styleElement, firstLinkElement) : headElement.appendChild(styleElement);
        styleElement.setAttribute('type', 'text/css');

        if (styleElement.styleSheet) {
          styleElement.styleSheet.cssText = style;
        } else {
          styleElement.appendChild(document.createTextNode(style));
        }
      } else {
        firstLinkElement ? headElement.insertBefore(styleElement, firstLinkElement) : headElement.appendChild(styleElement);
      }
    }

    function unuse() {
      if (useCount === 0) {
        return;
      }

      if (--useCount === 0) {
        headElement.removeChild(styleElement);
      }
    }

    return {
      use: use,
      unuse: unuse
    };
  }(".pages-home .single-foo-menu{position:absolute;z-index:90!important;width:100%}.pages-home .single-menu-active .single-top-nav-bar{z-index:90}.pages-home .single-top-nav-bar{position:relative;background-color:#008ae6;color:#fff}.pages-home .am-navbar-title{color:#fff!important}.pages-home .menu-mask{position:absolute;top:0;width:100%;height:100%;background-color:#000;opacity:.4;z-index:89}.pages-home .result-example .spe{width:60px;height:60px}.pages-home .sub-title{color:#888;font-size:14px;padding:30px 0 18px;margin-left:15px}");
});