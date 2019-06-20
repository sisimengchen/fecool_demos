window.__args = JSON.parse("{\"param\":\"\u6211\u662F\u6784\u5EFA\u53C2\u6570\",\"buildTimestamp\":1561039577815,\"env\":\"production\"}");
define("https://sisimengchen.github.io/fecool_demos/components/Error/config.js",["exports"],function(_exports){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.default=void 0;var _=_interopRequireDefault("https://sisimengchen.github.io/fecool_demos/components/Error/assets/403.2dda86ad45caee58c927e111fe3c8071.svg");var _2=_interopRequireDefault("https://sisimengchen.github.io/fecool_demos/components/Error/assets/404.9ed13bbe02debb8e23db19a4e6603c2e.svg");var _3=_interopRequireDefault("https://sisimengchen.github.io/fecool_demos/components/Error/assets/500.990ae4d0c56d16d2ffdab6d924b6a179.svg");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var config={403:{img:_.default,title:"403",desc:"\u62B1\u6B49\uFF0C\u60A8\u65E0\u6743\u8BBF\u95EE\u8BE5\u9875\u9762\uFF01"},404:{img:_2.default,title:"404",desc:"\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\uFF01"},500:{img:_3.default,title:"500",desc:"\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u51FA\u9519\u4E86\uFF01"}};var _default=config;_exports.default=_default});
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
define("https://sisimengchen.github.io/fecool_demos/components/Error/index.js",["exports","https://sisimengchen.github.io/fecool_demos/common_modules/react.js","https://sisimengchen.github.io/fecool_demos/components/Error/config.js","https://sisimengchen.github.io/fecool_demos/components/Error/index.less.js"],function(_exports,_react,_config,_index){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.default=void 0;_react=_interopRequireDefault(_react);_config=_interopRequireDefault(_config);_index=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key]}}return target}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}_index.default.use();var CoreException=function CoreException(_ref){var _ref$type=_ref.type,type=_ref$type===void 0?"404":_ref$type,title=_ref.title,desc=_ref.desc,img=_ref.img,actions=_ref.actions,rest=_objectWithoutProperties(_ref,["type","title","desc","img","actions"]);return _react.default.createElement("div",Object.assign({id:"core-exception"},rest),_react.default.createElement("div",{className:"image-block"},_react.default.createElement("img",{src:img||_config.default[type].img})),_react.default.createElement("div",{className:"content-block"},_react.default.createElement("h1",null,title||_config.default[type].title),_react.default.createElement("div",{className:"desc"},desc||_config.default[type].desc)))};var _default=CoreException;_exports.default=_default});
define("https://sisimengchen.github.io/fecool_demos/components/Error/404.js",["exports","https://sisimengchen.github.io/fecool_demos/common_modules/react.js","https://sisimengchen.github.io/fecool_demos/components/Error/index.js"],function(_exports,_react,_index){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.default=void 0;_react=_interopRequireDefault(_react);_index=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var NotFound=function NotFound(){return _react.default.createElement(_index.default,{type:"404",style:{minHeight:500,height:"80%"}})};var _default=NotFound;_exports.default=_default});