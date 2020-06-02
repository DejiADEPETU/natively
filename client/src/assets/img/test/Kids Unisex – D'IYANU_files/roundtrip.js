try {
    __adroll.load_adroll_tpc(__adroll.render_advertisable_cell);
}
catch(e) {}

try {
        function __adroll__(){this.exp=8760;this.eexp=720;this.pv=1E11*Math.random();this.__adc="__ar_v4";this._loaded=this._broken=!1;this._url=2E3;this._kwl=300;this._r={};this._logs=[];this.cm_urls=[];this.consent_networks={facebook:"f",linkedin:"linkedin"};for(var a=Array(4),c=0;c<a.length;c++)a[c]=(Math.round(1E11*Math.random()).toString(16)+Array(9).join("0")).substr(0,8);this._set_global("adroll_sid",a.join(""));this.load_experiment_js();this.init_pixchk();["adroll_adv_id","adroll_pix_id"].forEach(function(a){window.hasOwnProperty(a)&&
("string"===typeof window[a]||window[a]instanceof String)&&(window[a]=window[a].replace(/[^A-Z0-9_]/g,""))})};__adroll__.prototype.load_consent_banner=function(a){window.document.getElementById("__adroll_consent_banner_el")||(2===a?this.is_under_experiment("tcfv2")&&this.add_script_element("s.adroll.com/j/consent_tcfv2.js",{id:"__adroll_consent_banner_el"}):this.is_under_experiment("tcfv2")||this.add_script_element("s.adroll.com/j/consent.js",{id:"__adroll_consent_banner_el"}))};__adroll__.prototype.get_consent_params=function(){return this.get("__adroll_consent_params")};
__adroll__.prototype.set_consent_params=function(a){this.set("__adroll_consent_params",a)};__adroll__.prototype.clear_consent_params=function(){this.del("__adroll_consent_params")};__adroll__.prototype.handle_null_consent=function(a){a||((a=this.get_consent_params())?this.call_consent_write(a):this.load_consent_banner(1))};
__adroll__.prototype.set_consent=function(a,c,b,d,e,m){if(0===arguments.length){if(!this._has_global("__adroll_consent"))return;a=this._global("__adroll_consent")}this._set_global("__adroll_consent",a);this._set_global("__adroll_consent_is_gdpr",b);this._set_global("__adroll_consent_data",m||{});d&&this._set_global("__adroll_consent_user_country",d);e&&this._set_global("__adroll_consent_adv_country",e);b&&this.load_consent_banner(2);null===a?this.handle_null_consent(c):(c||this.clear_consent_params(),
this._install_cmp&&this._install_cmp(),this._trigger_consent_event&&this._trigger_consent_event(),!1!==a&&(this.set_first_party_cookie(),this.call_next_tpc()))};__adroll__.prototype.cookieEnabled=function(){if(this._broken)return!1;this.set("_te_","1");return"1"===this.get("_te_")?(this.del("_te_"),!0):!1};__adroll__.prototype.get=function(a){var c=window.document.cookie;if(null===c)return this._broken=!0,null;var b;0>c.indexOf(a+"=")?c=null:(a=c.indexOf(a+"=")+a.length+1,b=c.indexOf(";",a),-1===b&&(b=c.length),c=c.substring(a,b),c=""===c?null:window.unescape(c));return c};
__adroll__.prototype.set=function(a,c,b){var d;b&&"number"===typeof b?(d=new Date,d.setTime(d.getTime()+36E5*b),b=d.toGMTString(),b="; expires="+b):b="";d="; domain="+window.location.hostname;c=window.escape(c);window.document.cookie=a+"="+c+b+"; path=/"+d+"; samesite=lax"};__adroll__.prototype.del=function(a){this.set(a,"",-8760)};
__adroll__.prototype.check_cookie=function(a,c){for(var b=a.split("|"),d=b.length-1;0<=d;d--)if(b[d]){var e=b[d].split(":");c===e[0]&&(e[2]=""+(parseInt(e[2])+1),b[d]=e.join(":"))}return b.join("|")};__adroll__.prototype.handle=function(a){var c=this.get(this.__adc)||"";-1!==c.indexOf(a)?this.set(this.__adc,this.check_cookie(c,a),this.exp):(a=[c,[a,this.get_date(this.eexp),"1"].join(":")].join("|"),this.set(this.__adc,a,this.exp))};
__adroll__.prototype.expire_old=function(){for(var a=this.get_date(!1),c=this.get(this.__adc),c=c?c.split("|"):[""],b=[],d=c.length-1;0<=d;d--)c[d]&&""!==c[d]&&c[d].split(":")[1]>a&&b.push(c[d]);this.set(this.__adc,b.join("|"),this.exp)};__adroll__.prototype.get_date=function(a){var c=new Date;a&&c.setTime(c.getTime()+36E5*a);a=""+c.getUTCFullYear();var b=c.getUTCMonth(),b=10<=b?b:"0"+b,c=c.getUTCDate();return[a,b,10<=c?c:"0"+c].join("")};
__adroll__.prototype.set_pixel_cookie=function(a,c){this.handle(a);this.handle(c)};__adroll__.prototype.consent_allowed=function(a){var c=this._global("__adroll_consent");return"object"===typeof c?c[a]:c};__adroll__.prototype.listenToEvent=function(a,c,b){a.addEventListener?a.addEventListener(c,this.wrapException(b),!1):a.attachEvent("on"+c,this.wrapException(b))};__adroll__.prototype._head=function(){return(window.document.getElementsByTagName("head")||[null])[0]||(window.document.getElementsByTagName("body")||[null])[0]||window.document.getElementsByTagName("script")[0].parentNode};__adroll__.prototype.runCookieMatch=function(){var a=this.cm_urls.length;if(!(0>=a))for(var c=0;c<=a;c++)this.popAndSend()};
__adroll__.prototype.popAndSend=function(){if(!(0>=this.cm_urls.length)){var a=this.cm_urls.shift(),c=new Image;c.src=a;c.setAttribute("alt","")}};__adroll__.prototype.add_param_to_url=function(a,c){var b=a.indexOf("?"),d="",e="";-1!==b?(d=a.slice(0,b+1),e="&"+a.slice(b+1)):(b=a.indexOf("#",-1===b?0:b),-1===b?d=a+"?":(d=a.slice(0,b)+"?",e=a.slice(b)));return d+c+e};__adroll__.prototype.dyno=function(a,c){if(a){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===b.HEADERS_RECEIVED){var d=this.parseDynoResponseHeader(b.getAllResponseHeaders());this._queueAndCallback("dyno",[a,c,d])}}.bind(this);var d=this.get_segment_url(this._global("adroll_adv_id"),this._global("adroll_pix_id"),c);b.open("GET",d,!0);b.withCredentials=!0;b.send()}};__adroll__.prototype.registerDynoCallback=function(a,c){this._registerCallback("dyno",a,c)};
__adroll__.prototype.parseDynoResponseHeader=function(a){var c={};if(!a)return c;a=a.split("\r\n");for(var b=0,d=a.length;b<d;b++){var e=a[b],m=e.indexOf(": ");if(0<m){var n=e.substring(0,m);this.startsWith(n.toLowerCase(),"x-")&&(c[n.toLowerCase()]=e.substring(m+2))}}return c};__adroll__.prototype.is_under_experiment=function(a){return window.adroll_exp_list&&0<=window.adroll_exp_list.indexOf(a)};__adroll__.prototype.load_experiment_js=function(){var a=window.document.getElementById("adroll_scr_exp");return a?a:this.add_script_element("https://s.adroll.com/j/exp/"+window.adroll_adv_id+"/index.js",{id:"adroll_scr_exp",onError:"window.adroll_exp_list = [];"})};__adroll__.prototype.is_experiment_js_loaded=function(){return!!window.adroll_exp_list};
__adroll__.prototype.is_test_advertisable=function(){return"ADV_EID"===this._global("adroll_adv_id")};__adroll__.prototype.if_under_experiment_js=function(a,c,b,d){var e=this;this.load_experiment_js();this.on_experiment_loaded(function(){e.is_under_experiment(a)?c.call(e):b.call(e)},d)};
__adroll__.prototype.on_experiment_loaded=function(a,c){function b(){if(e.is_experiment_js_loaded()||e.is_test_advertisable())d=!0;d?a.call(e):window.setTimeout(b,10)}var d=!1,e=this;window.setTimeout(function(){d=!0},c||500);b()};__adroll__.prototype.external_data_to_qs=function(a,c){var b=[];if(!a)return null;for(var d in a)a.hasOwnProperty(d)&&this._is_defined(a[d])&&null!==a[d]&&b.push(this.normalize_var(window.escape(""+d)+"="+window.escape(""+a[d]),!1));b=b.join("&");c&&(b=window.escape(b));return"adroll_external_data="+b};
__adroll__.prototype.get_page_properties=function(){if(this._has_global("adroll_page_properties")){var a=this._global("adroll_page_properties"),c={},b;for(b in a)a.hasOwnProperty(b)&&"undefined"!==a[b]&&(c[b.toLowerCase()]=a[b]);return c}return null};
__adroll__.prototype.parse_conversion_attrs=function(a){if(!a)return null;for(var c={},b=["conv_value","conversion_value"],d=["adroll_currency","currency"],e=0;e<b.length;e++)if(a.hasOwnProperty(b[e])){c.conv_value=a[b[e]];break}for(b=0;b<d.length;b++)if(a.hasOwnProperty(d[b])){c.currency=a[d[b]];break}return 1<=Object.keys(c).length?c:null};
__adroll__.prototype.get_conversion_value=function(a){var c=this._ensure_global("adroll_currency",null),b=this._ensure_global("adroll_conversion_value",null),d=this._ensure_global("adroll_conversion_value_in_dollars",null);return(a=this.parse_conversion_attrs(a))?a:b?{conv_value:""+b,currency:c}:d?{conv_value:""+parseInt(100*d),currency:"USC"}:null};__adroll__.prototype._has_global=function(a){return this._is_defined(this._global(a))};__adroll__.prototype._global=function(a){return window[a]};__adroll__.prototype._set_global=function(a,c){window[a]=c};__adroll__.prototype._unset_global=function(a){delete window[a]};__adroll__.prototype._ensure_global=function(a,c){this._has_global(a)||this._set_global(a,c);return this._global(a)};__adroll__.prototype.jsonStringify=function(a){this.jsonStringifyFunc||this.initJsonStringify();return this.jsonStringifyFunc(a)};__adroll__.prototype.jsonParse=function(a){var c=this._global("JSON");return"function"===typeof c.parse?c.parse(a):eval("("+a+")")};
__adroll__.prototype.initJsonStringify=function(){var a=this._global("JSON");this.jsonStringifyFunc=a||a.stringify&&"function"===typeof a.stringify?a.stringify:function(){function a(b){return e[b]||"\\u"+(b.charCodeAt(0)+65536).toString(16).substr(1)}var b=Object.prototype.toString,d=Array.isArray||function(a){return"[object Array]"===b.call(a)},e={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},m=/[\\"\u0000-\u001F\u2028\u2029]/g;return function p(k){if(null===k)return"null";
if("number"===typeof k)return isFinite(k)?k.toString():"null";if("boolean"===typeof k)return k.toString();if("object"===typeof k){if("function"===typeof k.toJSON)return p(k.toJSON());if(d(k)){for(var e="[",f=0;f<k.length;f++)e+=(f?", ":"")+p(k[f]);return e+"]"}if("[object Object]"===b.call(k)){e=[];for(f in k)k.hasOwnProperty(f)&&e.push(p(f)+": "+p(k[f]));return"{"+e.join(", ")+"}"}}return'"'+k.toString().replace(m,a)+'"'}}()};__adroll__.prototype.serialize=function(a){if(a.length){for(var c=[],b=a.length-1;0<=b;b--)c.push(a[b].join("="));return c.join("&")}return""};__adroll__.prototype.endswith=function(a,c){return-1!==a.indexOf(c,a.length-c.length)};__adroll__.prototype.buildurl=function(a,c){var b=this.serialize(c),d=a.indexOf("?");return b?d===a.length-1?a+b:-1!==d?"&"===a[a.length-1]?a+b:a+"&"+b:a+"?"+b:a};__adroll__.prototype.md5=function(){function a(a,b){var c=(a&65535)+(b&65535);return(a>>16)+(b>>16)+(c>>16)<<16|c&65535}function c(b,c,d,f,e,g){c=a(a(c,b),a(f,g));return a(c<<e|c>>>32-e,d)}function b(a,b,d,f,e,g,m){return c(b&d|~b&f,a,b,e,g,m)}function d(a,b,d,e,h,g,m){return c(b&e|d&~e,a,b,h,g,m)}function e(a,b,d,e,h,g,m){return c(d^(b|~e),a,b,h,g,m)}function m(m,k){var l=m[0],f=m[1],h=m[2],g=m[3],l=b(l,f,h,g,k[0],7,-680876936),g=b(g,l,f,h,k[1],12,-389564586),h=b(h,g,l,f,k[2],17,606105819),f=b(f,
h,g,l,k[3],22,-1044525330),l=b(l,f,h,g,k[4],7,-176418897),g=b(g,l,f,h,k[5],12,1200080426),h=b(h,g,l,f,k[6],17,-1473231341),f=b(f,h,g,l,k[7],22,-45705983),l=b(l,f,h,g,k[8],7,1770035416),g=b(g,l,f,h,k[9],12,-1958414417),h=b(h,g,l,f,k[10],17,-42063),f=b(f,h,g,l,k[11],22,-1990404162),l=b(l,f,h,g,k[12],7,1804603682),g=b(g,l,f,h,k[13],12,-40341101),h=b(h,g,l,f,k[14],17,-1502002290),f=b(f,h,g,l,k[15],22,1236535329),l=d(l,f,h,g,k[1],5,-165796510),g=d(g,l,f,h,k[6],9,-1069501632),h=d(h,g,l,f,k[11],14,643717713),
f=d(f,h,g,l,k[0],20,-373897302),l=d(l,f,h,g,k[5],5,-701558691),g=d(g,l,f,h,k[10],9,38016083),h=d(h,g,l,f,k[15],14,-660478335),f=d(f,h,g,l,k[4],20,-405537848),l=d(l,f,h,g,k[9],5,568446438),g=d(g,l,f,h,k[14],9,-1019803690),h=d(h,g,l,f,k[3],14,-187363961),f=d(f,h,g,l,k[8],20,1163531501),l=d(l,f,h,g,k[13],5,-1444681467),g=d(g,l,f,h,k[2],9,-51403784),h=d(h,g,l,f,k[7],14,1735328473),f=d(f,h,g,l,k[12],20,-1926607734),l=c(f^h^g,l,f,k[5],4,-378558),g=c(l^f^h,g,l,k[8],11,-2022574463),h=c(g^l^f,h,g,k[11],16,
1839030562),f=c(h^g^l,f,h,k[14],23,-35309556),l=c(f^h^g,l,f,k[1],4,-1530992060),g=c(l^f^h,g,l,k[4],11,1272893353),h=c(g^l^f,h,g,k[7],16,-155497632),f=c(h^g^l,f,h,k[10],23,-1094730640),l=c(f^h^g,l,f,k[13],4,681279174),g=c(l^f^h,g,l,k[0],11,-358537222),h=c(g^l^f,h,g,k[3],16,-722521979),f=c(h^g^l,f,h,k[6],23,76029189),l=c(f^h^g,l,f,k[9],4,-640364487),g=c(l^f^h,g,l,k[12],11,-421815835),h=c(g^l^f,h,g,k[15],16,530742520),f=c(h^g^l,f,h,k[2],23,-995338651),l=e(l,f,h,g,k[0],6,-198630844),g=e(g,l,f,h,k[7],
10,1126891415),h=e(h,g,l,f,k[14],15,-1416354905),f=e(f,h,g,l,k[5],21,-57434055),l=e(l,f,h,g,k[12],6,1700485571),g=e(g,l,f,h,k[3],10,-1894986606),h=e(h,g,l,f,k[10],15,-1051523),f=e(f,h,g,l,k[1],21,-2054922799),l=e(l,f,h,g,k[8],6,1873313359),g=e(g,l,f,h,k[15],10,-30611744),h=e(h,g,l,f,k[6],15,-1560198380),f=e(f,h,g,l,k[13],21,1309151649),l=e(l,f,h,g,k[4],6,-145523070),g=e(g,l,f,h,k[11],10,-1120210379),h=e(h,g,l,f,k[2],15,718787259),f=e(f,h,g,l,k[9],21,-343485551);m[0]=a(l,m[0]);m[1]=a(f,m[1]);m[2]=
a(h,m[2]);m[3]=a(g,m[3])}var n="0123456789abcdef".split("");return function(a){var b=a;/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b)));var c=b.length;a=[1732584193,-271733879,-1732584194,271733878];var d;for(d=64;d<=b.length;d+=64){for(var e=b.substring(d-64,d),g=[],q=void 0,q=0;64>q;q+=4)g[q>>2]=e.charCodeAt(q)+(e.charCodeAt(q+1)<<8)+(e.charCodeAt(q+2)<<16)+(e.charCodeAt(q+3)<<24);m(a,g)}b=b.substring(d-64);e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(d=0;d<b.length;d++)e[d>>2]|=b.charCodeAt(d)<<(d%
4<<3);e[d>>2]|=128<<(d%4<<3);if(55<d)for(m(a,e),d=0;16>d;d++)e[d]=0;e[14]=8*c;m(a,e);for(b=0;b<a.length;b++){c=a;d=b;e=a[b];g="";for(q=0;4>q;q++)g+=n[e>>8*q+4&15]+n[e>>8*q&15];c[d]=g}return a.join("")}}();__adroll__.prototype._gurl=function(){var a=window.location;return this.normalize_url(a.pathname+a.search)};__adroll__.prototype.get_dummy_product_for_facebook=function(a){return{product_id:"adroll_dummy_product",product_group:a,product_action:null,product_category:null}};__adroll__.prototype.facebook_dummy_product_enabled=function(){return!0};
__adroll__.prototype.extract_pid=function(a,c,b,d,e){a||(a={});var m=null,n=this._gurl(),m=null;if("2.0"!==this.get_version())return null;m="productView"===c?"":c;c=null;b&&(c=b.products);c&&0!==c.length||(c=this.extract_product_from_rollcrawl_opts(a,n));a=[];if(c)for(b=0;b<c.length;b++)n=c[b].product_id,null!==n&&""!==n&&"undefined"!==n&&a.push(c[b]);if(a&&0!==a.length)m={product_action:m,product_list:a};else if(this.facebook_dummy_product_enabled()&&"facebook"===d)m=this.get_dummy_product_for_facebook(null);
else return null;e&&e(m);return m};
__adroll__.prototype.extract_product_from_rollcrawl_opts=function(a,c){function b(a){return a?(a=new RegExp(a,"gi"),!!a.exec(c)):null}var d=null,e=null,m=null;if(a.regexp_group&&!("string"===a.regexp_group&&a.regexp_group instanceof String)&&"html"===a.regexp_group.scheme){if(b(a.blacklist_regexp)||!0!==b(a.regexp))return"";d=this.get_product_id_from_dom(a.regexp_group)}else if(!d){if(b(a.blacklist_regexp))return"";d=this.get_product_id_from_url(c,a.regexp,a.regexp_group)}e||!a.product_group_group||
"string"===a.product_group_group&&a.product_group_group instanceof String||"html"!==a.product_group_group.scheme?e||a.product_group_regexp&&(e=this.get_product_id_from_url(c,a.product_group_regexp,a.product_group_group)):e=this.get_product_id_from_dom(a.product_group_group);if(d){var n={},m=[];n.product_id=d;n.product_group=e;m.push(n)}return m};
__adroll__.prototype.get_pid=function(a){var c=function(b,c){this.is_product_event(b)&&this.extract_pid(a,b,c,"adroll",function(a){if(a){var m=a.product_action,n=a.product_list;if(n&&0!==n.length){a=this.copyObj(c)||{};var p=[];m&&p.push(["adroll_product_action",this.normalize_var((m+"").toLowerCase(),!0)]);n&&(p.push(["adroll_products",window.encodeURIComponent(this.jsonStringify(n))]),a.products||(a.products=n));p.push(["adroll_version",this.get_version()]);(m=this.external_data_to_qs(c,!0))&&p.push([m]);
m=this._srv(this.buildurl("/p/"+this._global("adroll_adv_id")+"/",p));p=window.document.createElement("img");p.src=m;p.height=p.width=1;p.border=0;p.setAttribute("alt","");this._head().appendChild(p);this._callUserEventEndpoint(b,a)}}}.bind(this))}.bind(this);this.registerTrackCallback(c,"productEventCallback")};
__adroll__.prototype.get_product_id_from_dom=function(a){var c=null,b;a.path&&(window.jQuery?(b=window.jQuery(a.path),b.length&&(b=b.eq(0),c="text"===a.attribute?b.text():b.attr(a.attribute))):window.Prototype&&window.$$?(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.innerText&&!window.opera?b.innerText:b.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g," "):b.readAttribute(a.attribute))):window.YUI?(b=window.YUI().use("node"),b.one&&(b=b.one(a.path),c=null,b&&(c="text"===
a.attribute?b.get("text"):b.getAttribute(a.attribute)))):window.$$&&(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.get("text"):b.getProperty(a.attribute))));if(c&&(c=c.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a.regular_expression&&a.regular_expression_replace))if(b=new RegExp(a.regular_expression,"gi"),c=b.exec(c),null!==c){a=a.regular_expression_replace;for(b=0;b<c.length;b++)a=a.replace(new RegExp("\\\\"+b,"gi"),c[b]||"");c=a}else c="";return c};
__adroll__.prototype.get_product_id_from_url=function(a,c,b){var d=null;try{d=parseInt(b)}catch(e){}return null!==d&&!isNaN(d)&&c&&(a=(new RegExp(c,"gi")).exec(a),null!==a&&d in a)?a[d]:null};__adroll__.prototype.get_segment_url=function(a,c,b){this.expire_old();var d=this.get_keywords(),e=[];try{e.push("adroll_s_ref="+window.escape(window.document.referrer))}catch(h){}try{e.push("keyw="+window.escape(d))}catch(h){}try{var m=b.segment_name;this.is_null_or_blank(m)||e.push("name="+window.escape(m.toLowerCase()))}catch(h){}try{var n=this.get_conversion_value(b);n.conv_value&&e.push("conv_value="+n.conv_value);n.currency&&e.push("adroll_currency="+n.currency)}catch(h){}try{var p=b.adroll_email;
if(!this.is_null_or_blank(p)){var p=p.replace(/^\s+|\s+$/g,""),k=p.toLowerCase();this.is_already_hashed(k)?e.push("hashed_email="+k):this.is_email_valid(p)?e.push("hashed_email="+this.md5(k)):(e.push("data_error=email"),e.push("data_error_message=invalid_format"))}}catch(h){}try{if(this._has_user_identifier()){var l=this._global("adroll_user_identifier"),l=l.replace(/^\s\s*/,"").replace(/\s\s*$/,"");e.push("user_identifier="+window.encodeURIComponent(l))}}catch(h){}try{var f=this.external_data_to_qs(b,
!0);f&&e.push(f)}catch(h){}e.push("adroll_version="+this.get_version());return this._srv(this.get_base_url("/segment",a,c,null,"",e))};
__adroll__.prototype.loadGlobalFunctions=function(){var a=this._global("adroll");if(a&&"object"===typeof a){var c=this;a.setProperties=function(){return c.setProperties.apply(c,arguments)};a.identify=function(){return c.identify.apply(c,arguments)};a.track=function(){return c.track.apply(c,arguments)};for(var b,d,e=0;e<a.length;e++)b=a[e][0],d=a[e][1],"setProperties"===b?this.setProperties.apply(this,d):"identify"===b?this.identify.apply(this,d):"track"===b&&this.track.apply(this,d)}};
__adroll__.prototype.get_base_url=function(a,c,b,d,e,m){var n=a.split("?");a=n[0]+"/"+c+"/"+b+(d?"/"+d:"")+(e?"/"+e:"");var p="?";n[1]&&(a+="?"+n[1],p="&");var n=p+"no-cookies=1&pv=",k="";this.cookieEnabled()?(k=window.escape(this.get_eids()),a+=p+"pv="+this.pv+"&cookie="+k):a+=n+this.pv;m&&(a+="&"+m.join("&"));a=this.add_tpc_to_url(a);if(a.length>this._url){this.del(this.__adc);if(a.length-k.length>this._url)return a;this.log("Url was too big, shrinking it");return this.get_url(c,b,d,e,m)}this.log("Generated url: "+
a);return a};__adroll__.prototype.add_script_element=function(a,c){var b=window.document.createElement("script"),d=this._secure()?"https://":"http://";a.match(/^(\w+:)*\/\//)&&(d="");for(var e in c)c.hasOwnProperty(e)&&"src"!==e&&b.setAttribute(e,c[e]);b.type="text/javascript";b.src=d+a;this._head().appendChild(b);return b};__adroll__.prototype.get_url=function(a,c,b,d,e){var m=b?this._srv("/c"):this._srv("/r");return this.get_base_url(m,a,c,b,d,e)};
__adroll__.prototype.get_eids=function(){try{for(var a=this.get(this.__adc),c=a?a.split("|"):"",a=[],b=c.length-1;0<=b;b--)if(c[b]&&""!==c[b]){var d=c[b].split(":");a.push([d[0],d[2]].join(":"))}return a.join("|")}catch(e){return this.del(this.__adc),""}};__adroll__.prototype.record_adroll_email=function(a){if(this._has_email()){var c=this._global("_adroll_email"),c=c.replace(/^\s+|\s+$/g,""),b,d=c.toLowerCase(),c=this.is_email_valid(c);this.is_already_hashed(d)?b=d:c&&(b=this.md5(d));b=this._srv("/id/"+this._global("adroll_adv_id")+"/?hashed_email="+b);c&&(d=d.split("@")[1],b+="&email_domain="+window.encodeURIComponent(d));a&&(b+="&idsource="+a);this.imgRequest(b)}};
__adroll__.prototype._send_plain_text_identifiers=function(a,c,b){if((a||c)&&b){b=this._srv("/id/"+this._global("adroll_adv_id")+"/?idsource="+b);if(a){a=a.replace(/^\s+|\s+$/g,"").toLowerCase();var d=a.split("@")[1];b+="&email="+window.encodeURIComponent(a)+"&hashed_email="+this.md5(a)+"&email_domain="+window.encodeURIComponent(d)}c&&(b+="&user_identifier="+window.encodeURIComponent(c));this.imgRequest(b)}};__adroll__.prototype._has_email=function(){return this._has_global("_adroll_email")};
__adroll__.prototype._has_user_identifier=function(){return this._has_global("adroll_user_identifier")&&"example_user_id"!==this._global("adroll_user_identifier")};__adroll__.prototype.is_already_hashed=function(a){return/^[a-f0-9]{32}$/.test(a)};__adroll__.prototype.is_email_valid=function(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)};
__adroll__.prototype.identify=function(a,c){(a.email||a.userId)&&this._send_plain_text_identifiers(a.email,a.userId,c||"adroll-identify");a.email&&this._set_global("_adroll_email",a.email);var b=this.copyObj(a,["email","userId"]);b&&(b=this._srv("/uat/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?user_attributes="+window.encodeURIComponent(this.jsonStringify(b))),c&&(b+="&idsource="+c),this.imgRequest(b));this._queueAndCallback("identify",[a,c])};
__adroll__.prototype.setProperties=function(a){if(this._has_global("adroll_page_properties")){var c=this._global("adroll_page_properties");this._unset_global("adroll_page_properties");this.extendObj(c,a);this._set_global("adroll_page_properties",c)}else this._set_global("adroll_page_properties",a)};__adroll__.prototype.appendPageProperties=function(a){this._has_global("adroll_page_properties")&&(a=this.extendObj(this._global("adroll_page_properties"),a));return a};
__adroll__.prototype._callUserEventEndpoint=function(a,c){var b=this._srv("/uev/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?event_name="+window.encodeURIComponent(a)+"&adroll_version="+this.get_version()),d=this.copyObj(c);if(d){b+="&event_attributes="+window.encodeURIComponent(this.jsonStringify(d));try{var e=this.get_conversion_value(d);e.conv_value&&(b+="&conv_value="+window.encodeURIComponent(e.conv_value));e.currency&&(b+="&adroll_currency="+window.encodeURIComponent(e.currency))}catch(m){}}this.imgRequest(b)};
__adroll__.prototype.track=function(a,c){a&&(c=c?this.appendPageProperties(c):this.get_page_properties(),"pageView"===a?this.dyno("fbDynoCallback",c):(this.is_product_event(a)?this.get_pid(this._global("adroll_rollcrawl_opts")):this._callUserEventEndpoint(a,c),this._queueAndCallback("track",[a,c])))};
__adroll__.prototype._registerCallback=function(a,c,b){this.callbacks=this.callbacks||{};this.callbackNames=this.callbackNames||[];this.callbacks[a]=this.callbacks[a]||[];if(!("function"!==typeof c||-1<this.callbackNames.indexOf(b))&&(this.callbackNames.push(b),this.callbacks[a].push(c),this.callbackQueues&&this.callbackQueues[a]&&this.callbackQueues[a].length))for(b=0;b<this.callbackQueues[a].length;b++)c.apply(null,this.callbackQueues[a][b])};
__adroll__.prototype._queueAndCallback=function(a,c){this.callbackQueues=this.callbackQueues||{};this.callbackQueues[a]=this.callbackQueues[a]||[];this.callbackQueues[a].push(c);if(this.callbacks&&this.callbacks[a]&&this.callbacks[a].length)for(var b=0;b<this.callbacks[a].length;b++)this.callbacks[a][b].apply(null,c)};__adroll__.prototype.registerIdentifyCallback=function(a,c){this._registerCallback("identify",a,c)};
__adroll__.prototype.registerTrackCallback=function(a,c){this._registerCallback("track",a,c)};__adroll__.prototype._is_defined=function(a){return"undefined"===a||"null"===a?!1:"undefined"!==typeof a};__adroll__.prototype.is_null_or_blank=function(a){return null===a||!this._is_defined(a)||""===a.trim()};__adroll__.prototype.normalize_var=function(a,c){if(!a)return"";a=a.toString().substr(0,this._kwl).replace(/,/gi,".");c&&(a=window.escape(a));return a};__adroll__.prototype.get_version=function(){return this._has_global("adroll_version")?this._global("adroll_version"):"2.0"};
__adroll__.prototype.is_product_event=function(a){return-1!==this.product_events.indexOf(a)};__adroll__.prototype.get_keywords=function(){try{var a=window.document.referrer||"";if(!a)return"";var c=this.parseUri(a);return-1!==c.host.indexOf("www.google.")?c.queryKey.q.substring(0,this._kwl):-1!==c.host.indexOf("bing.com")?c.queryKey.q.substring(0,this._kwl):""}catch(b){return""}};
__adroll__.prototype.parseUri=function(a){a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var c={queryKey:{}},b=14,d="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");b--;)c[d[b]]=a[b]||"";c[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,d){b&&(c.queryKey[b]=d)});return c};
__adroll__.prototype.has_param_in_url=function(a,c){var b=a.split("?");return 1<b.length&&-1!==("&"+b[1]).indexOf("&"+c+"=")};__adroll__.prototype._srv=function(a){a=this._is_defined(a)?a:"";a=this.add_tpc_to_url("https://d.adroll.com"+a);this._has_global("__adroll_xid_ch")&&(a=this.add_param_to_url(a,"xid_ch="+(0!==this._global("__adroll_xid_ch")?"t":"f")));if(!this.has_param_in_url(a,"arrfrr")){var c=window.location.href.split("#")[0];a=this.add_param_to_url(a,"arrfrr="+encodeURIComponent(c))}return this.add_fpc_to_url(a)};
__adroll__.prototype._cdn=function(a){a=this._is_defined(a)?a:"";return"https://s.adroll.com"+a};__adroll__.prototype.log=function(a){this._logs.push(a)};__adroll__.prototype.read_log=function(a){return this._logs.join(a?"\n":"<br>\n")};__adroll__.prototype.normalize_url=function(a){return a.toLowerCase()};
__adroll__.prototype.imgRequest=function(a){var c=new window.Image;c.src=this.add_tpc_to_url(a);c.setAttribute("width","1");c.setAttribute("height","1");c.setAttribute("border","0");c.setAttribute("alt","");return this._head().appendChild(c)};
__adroll__.prototype.b64toint=function(a){function c(a,b){if(1>b)return"";if(b%2)return c(a,b-1)+a;var d=c(a,b/2);return d+d}var b="",d;a=a.replace("-","+").replace("_","/");for(var e=0;e<a.length;e++)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a[e]).toString(2),b=b+c("0",6-d.length)+d;return parseInt(b,2)};__adroll__.prototype.copyObj=function(a,c){if(!a)return null;var b={},d=0,e;for(e in a)!a.hasOwnProperty(e)||c&&-1!==c.indexOf(e)||(d++,b[e]=a[e]);return d?b:null};
__adroll__.prototype.extendObj=function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b]);return a};__adroll__.prototype.startsWith=function(a,c){return a.substring(0,c.length)===c};__adroll__.prototype.convert_to_map=function(a){if(null===a)return null;var c={},b;for(b in a)a.hasOwnProperty(b)&&"undefined"!==a[b]&&(c[b.toLowerCase()]=a[b]);return c};__adroll__.prototype.wrapException=function(a){return function(c){try{return a(c)}catch(b){}}};
__adroll__.prototype.add_tpc_to_url=function(a){var c=this._global("adroll_tpc");if(!a||!c)return a;var b=a.substr(a.indexOf("://")+3).split("/")[0];if(a.match(/[?&]adroll_tpc=/)&&"d.adroll.com"!==b)return a;0<(this._global("__adroll_xid_ch")||0)&&(c=c+"&xid_src="+(1===this._global("__adroll_xid_ch")?"cache":"srv"));return this.add_param_to_url(a,"adroll_tpc="+encodeURIComponent(c))};
__adroll__.prototype.add_fpc_to_url=function(a){var c=this.get_first_party_cookie();if(!a||!c)return a;var b=this.parseUri(a);return b.queryKey.adroll_fpc||"d.adroll.com"!==b.host&&"d.adroll.com"!==b.host+":"+b.port?a:this.add_param_to_url(a,"adroll_fpc="+encodeURIComponent(c))};__adroll__.prototype.getSafariVersion=function(){var a=/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(navigator.userAgent);return a?a[1]:null};
__adroll__.prototype.set_tpc=function(a,c){var b=this.tpc_callback();a&&c&&this._set_global("adroll_tpc",encodeURIComponent(a)+"="+encodeURIComponent(c));b&&b.call(this)};__adroll__.prototype.tpc_callback=function(a){var c=window.adroll_tpc_callback;window.adroll_tpc_callback=a;return a||window.adroll_xavier_called||(window.adroll_xavier_called=1,!this.call_xavier(c))?c:null};__adroll__.prototype.call_next_tpc=function(a){(a=this.tpc_callback(a))&&a.call(this)};
__adroll__.prototype.extract_query_param=function(a,c){for(var b=c.split("&"),d=0;d<b.length;d++){var e=b[d].split("=");if(decodeURIComponent(e[0])===a)return decodeURIComponent(e[1])}return null};__adroll__.prototype.get_adroll_sid=function(){var a=this.get_consent_params();return a&&(a=this.extract_query_param("_s",a))?a:this._global("adroll_sid")};__adroll__.prototype.call_consent_write=function(a){this.add_script_element(this._srv("/consent/write?"+a))};
__adroll__.prototype.call_consent_check=function(){var a=["_s="+this.get_adroll_sid(),"_b=2"];"#_ar_gdpr="===window.location.hash.substr(0,10)&&a.push("dbg="+unescape(window.location.hash.substr(10)));a="https://d.adroll.mgr.consensu.org/consent/iabcheck/"+this._global("adroll_adv_id")+"?"+a.join("&");this.add_script_element(a)};__adroll__.prototype.load_adroll_tpc=function(a){this.tpc_callback(a);if(this._consent_checked)return this.set_consent();this._consent_checked=!0;this.call_consent_check()};
__adroll__.prototype.get_tpc_decode_timeout=function(){return 1500};
__adroll__.prototype.call_xavier=function(a){function c(){window.RetrieveAdID&&(d=!0);if(d)if(window.RetrieveAdID){b.tpc_callback(a);var k=window.setTimeout(function(){b.set_tpc(null)},b.get_tpc_decode_timeout());window.RetrieveAdID(function(a){a&&(b._set_global("__adroll_xid_ch",1),window.clearTimeout(k),b.set_tpc(e,a))},function(a){b._set_global("__adroll_xid_ch",2);window.clearTimeout(k);b.set_tpc(e,a)})}else b._set_global("__adroll_xid_ch",0),a&&a.call(b);else window.setTimeout(function(){c()},
10)}var b=this,d=!1,e="xavier",m=navigator.userAgent.toLowerCase();if("US"!==this._global("__adroll_consent_user_country")||window.location.hostname.match(/(rakuten\.co\.jp|summo\.jp|goo-net\.com|dmm\.com|beforward\.jp)$/))return b._set_global("__adroll_xid_ch",0),!1;if(0<=m.indexOf("(linux; android ")){var e="xaviera",n=m.substr(m.indexOf("linux; android ")+15).split(/\W/),m=parseInt(n[0]),p=parseInt(n[1]),n=parseInt(n[2]);if(isNaN(m)||4>m||4===m&&isNaN(p)||4===m&&0===p&&(isNaN(n)||3>n))return b._set_global("__adroll_xid_ch",
0),!1}else if(!navigator.userAgent.match(/\b(iPad|iPhone|iPod)\b/)||9>parseInt(m.substr(m.indexOf(") version/")+10),10))return b._set_global("__adroll_xid_ch",0),!1;window.setTimeout(function(){d=!0},this.get_tpc_decode_timeout());if(this.is_under_experiment("xid_blacklist"))return!1;this.is_under_experiment("xid_test")?this.add_script_element("https://s.dca0.com/sdk.v4.0.min.js?nocache=v4.0"):this.add_script_element("https://s.dca0.com/sdk.v3.6.min.js?1587652711");c();return!0};
__adroll__.prototype._secure=function(){return!0};__adroll__.prototype.set_first_party_cookie=function(){var a=this.get_first_party_cookie();a||(a=this.md5((new Date).getTime()+Math.round(1E11*Math.random())+window.navigator.userAgent.toLowerCase()+window.document.referrer)+"-"+Date.now());this.set("__adroll_fpc",a,8766)};__adroll__.prototype.get_first_party_cookie=function(){var a=this.get("__adroll_fpc");return a?a.replace("-s2-","-").replace(/-$/,""):null};
__adroll__.prototype.init_pixchk=function(){this.if_under_experiment_js("pixchk",function(){window.addEventListener("message",this.pixchk_handler,!1)},function(){},1E3)};__adroll__.prototype.pixchk_handler=function(a){if(a.origin.match(/^https?:\/\/[^\/:]*\.adroll\.com\b/))try{var c=JSON.parse(a.data);"pixchk"===c.cmd&&a.source.postMessage(JSON.stringify({cmd:"pixrpl",adv_id:window.adroll_adv_id,pix_id:window.adroll_pix_id,token:c.token}),"*")}catch(b){}};
__adroll__.prototype.set_suspended=function(){this._set_global("__adroll_data_suspended",!0)};__adroll__.prototype.is_suspended=function(){return this._has_global("__adroll_data_suspended")};window.__adroll=window.__adroll||new __adroll__;


    __adroll__.prototype.render_advertisable_cell = function () {

        __adroll.segment_map = JSON.parse("{\"4VHS5ALOGJALTJROPOJ3G7\":{\"child\":\"4VHS5ALOGJALTJROPOJ3G7\",\"type\":\"s\"},\"ABUTJVIVRJAI7MH66RGEHI\":{\"child\":\"ABUTJVIVRJAI7MH66RGEHI\",\"type\":\"p\"},\"BGKPOHL7UBDBBDAI7KHTDS\":{\"child\":\"BGKPOHL7UBDBBDAI7KHTDS\",\"type\":\"s\"},\"CJV3BJJ2INEJRA257HNWGD\":{\"child\":\"CJV3BJJ2INEJRA257HNWGD,C5XAHLNXYFCXTOXLUB7CE7,2H6S74ITIFGVTAQFJ5HGIA\",\"type\":\"c\"},\"EFCURJ2SBVD2FL3TJHA5M6\":{\"child\":\"EFCURJ2SBVD2FL3TJHA5M6\",\"type\":\"s\"},\"FR535IH3TZEY7FPSYDSISW\":{\"child\":\"FR535IH3TZEY7FPSYDSISW\",\"type\":\"s\"},\"KFSNHYBPQVGYDMMNDKAA2F\":{\"child\":\"KFSNHYBPQVGYDMMNDKAA2F\",\"type\":\"s\"},\"LQQMYO3GFNF7FCBZZZNIAF\":{\"child\":\"LQQMYO3GFNF7FCBZZZNIAF,CIEY2R6VMZCNTIOBX44T35\",\"type\":\"u\"},\"N4G2HN6RDZD6VDS6P6TH5P\":{\"child\":\"N4G2HN6RDZD6VDS6P6TH5P\",\"type\":\"s\"},\"OSNX5DOHTVCCLPXELWTZJP\":{\"child\":\"OSNX5DOHTVCCLPXELWTZJP,BOCKDYMK2ZD7BFUC7QLW5V,COUCVO32UZF4RCJ3RZANTY\",\"type\":\"b\"},\"TBT6W42QURA7VARNW5CDQS\":{\"child\":\"TBT6W42QURA7VARNW5CDQS\",\"type\":\"s\"},\"TT7Y6VYHB5DIHGYYMTQ2L2\":{\"child\":\"TT7Y6VYHB5DIHGYYMTQ2L2,UEFP6NIWIZHXBJEU3BKY44,EEQVFM2RXVDCVEGVRGU7TT\",\"type\":\"b\"}}");
        __adroll.product_events = ["productView", "addToCart", "cartView", "purchase", "productListView"];
        var scheme = (("https:" == document.location.protocol) ? "https" : "http");
        var adnxs_domain = 'secure.adnxs.com';
        var aol_domain = 'secure.leadback.advertising.com';

        if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
        var el = document.createElement("div");
        el.style["width"] = "1px";
        el.style["height"] = "1px";
        el.style["display"] = "inline";
        el.style["position"] = "absolute";

        if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','//connect.facebook.net/en_US/fbevents.js');
        }

        try {
                try {
                
(function() {
var rtb = document.createElement("div");
rtb.style["width"] = "1px";
rtb.style["height"] = "1px";
rtb.style["display"] = "inline";
rtb.style["position"] = "absolute";
rtb.innerHTML = ["/cm/aol/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2","/cm/index/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2","/cm/n/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2","/cm/outbrain/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2","/cm/pubmatic/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2","/cm/r/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2","/cm/taboola/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2","/cm/triplelift/out?advertisable=GRHTBZVEVFAZJFB4L7GVM2"].reduce(function (acc, cmURL) {
    return acc + '<img height="1" width="1" style="border-style:none;" alt="" src="' + __adroll._srv(cmURL) + '"/>';
}, '');
__adroll._head().appendChild(rtb);
})();

                } catch(e) {}
                try {
                (function() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (window === window.top && ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('crios') === -1) {
    window.document.body.className += ' adroll_safari_light_theme';
    var b = window.document.createElement('script');
    b.language = 'javascript';
    b.src = '//d.adroll.com/bounce/pre/GRHTBZVEVFAZJFB4L7GVM2/E22O5FZTDZFL7BBGXD3KTD/?d=' + encodeURIComponent('//s.adroll.com/j/bounce.js');
    window.__adroll._head().appendChild(b);
  }
})();
                } catch(e) {}
                try {
                // Helper functions

function ajaxGetJson(url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(JSON.parse(this.responseText));
            } else {
                console.warn('AdRoll Pixel: Request to ' + url + ' failed: "' + this.statusText + '"');
            }
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}

