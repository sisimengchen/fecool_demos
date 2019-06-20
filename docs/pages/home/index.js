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
define("https://sisimengchen.github.io/fecool_demos/pages/home/index.js",["exports","https://sisimengchen.github.io/fecool_demos/common_modules/react.js","https://sisimengchen.github.io/fecool_demos/common_modules/antd-mobile.js","https://sisimengchen.github.io/fecool_demos/pages/home/index.less.js"],function(_exports,_react,_antdMobile,_index){"use strict";Object.defineProperty(_exports,"__esModule",{value:true});_exports.default=void 0;_react=_interopRequireWildcard(_react);_index=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):{};if(desc.get||desc.set){Object.defineProperty(newObj,key,desc)}else{newObj[key]=obj[key]}}}}newObj.default=obj;return newObj}}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}_index.default.use();var data=[{value:"1",label:"Food"},{value:"2",label:"Supermarket"},{value:"3",label:"Extra",isLeaf:true}];var myImg=function myImg(src){return _react.default.createElement("img",{src:src,className:"spe am-icon am-icon-md",alt:""})};var ResultExample=function ResultExample(){return _react.default.createElement("div",{className:"result-example"},_react.default.createElement("div",{className:"sub-title"},"\u652F\u4ED8\u6210\u529F"),_react.default.createElement(_antdMobile.Result,{img:myImg("https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"),title:"\u652F\u4ED8\u6210\u529F",message:_react.default.createElement("div",null,"998.00\u5143 ",_react.default.createElement("del",null,"1098\u5143"))}),_react.default.createElement(_antdMobile.WhiteSpace,null),_react.default.createElement("div",{className:"sub-title"},"\u9A8C\u8BC1\u6210\u529F"),_react.default.createElement(_antdMobile.Result,{img:_react.default.createElement(_antdMobile.Icon,{type:"check-circle",className:"spe",style:{fill:"#1F90E6"}}),title:"\u9A8C\u8BC1\u6210\u529F",message:"\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1"}),_react.default.createElement(_antdMobile.WhiteSpace,null),_react.default.createElement("div",{className:"sub-title"},"\u652F\u4ED8\u5931\u8D25"),_react.default.createElement(_antdMobile.Result,{img:_react.default.createElement(_antdMobile.Icon,{type:"cross-circle-o",className:"spe",style:{fill:"#F13642"}}),title:"\u652F\u4ED8\u5931\u8D25",message:"\u6240\u9009\u94F6\u884C\u5361\u4F59\u989D\u4E0D\u8DB3"}),_react.default.createElement(_antdMobile.WhiteSpace,null),_react.default.createElement("div",{className:"sub-title"},"\u7B49\u5F85\u5904\u7406"),_react.default.createElement(_antdMobile.Result,{img:myImg("https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"),title:"\u7B49\u5F85\u5904\u7406",message:"\u5DF2\u63D0\u4EA4\u7533\u8BF7\uFF0C\u7B49\u5F85\u94F6\u884C\u5904\u7406"}),_react.default.createElement(_antdMobile.WhiteSpace,null),_react.default.createElement("div",{className:"sub-title"},"\u64CD\u4F5C\u5931\u8D25"),_react.default.createElement(_antdMobile.Result,{img:myImg("https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"),title:"\u65E0\u6CD5\u5B8C\u6210\u64CD\u4F5C",message:"\u7531\u4E8E\u4F60\u7684\u652F\u4ED8\u5B9D\u8D26\u6237\u8FD8\u672A\u7ED1\u5B9A\u6DD8\u5B9D\u8D26\u6237\u8BF7\u767B\u8BF7\u767B\u5F55www.taobao.com"}))};var HomePage=function(_Component){_inherits(HomePage,_Component);function HomePage(){var _getPrototypeOf2;var _this;_classCallCheck(this,HomePage);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(HomePage)).call.apply(_getPrototypeOf2,[this].concat(args)));_defineProperty(_assertThisInitialized(_this),"onChange",function(value){var label="";data.forEach(function(dataItem){if(dataItem.value===value[0]){label=dataItem.label;if(dataItem.children&&value[1]){dataItem.children.forEach(function(cItem){if(cItem.value===value[1]){label+=" ".concat(cItem.label)}})}}});console.log(label)});_defineProperty(_assertThisInitialized(_this),"handleClick",function(e){e.preventDefault();_this.setState({show:!_this.state.show});if(!_this.state.initData){setTimeout(function(){_this.setState({initData:data})},500)}});_defineProperty(_assertThisInitialized(_this),"onMaskClick",function(){_this.setState({show:false})});_this.state={};_this.state={initData:"",show:false};return _this}_createClass(HomePage,[{key:"render",value:function render(){var _this$state=this.state,initData=_this$state.initData,show=_this$state.show;var menuEl=_react.default.createElement(_antdMobile.Menu,{className:"single-foo-menu",data:initData,value:["1"],level:1,onChange:this.onChange,height:document.documentElement.clientHeight*0.6});var loadingEl=_react.default.createElement("div",{style:{position:"absolute",width:"100%",height:document.documentElement.clientHeight*0.6,display:"flex",justifyContent:"center"}},_react.default.createElement(_antdMobile.ActivityIndicator,{size:"large"}));return _react.default.createElement("div",{className:show?"pages-home single-menu-active":"pages-home"},_react.default.createElement("div",null,_react.default.createElement(_antdMobile.NavBar,{leftContent:"\u83DC\u5355",mode:"light",onLeftClick:this.handleClick,className:"single-top-nav-bar"},"\u9996\u9875")),show?initData?menuEl:loadingEl:null,show?_react.default.createElement("div",{className:"menu-mask",onClick:this.onMaskClick}):null,_react.default.createElement(ResultExample,null))}}]);return HomePage}(_react.Component);_exports.default=HomePage});