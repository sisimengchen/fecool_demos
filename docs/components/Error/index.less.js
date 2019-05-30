window.__args = JSON.parse("{\"param\":\"\u6211\u662F\u6784\u5EFA\u53C2\u6570\",\"buildTimestamp\":1559207154317,\"env\":\"production\"}");
define("https://sisimengchen.github.io/fecool_demos/components/Error/index.less.js", function () {
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
  }("#core-exception{position:relative}#core-exception .image-block{padding:10% 20%}#core-exception .image-block img{width:100%;height:100%}#core-exception .content-block{text-align:center}#core-exception .content-block h1{color:#434e59;font-size:72px;font-weight:600;line-height:72px;margin-bottom:24px}#core-exception .content-block .desc{color:rgba(0,0,0,.45);font-size:20px;line-height:28px;margin-bottom:16px}");
});