function getProductByHandle(productHandle, callback) {
    var url = '/products/' + productHandle + '.js';
    ajaxGetJson(url, callback)
}

function getCart(callback) {
    var url = '/cart.js';
    ajaxGetJson(url, callback);
}

function getProductFromCart(cart, variantId) {
    for (var i = 0; i < cart.items.length; i++) {
        if (String(cart.items[i].variant_id) === String(variantId)) {
            return cart.items[i];
        }
    }
    return null;
}

function getAddToCartTrackQueue() {
    if (typeof window.localStorage === 'undefined') {
        return [];
    }
    var data = window.localStorage.getItem('adroll-shopify-add-to-cart-track-queue');
    if (data === null) {
        return [];
    }
    try {
        return JSON.parse(data);
    } catch(e) {
        return [];
    }
}

function setAddToCartTrackQueue(array) {
    if (typeof window.localStorage !== 'undefined') {
        window.localStorage.setItem('adroll-shopify-add-to-cart-track-queue', JSON.stringify(array));
    }
}

function clearAddToCartTrackQueue() {
    setAddToCartTrackQueue([]);
}

function formatCentPrice(price) {
    price = parseInt(price, 10);
    price = isNaN(price) ? '' : (price / 100).toFixed(2);
    return price;
}

function getProductHandleFromCurrentUrl() {
    var matches = window.location.href.match(/.*(?:\/products\/|\/product\/)([^?#/]+)/);
    return matches ? matches[1] : null;
}

function getCurrentPage() {
    var pathname = window.location.pathname;
    var href = window.location.href;

    if (pathname === '/') {
        return 'home_page';
    }
    if ((href.indexOf('/products/') !== -1) || (href.indexOf('/product/') !== -1)) {
        return 'product_page';
    }
    if (pathname.indexOf('/cart') !== -1){
        return 'cart_page';
    }
    if (typeof(Shopify) !== 'undefined' && Shopify.Checkout !== undefined && Shopify.Checkout.page !== undefined && Shopify.Checkout.page === 'thank_you') {
        return 'conversion_page'
    }
    if (typeof(BOLD) !== 'undefined' && BOLD.order !== undefined && BOLD.order.id !== undefined) {
        return 'bold_cashier_conversion_page'
    }
}


// Payload functions

function getProductViewPayload(product) {
    var payload = {products: []};
    payload.products.push({
        product_id: String(product.id),
        category: product.type,
        price: formatCentPrice(product.price)
    });
    return payload;
}

function getCartViewPayload(cart) {
    var payload = {products: []};
    for (var i = 0; i < cart.items.length; i++) {
        var item = cart.items[i];
        payload.products.push({
            product_id: String(item.product_id),
            category: item.type,
            price: formatCentPrice(item.price),
            quantity: String(item.quantity)
        });
    }
    return payload;
}

function getPurchasePayload() {
    var payload = {
        order_id: String(Shopify.checkout.order_id),
        conversion_value: Shopify.checkout.total_price, // Total_price attribute in checkout object is already formatted
        products: []
    };
    for (var i = 0; i < Shopify.checkout.line_items.length; i++) {
        var item = Shopify.checkout.line_items[i];
        payload.products.push({
            product_id: String(item.product_id),
            price: item.price, // Price attribute in checkout line items is already formatted
            quantity: String(item.quantity)
        });
    }
    return payload;
}

function getBoldCashierPurchasePayload() {
    var payload = {
        order_id: String(BOLD.order.id),
        conversion_value: formatCentPrice(BOLD.order.total),
        products: []
    };
    for (var i = 0; i < BOLD.order.line_items.length; i++) {
        var item = BOLD.order.line_items[i];
        payload.products.push({
            product_id: String(item.platform_product_id),
            price: formatCentPrice(item.price),
            quantity: String(item.quantity)
        });
    }
    return payload;
}

// Tracking functions

function trackAjaxAddToCart(addToCartFormData, ajaxResponseObject) {
    // Receives as parameter the ajax payload with variant_id and optional quantity and
    // the ajax response which is an object with the item details in the cart.
    var qtyAdded = /quantity["']?\s*[=:]\s*["']?([0-9]*)["']?/.exec(addToCartFormData);
    qtyAdded = qtyAdded ? qtyAdded[1] : 1;

    var addToCartPayload = {
        products: [{
            product_id: String(ajaxResponseObject.product_id),
            quantity: String(qtyAdded),
            price: formatCentPrice(ajaxResponseObject.price),
            category: ajaxResponseObject.product_type
        }]
    };

    adroll.track('pageView', {segment_name: 'shopify_added_product_to_cart'});
    adroll.track('addToCart', addToCartPayload);

    var addToCartTrackQueue = getAddToCartTrackQueue();
    if (addToCartTrackQueue.length > 0) {
        var newList = [];
        for (var i = 0;  i < addToCartTrackQueue.length; i++) {
            if (addToCartTrackQueue[i].variant_id != ajaxResponseObject.variant_id || addToCartTrackQueue[i].quantity != qtyAdded) {
                newList.push(addToCartTrackQueue[i]);
            }
        }
        setAddToCartTrackQueue(newList);
    }
}

function setupAjaxListeners() {
    // Set up listeners to fire the pixel if/when the user peforms specific actions that trigger ajax requests.
    // Since we cant create globals we test for the XMLHttpRequest overwrite
    if (typeof XMLHttpRequest.prototype.adrollOpen === 'undefined') {
        // We mock fetch() in order to determine if we should mock then() as well
        var adrollFetch = fetch;
        fetch = function() {
            var url = arguments[0];
            var body = '';
            if ((arguments.length > 1) && (typeof arguments[1].body !== 'undefined'))
            {
                body = arguments[1].body;
            }
            var promise = adrollFetch.apply(this,arguments);
            if (url && url.indexOf('cart/add') !== -1) {
                //If its a product being added to cart we add a function to track it
                promise = promise.then(function (response) {
                    if (response.ok) {
                        trackAjaxAddToCart(body, response.clone().json());
                    }
                    return response;
                });
            }
            return promise;
        };
    }
    if (typeof XMLHttpRequest.prototype.adrollOpen === 'undefined') {
        // We mock the XMLHttpRequest open method in order to determine if we should mock the send method
        XMLHttpRequest.prototype.adrollOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function () {
            var url = arguments[1];
            if (url && url.indexOf('cart/add') !== -1) {
                // We mock the instance's send method if the request is to the "add to the cart" url.
                this.adrollSend = this.send;
                this.send = function (value) {
                    try {
                        if (value) {
                            var self = this; // The xhttp request object

                            var trackOnSuccess = function () {
                                if (self.readyState === 4 && self.status === 200) {
                                    trackAjaxAddToCart(value, JSON.parse(self.responseText));
                                }
                            };

                            if (typeof self.addEventListener !== 'undefined') {
                                self.addEventListener('readystatechange', trackOnSuccess);
                            } else {
                                if (typeof self.onreadystatechange !== 'undefined' && self.onreadystatechange !== null) {
                                    // If the xhttp object already has an onreadystatechange callback, make sure we preserve it.
                                    self.adrollOnreadystatechange = self.onreadystatechange;
                                    self.onreadystatechange = function () {
                                        self.adrollOnreadystatechange();
                                        trackOnSuccess();
                                    }
                                } else {
                                  // If there is no onreadystatechange callback, we can safely set it.
                                  self.onreadystatechange = trackOnSuccess;
                                }
                            }
                        }
                    } catch(e) {
                        // if something goes wrong tracking the addToCart,
                        // we just ignore it and prevent the website from breaking.
                        console.log(e);
                    }
                    this.adrollSend(value);
                };
            }
            this.adrollOpen.apply(this, arguments);
        }
    }
}

function setupFormSubmitListeners() {
    // For form submits, we don't have a way to get the item details and track the add to cart properly.
    // We manage a list in localStorage for products we need to track as "added to cart".
    // If we identify an add to cart submit, we just add the variand id and quantity into the list.
    // On page loads, we check if this list is empty or not and track it correctly.
    var addToCartForms = document.querySelectorAll('form[action*="cart/add"]');
    for (var i = 0; i < addToCartForms.length; i++) {
        addToCartForms[i].addEventListener('submit', function () {
            var currentList = getAddToCartTrackQueue();
            var variantId = this.querySelector('[name=id]');

            if (!variantId) {
                return;
            }

            variantId = variantId.value;
            var quantity = this.querySelector('input[name=quantity]');
            quantity = quantity ? quantity.value : 1;

            currentList.push({'variant_id': variantId, 'quantity': quantity});
            setAddToCartTrackQueue(currentList);
        });
    }
}

function handlePageLoadTracking() {
    // Check the current page, build the appropriate payload and fire the pixel.
    switch(getCurrentPage()){
        case 'home_page':
            adroll.track('pageView');
            adroll.track('homeView');
            break;
        case 'product_page':
            adroll.track('pageView'); // ECOMM-607 to also apply any url segmentation rules
            adroll.track('pageView', {segment_name: 'shopify_viewed_product'});
            var productHandle = getProductHandleFromCurrentUrl();
            getProductByHandle(productHandle, function(product) {
                adroll.track('productView', getProductViewPayload(product));
            });
            break;
        case 'cart_page':
            adroll.track('pageView', {segment_name: 'shopify_viewed_cart'});
            getCart(function(cart) {
                adroll.track('cartView', getCartViewPayload(cart));
            });
            break;
        case 'conversion_page':
            adroll.setProperties({
                currency: Shopify.checkout.presentment_currency,
                ORDER_ID: Shopify.checkout.order_id,
                USER_ID: Shopify.checkout.customer_id
            });
            var purchasePayload = getPurchasePayload();
            adroll.track('purchase', purchasePayload);
            var pageViewPayload = JSON.parse(JSON.stringify(purchasePayload));
            pageViewPayload.segment_name = 'shopify_responsive_checkout';
            adroll.track('pageView', pageViewPayload);

            adroll.identify({
                email: Shopify.checkout.email,
                userId: Shopify.checkout.customer_id
            });
            break;
        case 'bold_cashier_conversion_page':
            var purchasePayload = getBoldCashierPurchasePayload();
            adroll.track('purchase', purchasePayload);
            var pageViewPayload = JSON.parse(JSON.stringify(purchasePayload));
            pageViewPayload.segment_name = 'shopify_responsive_checkout';
            adroll.track('pageView', pageViewPayload);

            adroll.identify({
                email: BOLD.order.customer.email
            });
        default:
            adroll.track('pageView');
    }
}

function handleAddToCartQueueTracking() {
    // Check localStorage for list of variants that were previously added to the cart, then get the corresponding
    // product data and fire the pixel.
    var addToCartTrackQueue = getAddToCartTrackQueue();
    if (addToCartTrackQueue.length > 0) {
        getCart(function(cart) {
            var addToCartPayload = {products: []};
            for (var i = 0;  i < addToCartTrackQueue.length; i++) {
                var product = getProductFromCart(cart, addToCartTrackQueue[i].variant_id);
                if (!product) {
                    continue;
                }
                addToCartPayload.products.push({
                    'product_id': String(product.product_id),
                    'quantity': addToCartTrackQueue[i].quantity,
                    'price': formatCentPrice(product.price),
                    'category': product.product_type
                });
            }
            adroll.track('pageView', {segment_name: 'shopify_added_product_to_cart'});
            adroll.track('addToCart', addToCartPayload);
            clearAddToCartTrackQueue();
        });
    }
}

function setupHashChangeListener() {
    var oldHash = window.location.hash;
    window.setInterval(function(){
        var newHash = window.location.hash;
        if (newHash !== oldHash) {
            // Treat hash changes as page loads and check if we need to fire again.
            handlePageLoadTracking();
            oldHash = newHash;
        }
    }, 5000);
}

setupAjaxListeners();
setupFormSubmitListeners();
setupHashChangeListener();
handlePageLoadTracking();
handleAddToCartQueueTracking();

                } catch(e) {}
                try {
                var func = function(eventName, eventAttrs) {
    if (!__adroll.is_product_event(eventName)) {
        return;
    }
    if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
        var opts = __adroll._global("adroll_rollcrawl_opts");
            __adroll.extract_pid(opts, eventName, eventAttrs, "facebook", function(pid) {
            if (pid) {
                if (!pid.product_list || pid.product_list.length === 0) {
                    return;
                }
                if (!pid.product_action) {
                    pid.product_action = "ViewContent";
                } else if (pid.product_action.toLowerCase() === "purchase") {
                    pid.product_action = "CustomPurchase";
                } else if (pid.product_action.toLowerCase() === "addtocart") {
                    pid.product_action = "AddToCart";
                }
                var product_list = [];
                // handle product json array
                var products = pid.product_list;
                for (var i = 0; i < products.length; i++) {
                    var product_id = products[i]["product_id"];
                    var product_group = products[i]["product_group"];
                    if (product_id && product_id.length != 0 ) {
                        var x = __adroll.normalize_var(product_id.replace("\"", "\\\"")).toLowerCase() + "_";
                        if (product_group) {
                            x += __adroll.normalize_var(product_group + '').toLowerCase();
                        }
                        product_list.push(x);
                    }
                }
                var url = __adroll._srv("/fb/tr/?id=390364334822122" +
                                        "&ev=" + encodeURIComponent(pid.product_action) +
                                        "&cd[content_type]=product" +
                                        "&cd[content_ids]=" + encodeURIComponent(__adroll.jsonStringify(product_list)) +
                                        "&cd[application_id]=321379434608647" +
                                        "&cd[product_catalog_id]=263576064435788");
                var img = document.createElement("img");
                img.src = url;
                img.height = img.width = 1;
                img.border = 0;
                img.setAttribute("alt", "");
                __adroll._head().appendChild(img);
            }
         });
     }
}
__adroll.registerTrackCallback(func, 'fbProductEventCallback')

                } catch(e) {}
                try {
                var func = function(eventName, eventAttrs, headers) {
    if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
        var segment_eids = __adroll.segment_map[headers["x-segment-eid"]].child;
        var segment_type = __adroll.segment_map[headers["x-segment-eid"]].type;
        var external_data = __adroll.convert_to_map(eventAttrs);

        var product_id_list = [];
        var product_group_list = [];

        // parsing product json from external data
        if (external_data && external_data.hasOwnProperty("products")) {
            var products = external_data["products"];
            for (var i = 0; i < products.length; i++) {
                var product_id = products[i]["product_id"];
                var product_group = products[i]["product_group"];
                if (product_id && product_id.length != 0 ) {
                    product_id_list[i] = product_id;
                    product_group_list[i] = product_group;
                }
            }
        }
        if (typeof __adroll.fb === 'undefined'){
            fbq('init', '390364334822122');

            fbq('set', 'autoConfig', 'false', '390364334822122');
            __adroll.fb=true;

            var __fbcd = {segment_eid: segment_eids};
            for (var prop in external_data){
                if (prop === "products") {
                    __fbcd['ar_product_id'] = product_id_list;
                    __fbcd['ar_product_group'] = product_group_list;
                }
                else {
                    __fbcd['ar_' + prop] = external_data[prop];
                }
            }

            fbq('track', "PageView", __fbcd);

            if (segment_type === "c") {
                var suppress_conversion = (typeof adroll_shopify_dupe_conversion == 'boolean' && adroll_shopify_dupe_conversion) ||
                                          (typeof adroll_shopify_empty_referrer == 'boolean' && adroll_shopify_empty_referrer);

                if(!suppress_conversion) {
                    var conversion = __adroll.get_conversion_value(eventAttrs);
                    var conversion_value = conversion['conv_value'];
                    var currency = conversion['currency'];
                    var fb_track_src = "https://www.facebook.com/tr/?id=390364334822122" +
                                      "&ev=Purchase" +
                                      "&cd[value]=" + conversion_value +
                                      "&cd[currency]=" + currency +
                                      "&cd[segment_eid]=" + encodeURIComponent(segment_eids);

                    if(typeof external_data == "object"){
                        for (var prop in external_data){
                            if (prop === "products") {
                                fb_track_src += "&cd[ar_product_id]=" + product_id_list + "&cd[ar_product_group]=" + product_group_list;
                            }
                            else {
                                fb_track_src += "&cd[ar_" + prop + "]=" + external_data[prop];
                            }
                        }
                    }

                    var img = document.createElement("img");
                    img.src = fb_track_src;
                    img.height = img.width = 1;
                    img.border = 0;
                    img.setAttribute("alt", "");
                    __adroll._head().appendChild(img);
                }
            }
        } else {
            var __fbcd = {event: "EventSegment", segment_eid: segment_eids};
            for (var prop in external_data){
                if (prop === "products") {
                    __fbcd['ar_product_id'] = product_id_list;
                    __fbcd['ar_product_group'] = product_group_list;
                }
                else {
                    __fbcd['ar_' + prop] = external_data[prop];
                }
            }

            fbq('track', "CustomEvent", __fbcd);
            if (segment_type === "c") {
                var suppress_conversion = (typeof adroll_shopify_dupe_conversion == 'boolean' && adroll_shopify_dupe_conversion) ||
                                          (typeof adroll_shopify_empty_referrer == 'boolean' && adroll_shopify_empty_referrer);

                if(!suppress_conversion) {
                    var conversion = __adroll.get_conversion_value(eventAttrs);
                    var conversion_value = conversion['conv_value'];
                    var currency = conversion['currency'];
                    var fb_track_src = "https://www.facebook.com/tr/?id=390364334822122" +
                                      "&ev=Purchase" +
                                      "&cd[value]=" + conversion_value +
                                      "&cd[currency]=" + currency +
                                      "&cd[segment_eid]=" + encodeURIComponent(segment_eids);

                    if(typeof external_data == "object"){
                        for (var prop in external_data){
                            if (prop === "products") {
                                fb_track_src += "&cd[ar_product_id]=" + product_id_list + "&cd[ar_product_group]=" + product_group_list;
                            } else {
                                fb_track_src += "&cd[ar_" + prop + "]=" + external_data[prop];
                            }
                        }
                    }

                    var img = document.createElement("img");
                    img.src = fb_track_src;
                    img.height = img.width = 1;
                    img.border = 0;
                    img.setAttribute("alt", "");
                    __adroll._head().appendChild(img);
                }
            }
        }
    }
}
__adroll.registerDynoCallback(func, 'fbDynoCallback');

                } catch(e) {}
        } catch(e) {}

       __adroll.loadGlobalFunctions();

        {
           var rollcrawl_opts = {
                "regexp": null,
                "blacklist_regexp": null,
                "regexp_group": null,
                "product_group_regexp": null,
                "product_group_group": null
            };
            this._set_global("adroll_rollcrawl_opts", rollcrawl_opts);
            __adroll.track('productView');
            }
        __adroll._head().appendChild(el);
        if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id);}
    };
}
catch(e) {}

try {
    __adroll.load_adroll_tpc(__adroll.render_advertisable_cell);
}
catch(e) {}
